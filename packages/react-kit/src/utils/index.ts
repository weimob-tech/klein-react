// import fs from 'fs';
import path from 'path';

export const cwd = process.cwd();

export function getProjectPath(...filePath: string[]) {
  return path.join(cwd, ...filePath);
}

export function resolve(moduleName: string) {
  return require.resolve(moduleName);
}
