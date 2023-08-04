/**
 * @description parse html
 *
 */
import { Descendant } from 'slate';
import { DOMElement } from '../../utils/dom';
import { IDomEditor } from '@klein-editor/core';
import { DividerElement } from './custom-types';
declare function parseHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): DividerElement;
export declare const parseHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseHtml;
};
export {};
