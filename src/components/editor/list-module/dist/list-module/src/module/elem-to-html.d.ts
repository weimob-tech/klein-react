/**
 * @description to html
 *
 */
import { Element } from 'slate';
export declare const bulletedToHtmlConf: {
    type: string;
    elemToHtml: (elem: Element, childrenHtml: string) => string;
};
export declare const numberedToHtmlConf: {
    type: string;
    elemToHtml: (elem: Element, childrenHtml: string) => string;
};
export declare const listItemToHtmlConf: {
    type: string;
    elemToHtml: (elem: Element, childrenHtml: string) => string;
};
