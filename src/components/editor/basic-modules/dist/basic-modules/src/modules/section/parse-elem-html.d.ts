/**
 * @description parse html
 *
 */
import { Descendant } from 'slate';
import { IDomEditor } from '@klein-editor/core';
import { SectionElement } from './custom-types';
import { DOMElement } from '../../utils/dom';
declare function parseSectionHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): SectionElement;
export declare const parseSectionHtmlConf: {
    selector: string;
    parseElemHtml: typeof parseSectionHtml;
};
export {};
