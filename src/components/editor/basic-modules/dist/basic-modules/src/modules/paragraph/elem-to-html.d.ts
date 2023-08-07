/**
 * @description to html
 *
 */
import { Element } from 'slate';
declare function pToHtml(elem: Element, childrenHtml: string): string;
export declare const pToHtmlConf: {
    type: string;
    elemToHtml: typeof pToHtml;
};
export {};
