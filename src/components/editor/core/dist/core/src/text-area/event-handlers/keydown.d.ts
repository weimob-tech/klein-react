/**
 * @description 监听 onKeydown 事件
 *
 */
import { IDomEditor } from '../../editor/interface';
import TextArea from '../TextArea';
declare function handleOnKeydown(e: Event, textarea: TextArea, editor: IDomEditor): void;
export default handleOnKeydown;
