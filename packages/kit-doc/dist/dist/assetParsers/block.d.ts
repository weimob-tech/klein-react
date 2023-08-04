import type { sync } from 'enhanced-resolve';
import { parseCodeFrontmatter } from '../utils';
export interface IParsedBlockAsset {
    asset: any;
    sources: Record<string, string>;
    frontmatter: ReturnType<typeof parseCodeFrontmatter>['frontmatter'];
}
declare function parseBlockAsset(opts: {
    fileAbsPath: string;
    id: string;
    refAtomIds: string[];
    entryPointCode?: string;
    resolver: typeof sync;
}): Promise<IParsedBlockAsset>;
export default parseBlockAsset;
