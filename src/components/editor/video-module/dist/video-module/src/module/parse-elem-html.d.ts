/**
 * @description parse html
 *
 */
import { Descendant } from 'slate';
import { IDomEditor } from '@klein-editor/core';
import { VideoElement } from './custom-types';
import { DOMElement } from '../utils/dom';
declare function parseHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): VideoElement;
declare function parseVideoHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): VideoElement;
export declare const parseHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseHtml;
};
export declare const parseVideoHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseVideoHtml;
};
export {};
