/**
 * @description render row
 *
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@klein-editor/core';
declare function renderTableRow(elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode;
export default renderTableRow;
