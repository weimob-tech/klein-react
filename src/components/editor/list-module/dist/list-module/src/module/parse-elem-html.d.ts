/**
 * @description parse html
 *
 */
import { Descendant } from 'slate';
import { DOMElement } from '../utils/dom';
import { IDomEditor } from '@klein-editor/core';
import { ListItemElement, BulletedListElement, NumberedListElement } from './custom-types';
declare function parseItemHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): ListItemElement;
export declare const parseItemHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseItemHtml;
};
declare function parseBulletedListHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): BulletedListElement;
export declare const parseBulletedListHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseBulletedListHtml;
};
declare function parseNumberedListHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): NumberedListElement;
export declare const parseNumberedListHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseNumberedListHtml;
};
export {};
