/**
 * @description 自定义 element
 *
 */
import { Descendant } from 'slate';
export declare type SectionElement = {
    type: 'section';
    children: Descendant[];
    lineHeight?: string;
    margin?: string;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
};
