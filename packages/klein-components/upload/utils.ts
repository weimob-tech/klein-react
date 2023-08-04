import { UploadFile, RcFile } from './interface';

export function fileToObject(file: RcFile): UploadFile {
  return {
    ...file,
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    percent: 0,
    originFileObj: file,
  };
}

export function findItemFromList(file: UploadFile, fileList: UploadFile[]) {
  const targetKey = file.uid ? 'uid' : 'name';
  return fileList.find((item) => item[targetKey] === file[targetKey]);
}
