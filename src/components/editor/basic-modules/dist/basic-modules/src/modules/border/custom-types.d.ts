/**
 * @description 自定义 element
 *
 */
import { Text } from 'slate';
export declare type BorderElement = {
    type: string;
    children: Text[];
    style?: {
        border?: string;
    };
};
