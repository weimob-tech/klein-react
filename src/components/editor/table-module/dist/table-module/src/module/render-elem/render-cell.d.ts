/**
 * @description render cell
 *
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@klein-editor/core';
declare function renderTableCell(cellNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode;
export default renderTableCell;
