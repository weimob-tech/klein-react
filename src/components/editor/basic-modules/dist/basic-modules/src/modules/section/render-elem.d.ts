/**
 * @description render paragraph elem
 *
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@klein-editor/core';
/**
 * render paragraph elem
 * @param elemNode slate elem
 * @param children children
 * @param editor editor
 * @returns vnode
 */
declare function renderSection(elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode;
export declare const renderSectionConf: {
    type: string;
    renderElem: typeof renderSection;
};
export {};
