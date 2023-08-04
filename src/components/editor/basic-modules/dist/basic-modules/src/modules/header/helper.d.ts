/**
 * @description header helper
 *
 */
import { Node } from 'slate';
import { IDomEditor, IOption } from '@klein-editor/core';
import { HeaderType } from './custom-types';
export declare function toBHeaderStyle(editor: any, tag?: string): any;
export declare function toCHeaderStyle(editor: any, tag?: string): any;
export declare function getCurrentStyle(editor: IDomEditor, tag: HeaderType): any;
/**
 * 获取匹配的 node 节点
 * @param editor editor
 */
export declare function getMatchNode(editor: IDomEditor): Node | null;
/**
 * 获取 node type（'header1' 'header2' 等），未匹配则返回 'paragraph'
 */
export declare function getHeaderType(editor: IDomEditor): string;
export declare function isMenuDisabled(editor: IDomEditor): boolean;
/**
 * 设置 node type （'header1' 'header2' 'paragraph' 等）
 */
export declare function setHeaderType(editor: IDomEditor, type: string): void;
/**
 * 根据h5Mode获取options
 */
export declare function getHeaderOptions(editor: IDomEditor): IOption[];
