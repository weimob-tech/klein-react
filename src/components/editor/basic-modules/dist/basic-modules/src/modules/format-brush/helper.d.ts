/**
 * @description header helper
 *
 */
import { Node } from 'slate';
import { IDomEditor } from '@klein-editor/core';
/**
 * 获取匹配的 node 节点
 * @param editor editor
 */
export declare function getMatchNode(editor: IDomEditor): Node | null;
export declare const FORMAT_BRUSH_STYLE_MARKS: string[];
export declare const FORMAT_BRUSH_TEXT_MARKS: string[];
export declare const FORMAT_BRUSH_NODE_TYPE: string[];
/**
 * 获取匹配的样式
 * @param editor editor
 */
export declare function getMatchStyles(editor: IDomEditor): any;
