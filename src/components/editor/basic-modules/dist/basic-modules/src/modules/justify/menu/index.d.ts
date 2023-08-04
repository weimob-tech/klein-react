/**
 * @description justify menu entry
 *
 */
import justifySelectMenu from './JustifySelectMenu';
import JustifyLeftMenu from './JustifyLeftMenu';
import JustifyRightMenu from './JustifyRightMenu';
import JustifyCenterMenu from './JustifyCenterMenu';
import JustifyJustifyMenu from './JustifyJustifyMenu';
export declare const justifySelectMenuConf: {
    key: string;
    factory(): justifySelectMenu;
};
export declare const justifyLeftMenuConf: {
    key: string;
    factory(): JustifyLeftMenu;
};
export declare const justifyRightMenuConf: {
    key: string;
    factory(): JustifyRightMenu;
};
export declare const justifyCenterMenuConf: {
    key: string;
    factory(): JustifyCenterMenu;
};
export declare const justifyJustifyMenuConf: {
    key: string;
    factory(): JustifyJustifyMenu;
};
