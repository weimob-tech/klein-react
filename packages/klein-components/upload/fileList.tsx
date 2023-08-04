import React from 'react';
import classNames from 'classnames';
import Tooltip from '../tooltip';
import Divider from '../divider';
import type { UploadFile, UploadProps } from './interface';
import { UploadFileStatus } from './interface';
import Icon from '../icon';
import Image from '../image';
import type { PreviewImageProps } from '../image/image-preview';
import Preview from '../image/image-preview';
import Button from '../button';

const {
  SearchLine,
  AttachmentLine,
  CloseLine,
  ReloadLine,
  CloseFill,
  LoadingLine,
  SuccessFill,
  ErrorFill,
} = Icon;

export interface FileListProps extends Partial<UploadProps> {
  removeClick: (file: UploadFile) => void;
  renderRcOverlay: (noChildren: boolean) => React.ReactNode;
  tipsOverlay?: React.ReactNode;
  onFileInputClick: () => void;
  onImagePreview?: (file: UploadFile) => void;
  onFileReplace: (file: UploadFile, index: number) => void;
}

const FileList = (props: FileListProps) => {
  const {
    fileList,
    prefixCls,
    listType,
    deletable,
    removeClick,
    itemRender,
    renderRcOverlay,
    tipsOverlay,
    showUploadList,
    maxCount,
    fileItemComponent,
    onImagePreview,
    onFileInputClick,
    onFileReplace,
    customOnClick,
    preview,
    fit,
  } = props;

  const [visible, setVisible] = React.useState<boolean>(false);
  const [previewId, setPreviewId] = React.useState<number>(0);

  const itemPrefixCls = `${prefixCls}-fileList-${listType}`;

  const fileListCls = classNames(`${prefixCls}-fileList`, {
    [`${prefixCls}-picture-card`]: listType === 'picture-card',
    [`${prefixCls}-text`]: listType === 'text',
  });

  const onPreview = (file: UploadFile) => {
    if (onImagePreview) {
      onImagePreview(file);
      return;
    }
    onPreviewVisibleChange(true, file.url);
  };

  const onReplace = (
    e: React.MouseEvent,
    file: UploadFile,
    fileIndex: number,
  ) => {
    if (customOnClick) {
      customOnClick(e, file);
      return;
    }
    onFileReplace(file, fileIndex);
    onFileInputClick();
  };

  const onPreviewVisibleChange = (isVisible: boolean, url?: string) => {
    setVisible(isVisible);
    const pid = fileList?.findIndex((v) => v.url === url);
    setPreviewId(pid as number);
  };

  const renderMask = (file: UploadFile, index: number) => {
    const childPrefixCls = `${itemPrefixCls}-mask-child`;

    const itemCls = classNames(`${itemPrefixCls}-mask`, {
      'mask-white': preview !== true && file.status === 'done',
    });

    const errTip = '上传失败';

    const errorChild = (
      <Tooltip title={file.error?.errmsg || errTip}>
        <span className={childPrefixCls}>{errTip}</span>
      </Tooltip>
    );

    const successChild =
      preview === true ? (
        <span className={childPrefixCls} onClick={() => onPreview(file)}>
          <SearchLine />
        </span>
      ) : (
        <span className={childPrefixCls}>
          {/* @ts-ignore */}
          <Button size="small" onClick={(e) => onReplace(e, file, index)}>
            替换
          </Button>
        </span>
      );

    const uploadingChild = <span>{file.percent}</span>;
    const childMap = {
      error: errorChild,
      done: successChild,
      uploading: uploadingChild,
    };

    return (
      <div className={itemCls}>
        {childMap[file.status as keyof typeof childMap] || null}
      </div>
    );
  };

  const getFileItemIcon = (file: UploadFile) => {
    const iconMap = {
      uploading: <LoadingLine />,
      done: <SuccessFill />,
      error: <ErrorFill />,
    };

    const icon = iconMap[file.status as keyof typeof iconMap];
    if (!icon) return iconMap.uploading;
    return iconMap[file.status as keyof typeof iconMap];
  };

  const renderItem = (file: UploadFile, key: any, index: number) => {
    if (!file) return;
    const itemCls = classNames(itemPrefixCls, {
      [`${itemPrefixCls}-error`]: file.status === 'error',
      [`${itemPrefixCls}-done`]: file.status === 'done',
      [`${itemPrefixCls}-uploading`]: file.status === 'uploading',
      [`${itemPrefixCls}-first-child`]: index === 0,
    });

    const itemChildProps: {
      className: string;
      key?: any;
    } = {
      className: itemCls,
    };

    if (!itemRender && !fileItemComponent) {
      itemChildProps.key = key;
    }

    let itemChild = (
      <div {...itemChildProps}>
        <span className={`${itemPrefixCls}-icon`}>
          {/* {file.status === 'uploading' ? <LoadingLine /> : <AttachmentLine />} */}
          {getFileItemIcon(file)}
        </span>
        <span className={`${itemPrefixCls}-fileName`}>
          {file.name}
          <AttachmentLine />
        </span>
        {file.status === 'error' && (
          <>
            <span
              className={`${itemPrefixCls}-reload`}
              onClick={(e) => onReplace(e, file, index)}
            >
              <ReloadLine />
            </span>
            {deletable ? (
              <Divider
                style={{
                  marginLeft: 6,
                  marginRight: 6,
                  top: 0,
                }}
                direction="col"
              />
            ) : null}
          </>
        )}
        {deletable ? (
          <span
            className={`${itemPrefixCls}-close`}
            onClick={() => removeClick(file)}
          >
            <CloseLine />
          </span>
        ) : null}
      </div>
    );

    if (listType === 'picture-card') {
      // const styleObj = {
      //   backgroundImage: `url(${file.url})`,
      // };
      itemChild = (
        <div {...itemChildProps}>
          <div className={`${itemPrefixCls}-wrapper`}>
            {/* <div className={`${itemPrefixCls}-img`} style={styleObj}></div> */}
            <Image
              src={file.url || 'error'}
              fit={fit}
              width="100%"
              height="100%"
            />
          </div>
          {file.showMain && (
            <div className={`${itemPrefixCls}-mainImgTip`}>主图</div>
          )}
          {/* {file.replace && <div className={`${itemPrefixCls}-mainImgTip`}>替换</div>}  */}
          {deletable ? (
            <span
              className={`${itemPrefixCls}-close`}
              onClick={() => removeClick(file)}
            >
              <CloseFill />
            </span>
          ) : null}
          {renderMask(file, index)}
        </div>
      );
    }
    if (itemRender) {
      return itemRender(itemChild, file, index, fileList);
    }
    if (fileItemComponent) {
      const FileItemComponent = fileItemComponent;
      return (
        <FileItemComponent
          key={file.uid}
          itemChild={itemChild}
          file={file}
          index={index}
          fileList={fileList}
        />
      );
    }
    return itemChild;
  };

  const renderFileListContent = () => {
    const fileListDom = (
      <>
        {fileList && fileList.length && showUploadList
          ? fileList.map((file, index) =>
              renderItem(file, file?.uid || file?.name, index),
            )
          : null}
        <Preview
          onClose={() => onPreviewVisibleChange(false)}
          visible={visible}
          curIndex={previewId}
          images={fileList as PreviewImageProps[]}
        />
      </>
    );
    if (listType === 'picture-card') {
      if (
        maxCount &&
        fileList &&
        maxCount === fileList.length
        // &&
        // fileList[fileList.length - 1].status === ('done' || 'error')
      ) {
        return (
          <div className={fileListCls}>
            {fileListDom}
            {renderRcOverlay(true)}
            {tipsOverlay}
          </div>
        );
      }
      return (
        <div className={fileListCls}>
          {fileListDom}
          {renderRcOverlay(false)}
          {tipsOverlay}
        </div>
      );
    }
    return (
      <div className={fileListCls}>
        {renderRcOverlay(false)}
        {tipsOverlay}
        {fileListDom}
      </div>
    );
  };

  return <>{renderFileListContent()}</>;
};

export default FileList;
