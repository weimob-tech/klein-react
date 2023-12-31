/**
 * @description render indent style
 *
 */
import { Descendant, Ancestor } from 'slate';
import { VNode } from 'snabbdom';
/**
 * 添加样式
 * @param node slate elem
 * @param vnode vnode
 * @returns vnode
 */
export declare function renderStyle(node: Descendant, vnode: VNode, parent?: Ancestor): VNode;
