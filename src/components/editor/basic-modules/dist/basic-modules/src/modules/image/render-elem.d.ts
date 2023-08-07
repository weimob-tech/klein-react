/**
 * @description image render elem
 *
 */
import { Element as SlateElement } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@klein-editor/core';
declare function renderImage(elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode;
declare const renderImageConf: {
    type: string;
    renderElem: typeof renderImage;
};
export { renderImageConf };
