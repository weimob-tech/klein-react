/**
 * @description vdom utils fn
 *
 */
import { VNode, VNodeStyle } from 'snabbdom';
/**
 * 给 vnode 添加样式
 * @param vnode vnode
 * @param newStyle { key: val }
 */
export declare function addVnodeStyle(vnode: VNode, newStyle: VNodeStyle): void;
/**
 * 给 vnode 设置样式
 * @param vnode vnode
 * @param newStyle { key: val }
 */
export declare function setVnodeStyle(vnode: VNode, newStyle: VNodeStyle): void;
