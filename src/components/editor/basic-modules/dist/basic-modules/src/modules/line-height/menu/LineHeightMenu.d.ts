/**
 * @description header menu
 *
 */
import { ISelectMenu, IDomEditor, IOption } from '@klein-editor/core';
declare class LineHeightMenu implements ISelectMenu {
    readonly title: string;
    readonly iconSvg: any;
    readonly tag = "select";
    readonly wide = true;
    getOptions(editor: IDomEditor): IOption[];
    /**
     * 获取匹配的 node 节点
     * @param editor editor
     */
    private getMatchNode;
    isActive(editor: IDomEditor): boolean;
    /**   *
     * 菜单不回显值，所以传false
     */
    getValue(editor: IDomEditor): string | boolean;
    /**
     * 获取 node.lineHeight 的值（如 '1' '1.5'），没有则返回 ''
     * @param editor editor
     *
  /**
     * 获取 node.lineHeight 的值（如 '1' '1.5'），没有则返回 ''
     * @param editor editor
     *
     * 选项需要回显，所以获取具体值
     */
    getValue2(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default LineHeightMenu;
