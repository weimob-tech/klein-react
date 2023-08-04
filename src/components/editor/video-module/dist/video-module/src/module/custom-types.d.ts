/**
 * @description video element
 *
 */
declare type EmptyText = {
    text: '';
};
export declare type VideoElement = {
    type: 'video';
    src: string;
    poster?: string;
    width?: string;
    height?: string;
    children: EmptyText[];
};
export {};
