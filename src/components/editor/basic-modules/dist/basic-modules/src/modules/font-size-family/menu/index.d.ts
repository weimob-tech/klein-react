/**
 * @description font-size font-family menu entry
 *
 */
import FontSizeMenu from './FontSizeMenu';
import FontFamilyMenu from './FontFamilyMenu';
export declare const fontSizeMenuConf: {
    key: string;
    factory(): FontSizeMenu;
    config: {
        fontSizeList: string[];
        fontSize: string;
    };
};
export declare const fontFamilyMenuConf: {
    key: string;
    factory(): FontFamilyMenu;
    config: {
        fontFamilyList: (string | {
            name: string;
            value: string;
        })[];
    };
};
