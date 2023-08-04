/**
 * @description 自定义 element
 *
 */
import { Descendant } from 'slate';
export declare type DIVElement = {
    type: 'div:not([data-k-e-type])';
    children: Descendant[];
    style?: any;
};
