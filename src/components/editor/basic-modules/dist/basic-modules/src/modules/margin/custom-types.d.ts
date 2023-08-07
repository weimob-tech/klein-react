/**
 * @description 自定义 element
 *
 */
import { Text } from 'slate';
export declare type MarginElement = {
    type: string;
    children: Text[];
    style?: {
        margin?: string;
        marginTop?: string;
        marginBottom?: string;
    };
};
