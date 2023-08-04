import { ISelectMenu, IDomEditor, IOption } from '@klein-editor/core';
declare class FormatSelectMenu implements ISelectMenu {
    readonly title: string;
    readonly iconSvg = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.12725 13.8499V2.15007L10.232 2.14986L12.8512 4.76918V6.9942C12.8512 7.15989 12.9856 7.29421 13.1512 7.29421H13.8512C14.0169 7.29421 14.1512 7.15989 14.1512 6.9942V4.49994C14.1512 4.32756 14.0828 4.16223 13.9609 4.04033L10.9609 1.04024C10.839 0.918338 10.6736 0.849854 10.5012 0.849854L2.47723 0.850092C2.11825 0.850104 1.82725 1.14112 1.82725 1.50009V14.4999C1.82725 14.8589 2.11826 15.1499 2.47725 15.1499H4.69452C4.86021 15.1499 4.99452 15.0156 4.99452 14.8499V14.1499C4.99452 13.9843 4.86021 13.8499 4.69452 13.8499H3.12725ZM6.71958 8.59258C6.55389 8.59258 6.41958 8.72689 6.41958 8.89258V9.59258C6.41958 9.75826 6.55389 9.89258 6.71958 9.89258H13.8728C14.0384 9.89258 14.1728 9.75826 14.1728 9.59258V8.89258C14.1728 8.72689 14.0384 8.59258 13.8728 8.59258H10.9462V6.61323C10.9462 6.44755 10.8118 6.31323 10.6462 6.31323H9.94616C9.78048 6.31323 9.64616 6.44755 9.64616 6.61323V8.59258H6.71958ZM6.96356 10.8731C6.96212 10.6963 7.10366 10.5449 7.28046 10.5449H13.4123C13.5656 10.5449 13.6942 10.6604 13.7106 10.8127L14.1488 14.8769C14.1615 14.9951 14.0689 15.0983 13.9499 15.0983H12.9694C12.8184 15.0983 12.691 14.9861 12.6718 14.8364L12.3581 12.3889C12.3581 12.3889 12.198 13.8654 11.7221 14.9312C11.6758 15.0348 11.5714 15.0983 11.4579 15.0983L6.36255 15.0983C6.21906 15.0983 6.12224 14.9511 6.17518 14.8178C6.89018 13.0167 6.96878 11.5114 6.96356 10.8731Z\" fill=\"#1E2226\"/></svg>";
    readonly tag = "select";
    readonly width = 36;
    readonly selectPanelWidth = 108;
    readonly wide = true;
    readonly setValue = true;
    readonly key = "saveCustomPasteFormat";
    getOptions(editor: IDomEditor): IOption[];
    private recursionChildren;
    isActive(editor: IDomEditor): boolean;
    /**
     * 获取选中节点的 node.type
     * @param editor editor
     */
    getValue(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    /**
     * 执行命令
     * @param editor editor
     * @param value node.type
     */
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default FormatSelectMenu;
