/**
 * @description editor 插件，重写 editor API
 *
 */
import { IDomEditor } from '@klein-editor/core';
declare function withFormatBrush<T extends IDomEditor>(editor: T): T;
export default withFormatBrush;
