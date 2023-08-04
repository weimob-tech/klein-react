/**
 * @description parse html
 *
 */
import { Descendant } from 'slate';
import { IDomEditor } from '@klein-editor/core';
import { TodoElement } from './custom-types';
import { DOMElement } from '../../utils/dom';
declare function parseHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): TodoElement;
export declare const parseHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseHtml;
};
export {};
