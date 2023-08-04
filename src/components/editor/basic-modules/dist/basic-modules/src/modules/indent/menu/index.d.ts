/**
 * @description indent menu entry
 *
 */
import DecreaseIndentMenu from './DecreaseIndentMenu';
import IncreaseIndentMenu from './IncreaseIndentMenu';
import IndentSelectMenu from './IdentSelectMenu';
export declare const indentSelectMenuConf: {
    key: string;
    factory(): IndentSelectMenu;
};
export declare const indentMenuConf: {
    key: string;
    factory(): IncreaseIndentMenu;
};
export declare const delIndentMenuConf: {
    key: string;
    factory(): DecreaseIndentMenu;
};
