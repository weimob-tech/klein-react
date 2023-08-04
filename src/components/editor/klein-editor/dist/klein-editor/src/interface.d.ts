import { CSSProperties } from 'react';
import type { IDomEditor, IToolbarConfig, IEditorConfig } from '@klein-editor/core';
export interface KleinEditorRef {
    getEditor: () => IDomEditor | null;
}
export declare type ToolbarConfigSimply = Pick<IToolbarConfig, 'toolbarKeys' | 'insertKeys' | 'excludeKeys' | 'modalAppendToBody' | 'compact'>;
export declare type EditorConfigSimply = Pick<IEditorConfig, 'customAlert' | 'onCreated' | 'onDestroyed' | 'onMaxLength' | 'onFocus' | 'onBlur' | 'onEvent' | 'customPaste' | 'scroll' | 'placeholder' | 'readOnly' | 'autoFocus' | 'decorate' | 'maxLength' | 'h5Mode' | 'MENU_CONF' | 'hoverbarKeys' | 'EXTEND_CONF' | 'sourceEditor'>;
export interface KleinEditorProps extends Partial<EditorConfigSimply> {
    containerId?: string;
    className?: string;
    style?: CSSProperties;
    toolbarClassName?: string;
    toolbarStyle?: CSSProperties;
    wrapClassName?: string;
    wrapStyle?: CSSProperties;
    toolbarConfig?: Partial<ToolbarConfigSimply>;
    mode?: 'default' | 'simple';
    onChange?: (html: string, text?: string) => void;
}
