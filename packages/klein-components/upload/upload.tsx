import React from 'react';
import classNames from 'classnames';
import Button from '../button';
import Icon from '../icon';
import type { RcFile, UploadFile, UploadProps, ChangeRes } from './interface';
import type { UploadProgressEvent } from '../components/rc-upload/interface';
import { RcUpload } from '../components';
import { ConfigContext } from '../config-provider/context';
import { fileToObject, findItemFromList } from './utils';
import FileList from './fileList';

const { UploadLine, PlusLine, ContainerLine } = Icon;

const Upload = React.forwardRef<unknown, UploadProps>((props, ref) => {
  const {
    children,
    listType,
    onChange,
    onRemove,
    beforeUpload,
    prefixCls: customPrefixCls,
    disabled,
    isOnGrayBg,
    tips,
    defaultFileList,
    fileList: outerFileList,
    className,
    showUploadList,
    maxCount,
    itemRender,
    fileItemComponent,
    preview,
    deletable,
    text,
    fit,
    onPreview,
    customOnClick,
    // onFileReplace,
    ...resetProps
  } = props;

  const [fileList, setFileList] = React.useState<UploadFile[]>(
    defaultFileList || outerFileList || [],
  );

  const RcUploadRef = (ref as any) || React.useRef<typeof RcUpload>();

  const ReplaceFileRef = React.useRef<{ file: UploadFile; index: number }>();

  const currentUploadTypeRef = React.useRef<'replace' | 'upload'>('upload');

  const { getPrefixClassName } = React.useContext(ConfigContext);
  const uploadPrefixCls = getPrefixClassName('upload', customPrefixCls);

  if ('fileList' in props && outerFileList !== fileList) {
    setFileList(outerFileList!);
  }

  const handleChange = (info: ChangeRes) => {
    if (!('fileList' in props)) {
      setFileList([...info.fileList]);
    }
    onChange?.({
      ...info,
      fileList: [...info.fileList],
    });
  };

  const onFileReplace = (file: UploadFile, index: number) => {
    currentUploadTypeRef.current = 'replace';
    ReplaceFileRef.current = {
      file,
      index,
    };
  };

  const onStart = (file: RcFile) => {
    const fileItem = fileToObject(file);
    fileItem.status = 'uploading';

    let nextFileList = [...(fileList || [])];

    if (
      ReplaceFileRef.current &&
      ReplaceFileRef.current.file &&
      currentUploadTypeRef.current === 'replace'
    ) {
      nextFileList[ReplaceFileRef.current.index] = fileItem;
    } else {
      nextFileList.push(fileItem);
    }

    if (maxCount === 1) {
      nextFileList = nextFileList.slice(-1);
    } else if (maxCount) {
      nextFileList = nextFileList.slice(0, maxCount);
    }

    handleChange({
      file: fileItem,
      fileList: nextFileList,
    });
  };

  const onSuccess = (response: any, file: UploadFile, xhr: any) => {
    const fileItem = findItemFromList(file, fileList);

    if (fileItem) {
      fileItem.status = 'done';
      fileItem.response = response;
      fileItem.xhr = xhr;
      handleChange({
        file: fileItem,
        fileList,
      });
    }
  };

  const onProgress = (e: UploadProgressEvent, file: UploadFile) => {
    const fileItem = findItemFromList(file, fileList);

    if (fileItem) {
      fileItem.percent = e.percent;
      handleChange({
        event: e,
        file: fileItem,
        fileList,
      });
    }
  };

  const onError = (error: Error, response: any, file: UploadFile) => {
    const fileItem = findItemFromList(file, fileList);

    if (fileItem) {
      fileItem.error = error;
      fileItem.response = response;
      fileItem.status = 'error';

      handleChange({
        file: fileItem,
        fileList,
      });
    }
  };

  const handleFileRemove = (file: UploadFile) => {
    Promise.resolve(
      typeof onRemove === 'function' ? onRemove(file) : onRemove,
    ).then((res) => {
      if (res === false) {
        return;
      }

      const key = file.uid ? 'uid' : 'name';

      const fileListAfterRemoved = fileList.filter((v) => {
        return file[key] !== v[key];
      });

      if (fileListAfterRemoved) {
        file.status = 'removed';
        RcUploadRef.current?.abort(file);

        handleChange({
          file,
          fileList: fileListAfterRemoved,
        });
      }
    });
  };

  const getUploadChild = () => {
    let child = (
      <Button disabled={disabled} icon={<UploadLine />}>
        {text || '上传文件'}
      </Button>
    );

    if (listType === 'picture-card') {
      const uploadPrefixClsImageBtn = classNames(
        `${uploadPrefixCls}-imageBtn`,
        {
          bgWhite: isOnGrayBg,
        },
      );
      child = (
        <div className={uploadPrefixClsImageBtn}>
          <div className={`${uploadPrefixCls}-imageBtn-icon`}>
            <PlusLine />
          </div>
          <div className={`${uploadPrefixCls}-imageBtn-text`}>
            {text || '上传图片'}
          </div>
        </div>
      );
    }

    if (listType === 'drag') {
      child = (
        <div className={`${uploadPrefixCls}-dragBtn`}>
          <div className={`${uploadPrefixCls}-dragBtn-content`}>
            {/* <div className={`${uploadPrefixCls}-dragBtn-icon`}> */}
            <PlusLine />
            {/* </div> */}
          </div>
          {/* <div className={`${uploadPrefixCls}-dragBtn-text`}>上传图片</div> */}
        </div>
      );
    }

    if (listType === 'drag' && tips) {
      child = (
        <div className={`${uploadPrefixCls}-dragBtn`}>
          <div className={`${uploadPrefixCls}-dragBtn-content`}>
            <div className={`${uploadPrefixCls}-dragBtn-icon`}>
              <ContainerLine />
            </div>
            <div className={`${uploadPrefixCls}-dragBtn-info`}>
              点击或将文件拖拽到这里上传
            </div>
            {tips && (
              <div className={`${uploadPrefixCls}-dragBtn-tip`}>{tips}</div>
            )}
          </div>
          {/* <div className={`${uploadPrefixCls}-dragBtn-text`}>上传图片</div> */}
        </div>
      );
    }

    return child;
  };

  const onFileInputClick = () => {
    RcUploadRef.current.uploader.fileInput.click();
  };

  const renderFileList = (
    renderRcOverlay: (noChildren: boolean) => React.ReactNode,
    tipsOverlay: React.ReactNode,
  ) => {
    return (
      <FileList
        fileList={fileList}
        prefixCls={uploadPrefixCls}
        listType={listType}
        deletable={deletable}
        removeClick={handleFileRemove}
        onFileInputClick={onFileInputClick}
        itemRender={itemRender}
        renderRcOverlay={renderRcOverlay}
        tipsOverlay={tipsOverlay}
        showUploadList={showUploadList}
        tips={tips}
        fit={fit}
        maxCount={maxCount}
        fileItemComponent={fileItemComponent}
        preview={preview}
        onImagePreview={onPreview}
        onFileReplace={onFileReplace}
        customOnClick={customOnClick}
      />
    );
  };

  const renderUpload = () => {
    const listTypeCls = `${uploadPrefixCls}-${listType}`;
    const RcUploadCls = classNames(listTypeCls, className);
    const endRcUploadProps = {
      beforeUpload,
      onStart,
      onSuccess,
      onProgress,
      onError,
      prefixCls: uploadPrefixCls,
      className: RcUploadCls,
      disabled,
      ...resetProps,
    };
    const renderUploadOverlay = (noChildren: boolean) => (
      <>
        <RcUpload
          onClick={() => {
            currentUploadTypeRef.current = 'upload';
          }}
          customOnClick={customOnClick}
          ref={RcUploadRef}
          {...endRcUploadProps}
        >
          {children || (noChildren ? null : getUploadChild())}
        </RcUpload>
      </>
    );
    const tipsOverlay = (
      <>
        {listType !== 'drag' && tips && (
          <div className={`${listTypeCls}-tips`}>{tips}</div>
        )}
      </>
    );
    // return <>{renderFileList(uploadOverlay, tipsOverlay, endRcUploadProps)}</>;
    return <>{renderFileList(renderUploadOverlay, tipsOverlay)}</>;
  };

  return <>{renderUpload()}</>;
});

Upload.defaultProps = {
  preview: false,
  deletable: true,
  beforeUpload: () => true,
  showUploadList: true,
  listType: 'text',
  fit: 'cover',
  accept: '',
};

export default Upload;
