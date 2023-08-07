/**
 * @description editor 插件，重写 editor API
 *
 */
import { IDomEditor } from '@klein-editor/core';
declare function withDIV<T extends IDomEditor>(editor: T): T;
export default withDIV;
