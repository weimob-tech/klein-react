/**
 * @description menu entry
 *
 */
import BulletedListMenu from './BulletedListMenu';
import NumberedListMenu from './NumberedListMenu';
export declare const bulletedListMenuConf: {
    key: string;
    factory(): BulletedListMenu;
    config: {
        listStyleType: string;
    };
};
export declare const numberedListMenuConf: {
    key: string;
    factory(): NumberedListMenu;
    config: {
        listStyleType: string;
    };
};
