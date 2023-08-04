import type React from 'react';
import type { ImageProps } from '../image';
import type {
  UploadProgressEvent,
  UploadRequestOption as RcCustomRequestOptions,
} from '../components/rc-upload/interface';

export type UploadFileStatus =
  | 'error'
  // | 'success'
  | 'done'
  | 'uploading'
  | 'removed';

export interface RcFile extends File {
  uid: string;
  readonly lastModifiedDate: Date;
  readonly webkitRelativePath: string;
}

export interface UploadFile<T = any> {
  uid: string;
  size?: number;
  name: string;
  fileName?: string;
  lastModified?: number;
  lastModifiedDate?: Date;
  url?: string;
  status?: UploadFileStatus;
  percent?: number;
  thumbUrl?: string;
  originFileObj?: File | Blob;
  response?: T;
  error?: any;
  linkProps?: any;
  type?: string;
  xhr?: any;
  preview?: string;
  showMain?: boolean;
  // replace?: boolean;
}

export interface ChangeRes<T extends object = UploadFile> {
  file: T;
  fileList: UploadFile[];
  event?: UploadProgressEvent;
}

export interface ImageItemProps {
  itemChild: React.ReactNode;
  file?: UploadFile;
  index: number;
  fileList?: UploadFile[];
}

export interface UploadProps {
  /** 发到后台的文件参数名 */
  name?: string;
  /** 请求头设置 */
  headers?: Record<string, string>;
  /** 是否支持图片预览，该属性开启后单个图片的替换将失效 */
  preview?: boolean;
  /** 禁用上传 */
  disabled?: boolean;
  /** 是否展示文件列表 */
  showUploadList?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 上传文件 */
  fileList?: UploadFile[];
  /** 默认文件列表 */
  defaultFileList?: UploadFile[];
  /** 上传文件类型 */
  listType?: 'text' | 'picture' | 'picture-card' | 'drag';
  /** 接受上传的文件类型, 详见 input accept Attribute */
  accept?: string;
  /** 上传的地址 */
  action?: string;
  /** 提示信息 */
  tips?: React.ReactNode;
  /** 移除文件 */
  onRemove?: ((file: UploadFile) => void | boolean) | Promise<boolean | void>;
  /** 上传文件改变时的状态 */
  onChange?: (res: ChangeRes) => void;
  /** 完全自定义点击事件，如果传入该属性，则点击upload不会出现系统文件上传弹窗 */
  customOnClick?: (e: React.MouseEvent, file?: UploadFile) => void;
  /** 是否支持多选文件 */
  multiple?: boolean;
  customRequest?: (options: RcCustomRequestOptions) => void;
  /** 是否在灰色背景中使用 */
  isOnGrayBg?: boolean;
  /** 文件上传前的操作 */
  beforeUpload?: (
    file: RcFile,
    FileList: RcFile[],
  ) => boolean | PromiseLike<void>;
  /** 文件最大上传数量 */
  maxCount?: number;
  /** 自定义上传项 */
  itemRender?: (
    originNode: React.ReactElement,
    file: UploadFile,
    index: number,
    fileList?: UploadFile[],
  ) => React.ReactNode;
  /** 通过传入组件的方式自定义上传项 */
  fileItemComponent?: React.FC<ImageItemProps>;
  /** 点击预览图标时的回调 */
  onPreview?: (file: UploadFile) => void;
  // /** 点击替换按钮时的回调 */
  // onFileReplace: (file: UploadFile, fileIndex: number) => void;
  children?: React.ReactNode;
  /** 上传所需额外参数或返回上传额外参数的方法 */
  data?: object | ((file: UploadFile) => object);
  /** 上传按钮文本 */
  text?: React.ReactNode;
  /** 是否隐藏删除按钮 */
  deletable?: boolean;
  /** 上传后图片显示方式 */
  fit?: ImageProps['fit'];
  style?: React.CSSProperties;
  prefixCls?: string;
}
