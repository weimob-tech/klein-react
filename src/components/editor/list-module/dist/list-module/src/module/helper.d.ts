/**
 * @description module node helpers
 *
 */
import { Node } from 'slate';
/**
 * 根据 node.type 获取 html tag
 * @param type node.type
 */
export declare function genTag(type: string): string;
/**
 * 判断 node.type 是否是 bulleted-list、numbered-list
 * @param n Node
 */
export declare function checkList(n: Node): boolean;
export declare function deleteCheckList(n: Node): boolean;
