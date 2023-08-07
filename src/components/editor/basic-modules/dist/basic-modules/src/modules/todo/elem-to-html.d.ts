/**
 * @description to html
 *
 */
import { Element } from 'slate';
declare function todoToHtml(elem: Element, childrenHtml: string): string;
export declare const todoToHtmlConf: {
    type: string;
    elemToHtml: typeof todoToHtml;
};
export {};
