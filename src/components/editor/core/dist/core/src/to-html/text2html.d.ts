/**
 * @description text -> html
 *
 */
import { Text } from 'slate';
import { IDomEditor } from '../editor/interface';
declare function textToHtml(textNode: Text, editor: IDomEditor): string;
export default textToHtml;
