/**
 * @description video menu config
 *
 */
import { IUploadConfig } from '@klein-editor/core';
import { VideoElement } from '../custom-types';
declare type InsertFn = (src: string, poster: string) => void;
export declare type IUploadConfigForVideo = IUploadConfig & {
    allowedFileTypes?: string[];
    customInsert?: (res: any, insertFn: InsertFn) => void;
    customUpload?: (files: File, insertFn: InsertFn) => void;
    customBrowseAndUpload?: (insertFn: InsertFn) => void;
};
export declare function genUploadVideoMenuConfig(): IUploadConfigForVideo;
/**
 * 生成插入网络视频的配置
 */
export declare function genInsertVideoMenuConfig(): {
    onInsertedVideo(node: VideoElement): void;
    /**
     * 检查 video ，支持 async
     * @param src src
     */
    checkVideo(src: string): boolean | string | undefined;
    /**
     * 转换 video src
     * @param src src
     * @returns new src
     */
    parseVideoSrc(src: string): string;
};
export {};
