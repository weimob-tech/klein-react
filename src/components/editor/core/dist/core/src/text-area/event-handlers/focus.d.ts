/**
 * @description 处理 onfocus 事件
 *
 */
import { IDomEditor } from '../../editor/interface';
import TextArea from '../TextArea';
declare function handleOnFocus(event: Event, textarea: TextArea, editor: IDomEditor): void;
export default handleOnFocus;
