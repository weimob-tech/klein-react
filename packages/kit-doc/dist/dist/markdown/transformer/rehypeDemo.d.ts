import type { sync } from 'enhanced-resolve';
import type { Root } from 'hast';
import type { Transformer } from 'unified';
import type { IMdTransformerOptions } from '.';
export declare const DEMO_PROP_VALUE_KEY = "$demo-prop-value-key";
export declare const DUMI_DEMO_TAG = "KitDocDemo";
export declare const DUMI_DEMO_GRID_TAG = "KitDocDemoGrid";
type IRehypeDemoOptions = Pick<IMdTransformerOptions, 'techStacks' | 'cwd' | 'fileAbsPath' | 'resolve'> & {
    resolver: typeof sync;
};
export default function rehypeDemo(opts: IRehypeDemoOptions): Transformer<Root>;
export {};
