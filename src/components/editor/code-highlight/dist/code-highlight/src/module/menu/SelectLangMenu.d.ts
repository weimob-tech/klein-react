/**
 * @description code-highlight select lang
 *
 */
import { ISelectMenu, IDomEditor, IOption } from '@klein-editor/core';
declare class SelectLangMenu implements ISelectMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M64 64v896h896V64H64z m487.6 698.8c0 87.2-51.2 127-125.8 127-67.4 0-106.4-34.8-126.4-77l68.6-41.4c13.2 23.4 25.2 43.2 54.2 43.2 27.6 0 45.2-10.8 45.2-53V475.4h84.2v287.4z m199.2 127c-78.2 0-128.8-37.2-153.4-86l68.6-39.6c18 29.4 41.6 51.2 83 51.2 34.8 0 57.2-17.4 57.2-41.6 0-28.8-22.8-39-61.4-56l-21-9c-60.8-25.8-101-58.4-101-127 0-63.2 48.2-111.2 123.2-111.2 53.6 0 92 18.6 119.6 67.4L800 580c-14.4-25.8-30-36-54.2-36-24.6 0-40.2 15.6-40.2 36 0 25.2 15.6 35.4 51.8 51.2l21 9c71.6 30.6 111.8 62 111.8 132.4 0 75.6-59.6 117.2-139.4 117.2z\"></path></svg>";
    readonly tag = "select";
    readonly width = 95;
    readonly selectPanelWidth = 115;
    getOptions(editor: IDomEditor): IOption[];
    isActive(editor: IDomEditor): boolean;
    /**
     * 获取语言类型
     * @param editor editor
     */
    getValue(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
    private getSelectCodeElem;
}
export default SelectLangMenu;
