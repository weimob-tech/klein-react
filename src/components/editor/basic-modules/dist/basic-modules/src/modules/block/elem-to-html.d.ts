/**
 * @description to html
 *
 */
import { Element } from 'slate';
declare function blockToHtml(elem: Element, childrenHtml: string): string;
export declare const blockToHtmlConf: {
    type: string;
    elemToHtml: typeof blockToHtml;
};
export {};
