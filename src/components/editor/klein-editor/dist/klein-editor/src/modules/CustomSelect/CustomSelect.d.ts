import { IDomEditor, ISelectMenu } from '@klein-editor/editor';
declare class CustomSelect implements ISelectMenu {
    title: string;
    tag: string;
    width: number;
    constructor();
    getOptions(editor: IDomEditor): ({
        value: string;
        text: string;
        styleForRenderMenuList: {
            'font-size': string;
            'font-weight': string;
        };
        selected?: undefined;
    } | {
        value: string;
        text: string;
        selected: boolean;
        styleForRenderMenuList?: undefined;
    } | {
        value: string;
        text: string;
        styleForRenderMenuList?: undefined;
        selected?: undefined;
    })[];
    isActive(editor: IDomEditor): boolean;
    getValue(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default CustomSelect;
