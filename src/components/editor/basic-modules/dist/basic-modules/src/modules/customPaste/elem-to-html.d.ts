/**
 * @description to html
 *
 */
import { Element } from 'slate';
declare function DIVToHtml(elem: Element, childrenHtml: string): string;
export declare const DIVToHtmlConf: {
    type: string;
    elemToHtml: typeof DIVToHtml;
};
export {};
