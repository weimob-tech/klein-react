import * as wangEditor from '@klein-editor/editor';
interface IProps {
    editor: wangEditor.IDomEditor | null;
    defaultConfig?: Partial<wangEditor.IToolbarConfig>;
    mode?: string;
    style?: object;
    className?: string;
}
declare function ToolbarComponent(props: IProps): JSX.Element;
export default ToolbarComponent;
