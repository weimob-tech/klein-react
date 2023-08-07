/**
 * @description video render elem
 *
 */
import { Element } from 'slate';
import { VNode } from 'snabbdom';
import { IDomEditor } from '@klein-editor/core';
declare function renderVideo(elemNode: Element, children: VNode[] | null, editor: IDomEditor): VNode;
declare const renderVideoConf: {
    type: string;
    renderElem: typeof renderVideo;
};
export { renderVideoConf };
