/**
 * @description line-height menu entry
 *
 */
import LineHeightMenu from './LineHeightMenu';
export declare const lineHeightMenuConf: {
    key: string;
    factory(): LineHeightMenu;
    config: {
        lineHeightList: string[];
        lineHeight: string;
    };
};
