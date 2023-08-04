/**
 * @description render 块级 elem
 *
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@klein-editor/core';
/**
 * render 块级 elem
 * @param elemNode slate elem
 * @param children children
 * @param editor editor
 * @returns vnode
 */
declare function renderBlock(elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode;
export declare const renderBlockConf: {
    type: string;
    renderElem: typeof renderBlock;
};
export {};
