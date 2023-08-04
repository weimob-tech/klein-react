/**
 * 业务型组件
 * 木偶组件，内部不能有自己的状态
 */
import React from 'react';
import classNames from 'classnames';
import Upload from './upload';
import Button from '../button';
import { ConfigContext } from '../config-provider/context';
import type { UploadProps, ChangeRes } from './interface';

export interface PresetProps extends UploadProps {
  /** 重置回调 */
  onReset?: () => void;
  /** 自定义下载文字 */
  actionTips?: React.ReactNode;
  /** 是否展示重置按钮 */
  showReset?: boolean;
  /** 预设图片路径 */
  fileUrl?: string;
}

const Preset = React.forwardRef<unknown, PresetProps>((props, ref) => {
  const {
    fileUrl,
    className,
    prefixCls: customPrefixCls,
    onReset,
    onChange,
    tips,
    actionTips,
    showReset,
    ...resetProps
  } = props;

  const { getPrefixClassName } = React.useContext(ConfigContext);
  const uploadPrefixCls = classNames(
    getPrefixClassName('upload', customPrefixCls),
    className,
  );

  const presetCls = `${uploadPrefixCls}-preset`;

  const handleFileChange = (info: ChangeRes) => {
    onChange?.(info);
  };

  const handleReset = () => {
    onReset?.();
  };

  const renderPresetDom = () => {
    const endProps = {
      ref,
      prefixCls: `${presetCls}-change`,
      showUploadList: false,
      onChange: handleFileChange,
      ...resetProps,
    };
    return (
      <div className={uploadPrefixCls}>
        <div className={presetCls}>
          {fileUrl && (
            <div className={`${presetCls}-img`}>
              <div
                style={{ backgroundImage: `url(${fileUrl})` }}
                className={`${presetCls}-img-single`}
               />
              <div className={`${presetCls}-img-mask`}>
                <Upload {...endProps}>
                  <Button size="small">替换</Button>
                </Upload>
                {showReset && (
                  <Button
                    className={`${presetCls}-img-reset`}
                    size="small"
                    onClick={handleReset}
                  >
                    重置
                  </Button>
                )}
              </div>
            </div>
          )}
          {actionTips && (
            <div className={`${presetCls}-action`}>{actionTips}</div>
          )}
          {tips && <div className={`${presetCls}-tips`}>{tips}</div>}
        </div>
      </div>
    );
  };

  return <>{renderPresetDom()}</>;
});

Preset.defaultProps = {
  showReset: true,
};

export default Preset;
