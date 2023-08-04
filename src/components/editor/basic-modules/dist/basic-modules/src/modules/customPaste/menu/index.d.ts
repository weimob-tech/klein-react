/**
 * @description customPaste menu entry
 *
 */
import FormatSelectMenu from './format';
export declare const saveCustomPasteFormatConf: {
    key: string;
    factory(): FormatSelectMenu;
    config: {
        customPasteOptionList: {
            value: string;
            text: string;
            textIsTag: boolean;
        }[];
    };
};
