/**
 * @description to html
 *
 */
import { Element } from 'slate';
declare function imageToHtml(elemNode: Element, childrenHtml: string): string;
export declare const imageToHtmlConf: {
    type: string;
    elemToHtml: typeof imageToHtml;
};
export {};
