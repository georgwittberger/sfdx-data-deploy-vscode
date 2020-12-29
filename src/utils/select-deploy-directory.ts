import { window, workspace } from 'vscode';
import findDataDeployDirectories from './find-data-deploy-directories';

export default function selectDeployDirectory(): Thenable<
  DirectoryQuickPickItem | undefined
> {
  return window.showQuickPick(
    findDataDeployDirectories().then(createQuickPickItems)
  );
}

function createQuickPickItems(directories: string[]): DirectoryQuickPickItem[] {
  return directories.map((directory) => ({
    label: workspace.asRelativePath(directory),
    detail: directory,
  }));
}

type DirectoryQuickPickItem = { label: string; detail: string };
