/**
 * @description parse style html
 *
 */
import { Descendant } from 'slate';
import { IDomEditor } from '@klein-editor/core';
import { DOMElement } from '../../utils/dom';
export declare function parseStyleHtml(text: DOMElement, node: Descendant, editor: IDomEditor): Descendant;
