/**
 * @description parse html
 *
 */
import { Descendant } from 'slate';
import { IDomEditor } from '@klein-editor/core';
import { DIVElement } from './custom-types';
import { DOMElement } from '../../utils/dom';
declare function parseHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): DIVElement;
export declare const parseHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseHtml;
};
export {};
