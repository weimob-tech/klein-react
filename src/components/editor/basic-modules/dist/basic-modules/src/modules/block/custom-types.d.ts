/**
 * @description 自定义 element
 *
 */
import { Descendant } from 'slate';
export declare type BlockElement = {
    type: 'block';
    children: Descendant[];
    style?: any;
};
