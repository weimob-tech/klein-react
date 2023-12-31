/**
 * @description DOM 操作
 *
 */
import $, { Dom7Array } from 'dom7';
export { Dom7Array } from 'dom7';
export default $;
/**
 * 判断 str 是不是纯字符串，而不是 html tag
 * @param str str
 */
export declare function isPlainText(str: string): boolean;
/**
 * 获取 outerHTML
 * @param $elem dom7 elem
 */
export declare function getOuterHTML($elem: Dom7Array): string;
/**
 * 获取 tagName lower-case
 * @param $elem $elem
 */
export declare function getTagName($elem: Dom7Array): string;
/**
 * 获取 $elem 某一个 style 值
 * @param $elem $elem
 * @param styleKey style key
 */
export declare function getStyleValue($elem: Dom7Array, styleKey: string): string;
/**
 * 获取 $elem 所有style
 * @param $elem $elem
 */
export declare function getStyles($elem: Dom7Array): any;
import DOMNode = globalThis.Node;
import DOMComment = globalThis.Comment;
import DOMElement = globalThis.Element;
import DOMText = globalThis.Text;
import DOMRange = globalThis.Range;
import DOMSelection = globalThis.Selection;
import DOMStaticRange = globalThis.StaticRange;
export { DOMNode, DOMComment, DOMElement, DOMText, DOMRange, DOMSelection, DOMStaticRange, };
