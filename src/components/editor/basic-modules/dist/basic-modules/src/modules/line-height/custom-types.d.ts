/**
 * @description 自定义 element
 *
 */
import { Text } from 'slate';
export declare type LineHeightElement = {
    type: string;
    children: Text[];
    style?: {
        lineHeight?: string;
    };
};
