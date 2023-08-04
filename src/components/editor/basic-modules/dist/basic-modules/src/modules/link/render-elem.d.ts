/**
 * @description render link elem
 *
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@klein-editor/core';
/**
 * render link elem
 * @param elemNode slate elem
 * @param children children
 * @param editor editor
 * @returns vnode
 */
declare function renderLink(elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode;
declare const renderLinkConf: {
    type: string;
    renderElem: typeof renderLink;
};
export { renderLinkConf };
