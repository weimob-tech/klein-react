/**
 * @description create helper
 *
 */
import { Descendant } from 'slate';
import { IDomEditor } from '../editor/interface';
import { DOMElement } from '../utils/dom';
export declare const blockElements: string[];
/**
 * 检查是否重复创建 textarea
 */
export declare function isRepeatedCreateTextarea(editor: IDomEditor, selector: string | DOMElement): boolean;
/**
 * 检查是否重复创建 toolbar
 */
export declare function isRepeatedCreateToolbar(editor: IDomEditor, selector: string | DOMElement): boolean;
/**
 * 生成默认 content
 */
export declare function genDefaultContent(editor: IDomEditor): import("packages/custom-types").CustomElement[];
/**
 * 默认p标签
 */
export declare function getDefaultP(children: string, editor: any): string;
export declare function removeEmptyElement(htmlDoc: Document): Document;
export declare function removeImgBRImgElement(htmlDoc: Document): Document;
export declare function filterSpanElement(htmlDoc: Document): Document;
/**
 * 生成p标签下包裹的span标签
 */
export declare function handleKleinEditorHtml(htmlString: string): string;
/**
 * html 字符串 -> content
 * @param editor editor
 * @param html html 字符串
 */
export declare function htmlToContent(editor: IDomEditor, html?: string): Descendant[];
