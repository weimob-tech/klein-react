/**
 * @description parse style html
 *
 */
import { DOMElement } from '../utils/dom';
import { Descendant } from 'slate';
import { IDomEditor } from '@klein-editor/core';
export declare function parseCodeStyleHtml(elem: DOMElement, node: Descendant, editor: IDomEditor): Descendant;
