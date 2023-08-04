/**
 * @description upload interface
 *
 */
import { UppyFile } from '@uppy/core';
declare type FilesType = {
    [key: string]: UppyFile<{}, {}>;
};
/**
 * 配置参考 https://uppy.io/docs/uppy/
 */
export interface IUploadConfig {
    maxFileSize?: number;
    maxNumberOfFiles?: number;
    onBeforeUpload?: (files: FilesType) => boolean | FilesType;
    onSuccess: (file: UppyFile<{}, {}>, response: any) => void;
    onFailed: (file: UppyFile<{}, {}>, response: any) => void;
    onError: (file: UppyFile<{}, {}>, error: any, res: any) => void;
    [key: string]: any;
}
export declare type SDKConfig = {
    customPreUpload: string;
    customConfirmUpload: string;
    expire?: number;
    requireType?: 'IMAGE' | 'AUDIO' | 'VIDEO';
    optionals?: string[];
    riskReq?: any;
    onProgress?: (file: File, state: string, progress: any) => void;
    imgBase64URL?: string;
    customDownloadFileName?: string;
    customHeader?: any;
    auth?: boolean;
};
export {};
