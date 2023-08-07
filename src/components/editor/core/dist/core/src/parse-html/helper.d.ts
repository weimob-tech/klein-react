/**
 * @description parse-html helper fns
 *
 */
import { Descendant } from 'slate';
/**
 * 把 charCode 160 的空格（`&nbsp` 转换的），替换为 charCode 32 的空格（JS 默认的）
 * @param str str
 * @returns str
 */
export declare function replaceSpace160(str: string): string;
/**
 * 往 children 最后一个 item（如果是 text node） 插入文字
 * @param children children
 * @param str str
 * @returns 是否插入成功
 */
export declare function tryInsertTextToChildrenLastItem(children: Descendant[], str: string): boolean;
export declare function checkChildNodeChildren(childNodeChildren: any): boolean;
export declare function removeParentStructure(structure: any): any;
