import { window } from 'vscode';
import findDataFileNames from './find-data-file-names';
import { DeploymentDescriptor } from './read-descriptor';

export default function selectDataFiles(
  descriptor: DeploymentDescriptor
): Thenable<string[] | undefined> {
  return window.showQuickPick(findDataFileNames(descriptor), {
    canPickMany: true,
  });
}
