/**
 * @description upload image config
 *
 */
import { IUploadConfig } from '@klein-editor/core';
declare type InsertFn = (src: string, alt: string, href: string) => void;
export declare type IUploadConfigForImage = IUploadConfig & {
    allowedFileTypes?: string[];
    customInsert?: (res: any, insertFn: InsertFn) => void;
    customUpload?: (files: File, insertFn: InsertFn) => void;
    base64LimitSize: number;
    customBrowseAndUpload?: (insertFn: InsertFn) => void;
};
export declare function genUploadImageConfig(): IUploadConfigForImage;
export {};
