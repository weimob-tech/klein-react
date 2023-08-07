import KleinEditor from './KleinEditor';
import type { KleinEditorProps, EditorConfigSimply, ToolbarConfigSimply, KleinEditorRef } from './interface';
import './register-builtin-modules/index';
import './assets/index.less';
export { KleinEditorProps, EditorConfigSimply, ToolbarConfigSimply, KleinEditorRef, };
export { DomEditor, IDomEditor, IEditorConfig, IToolbarConfig, Toolbar, IModuleConf, IButtonMenu, ISelectMenu, IDropPanelMenu, IModalMenu, i18nChangeLanguage, i18nAddResources, i18nGetResources, t, genModalTextareaElems, genModalInputElems, genModalButtonElems, createUploader, IUploadConfig, } from '@klein-editor/core';
export { SlateTransforms, SlateDescendant, SlateEditor, SlateNode, SlateElement, SlateText, SlatePath, SlateRange, SlateLocation, SlatePoint, } from '@klein-editor/editor';
export { Boot } from '@klein-editor/editor';
export default KleinEditor;
