/**
 * @description helper
 *
 */
import { Node } from 'slate';
import { IDomEditor } from '@klein-editor/core';
export declare function isMenuDisabled(editor: IDomEditor, mark?: string): boolean;
export declare function removeMarks(editor: IDomEditor, textNode: Node): void;
