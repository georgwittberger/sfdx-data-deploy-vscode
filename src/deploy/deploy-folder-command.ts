import { commands, Uri } from 'vscode';

export default async function deployFolderCommand(
  selectedItem: Uri
): Promise<void> {
  commands.executeCommand(
    'sfdx-data-deploy-vscode.deploy',
    selectedItem.fsPath,
    []
  );
}
