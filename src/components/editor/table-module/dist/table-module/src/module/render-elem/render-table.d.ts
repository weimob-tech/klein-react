/**
 * @description render table
 *
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@klein-editor/core';
declare function renderTable(elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode;
export default renderTable;
