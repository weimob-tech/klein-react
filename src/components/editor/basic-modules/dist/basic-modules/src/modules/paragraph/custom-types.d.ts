/**
 * @description 自定义 element
 *
 */
import { Text } from 'slate';
export declare type ParagraphElement = {
    type: 'paragraph';
    children: Text[];
    lineHeight?: string;
    margin?: string;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
};
