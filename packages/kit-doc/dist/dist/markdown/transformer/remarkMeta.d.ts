import type { Root } from 'mdast';
import type { Transformer } from 'unified';
import type { IMdTransformerOptions } from '.';
type IRemarkMetaOpts = Pick<IMdTransformerOptions, 'cwd' | 'fileAbsPath' | 'resolve'>;
export default function remarkMeta(opts: IRemarkMetaOpts): Transformer<Root>;
export {};
