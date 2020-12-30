import { commands, Uri } from 'vscode';

export default async function retrieveFolderCommand(
  selectedItem: Uri
): Promise<void> {
  commands.executeCommand(
    'sfdx-data-deploy-vscode.retrieve',
    selectedItem.fsPath,
    []
  );
}
