import { RenderElemFnType } from '../index';
/**
 * 根据 elemNode.type 获取 renderElement 函数
 * @param type elemNode.type
 */
declare function getRenderElem(type: string): RenderElemFnType;
export default getRenderElem;
