/**
 * @description 自定义 element
 *
 */
import { Text } from 'slate';
export declare type LinkElement = {
    type: 'link';
    url: string;
    target?: string;
    children: Text[];
    style?: {
        color?: string;
    };
};
