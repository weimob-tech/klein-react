import React from 'react';
import { SlateDescendant, IEditorConfig, IDomEditor } from '@klein-editor/editor';
interface IProps {
    defaultContent?: SlateDescendant[];
    onCreated?: (editor: IDomEditor, textareaDom: HTMLDivElement | null) => void;
    defaultHtml?: string;
    onChange: (editor: IDomEditor) => void;
    defaultConfig: Partial<IEditorConfig>;
    mode?: string;
    style?: React.CSSProperties;
    className?: string;
    onEvent?: (editor: IDomEditor, params: any) => void;
}
declare function EditorComponent(props: Partial<IProps>): JSX.Element;
export default EditorComponent;
