/**
 * @description parse html
 *
 */
import { Descendant } from 'slate';
import { IDomEditor } from '@klein-editor/core';
import { BlockElement } from './custom-types';
import { DOMElement } from '../../utils/dom';
declare function parseBlockHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): BlockElement;
export declare const parseBlockHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseBlockHtml;
};
export {};
