/**
 * @description to html
 *
 */
import { Element } from 'slate';
declare function videoToHtml(elemNode: Element, childrenHtml?: string): string;
export declare const videoToHtmlConf: {
    type: string;
    elemToHtml: typeof videoToHtml;
};
export {};
