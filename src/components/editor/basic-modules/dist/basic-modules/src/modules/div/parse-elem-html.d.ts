/**
 * @description parse html
 *
 */
import { Descendant } from 'slate';
import { IDomEditor } from '@klein-editor/core';
import { DIVElement } from './custom-types';
import { DOMElement } from '../../utils/dom';
declare function parseDIVHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): DIVElement;
export declare const parseDIVHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseDIVHtml;
};
export {};
