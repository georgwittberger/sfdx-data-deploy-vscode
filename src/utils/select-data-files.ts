import { window } from 'vscode';
import findDataFileNames from './find-data-file-names';

export default function selectDataFiles(
  directory: string
): Thenable<string[] | undefined> {
  return window.showQuickPick(findDataFileNames(directory), {
    canPickMany: true,
  });
}
