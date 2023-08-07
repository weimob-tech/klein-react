/**
 * @description 自定义 element
 *
 */
import { Descendant } from 'slate';
export declare type DIVElement = {
    type: 'custom-paste';
    children: Descendant[];
    style?: any;
};
