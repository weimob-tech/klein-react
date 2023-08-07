/**
 * @description code-block menu
 *
 */
import CodeBlockMenu from './CodeBlockMenu';
import HTMLCodeBlockMenu from './htmlCodeBlockMenu';
export declare const codeBlockMenuConf: {
    key: string;
    factory(): CodeBlockMenu;
};
export declare const htmlCodeBlockMenuConf: {
    key: string;
    factory(): HTMLCodeBlockMenu;
};
