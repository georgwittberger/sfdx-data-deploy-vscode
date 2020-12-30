import { commands, ExtensionContext } from 'vscode';
import deployCommand from './deploy/deploy-command';
import deployFolderCommand from './deploy/deploy-folder-command';
import retrieveCommand from './retrieve/retrieve-command';
import retrieveFolderCommand from './retrieve/retrieve-folder-command';

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('sfdx-data-deploy-vscode.deploy', deployCommand)
  );
  context.subscriptions.push(
    commands.registerCommand(
      'sfdx-data-deploy-vscode.deployFolder',
      deployFolderCommand
    )
  );
  context.subscriptions.push(
    commands.registerCommand(
      'sfdx-data-deploy-vscode.retrieve',
      retrieveCommand
    )
  );
  context.subscriptions.push(
    commands.registerCommand(
      'sfdx-data-deploy-vscode.retrieveFolder',
      retrieveFolderCommand
    )
  );
}
