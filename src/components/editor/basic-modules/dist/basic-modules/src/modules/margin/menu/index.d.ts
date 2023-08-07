/**
 * @description line-height menu entry
 *
 */
import MarginTopMenu from './MarginTopMenu';
import MarginBottomMenu from './MarginBottomMenu';
export declare const marginTopMenuConf: {
    key: string;
    factory(): MarginTopMenu;
    config: {
        defaultValue: string;
        marginList: string[];
    };
};
export declare const marginBottomMenuConf: {
    key: string;
    factory(): MarginBottomMenu;
    config: {
        defaultValue: string;
        marginList: string[];
    };
};
