export default class BaseModalMenu {
    title: string;
    tag: string;
    $ele: HTMLDivElement;
    isInit: boolean;
    action: () => void;
    constructor();
    init: (action: any) => void;
    isActive(editor: any): boolean;
    isDisabled(editor: any): boolean;
    exec(editor: any, value: any): void;
}
