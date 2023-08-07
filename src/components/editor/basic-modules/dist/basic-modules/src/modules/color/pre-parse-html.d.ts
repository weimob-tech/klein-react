/**
 * @description pre-parse html
 *
 */
import { DOMElement } from '../../utils/dom';
/**
 * pre-prase font ，兼容 V4
 * @param fontElem fontElem
 */
declare function preParse(fontElem: DOMElement): DOMElement;
export declare const preParseHtmlConf: {
    selector: string;
    preParseHtml: typeof preParse;
};
export {};
