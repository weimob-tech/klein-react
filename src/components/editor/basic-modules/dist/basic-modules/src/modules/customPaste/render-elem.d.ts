/**
 * @description render div elem
 *
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@klein-editor/core';
/**
 * render div elem
 * @param elemNode slate elem
 * @param children children
 * @param editor editor
 * @returns vnode
 */
declare function renderDIV(elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode;
export declare const renderDIVConf: {
    type: string;
    renderElem: typeof renderDIV;
};
export {};
