import OriginUpload from './upload';
import { UploadProps } from './interface';
import Drag from './dragger';
import Preset from './preset';

type OriginUploadType = typeof OriginUpload;

interface UploadInterface extends OriginUploadType {
  Dragger: typeof Drag;
  Preset: typeof Preset;
}

const Upload = OriginUpload as UploadInterface;

Upload.Dragger = Drag;
Upload.Preset = Preset;

export { UploadProps };
export default Upload;
