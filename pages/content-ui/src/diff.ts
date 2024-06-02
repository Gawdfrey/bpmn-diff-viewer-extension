export const extensionToSrcFormat: {
  [extension: string]: string;
} = {
  bpmn: 'bpmn',
};

export function isFilenameSupported(filename: string): boolean {
  const extension = filename.split('.').pop();
  return !!(extension && extensionToSrcFormat[extension]);
}
