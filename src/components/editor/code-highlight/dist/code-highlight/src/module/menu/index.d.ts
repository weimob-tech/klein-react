/**
 * @description code-highlight menu
 *
 */
import SelectLangMenu from './SelectLangMenu';
export declare const selectLangMenuConf: {
    key: string;
    factory(): SelectLangMenu;
    config: {
        codeLangs: {
            text: string;
            value: string;
        }[];
    };
};
