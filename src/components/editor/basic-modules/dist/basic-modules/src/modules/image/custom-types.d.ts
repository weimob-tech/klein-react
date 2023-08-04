/**
 * @description image element
 *
 */
declare type EmptyText = {
    text: '';
};
export declare type ImageStyle = {
    width?: string;
    height?: string;
    borderRadius?: string;
    backgroundColor?: string;
};
export declare type ImageElement = {
    type: 'image';
    src: string;
    alt?: string;
    href?: string;
    style?: ImageStyle;
    children: EmptyText[];
};
export {};
