/**
 * @description gen uploader
 *
 */
import Uppy from '@uppy/core';
import { IUploadConfig } from './interface';
declare function createUploader(config: IUploadConfig): Uppy;
export default createUploader;
