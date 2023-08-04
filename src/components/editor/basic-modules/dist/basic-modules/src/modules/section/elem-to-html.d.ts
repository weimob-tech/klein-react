/**
 * @description to html
 *
 */
import { Element } from 'slate';
declare function sectionToHtml(elem: Element, childrenHtml: string): string;
export declare const sectionToHtmlConf: {
    type: string;
    elemToHtml: typeof sectionToHtml;
};
export {};
