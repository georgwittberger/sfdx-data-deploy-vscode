import { commands, ExtensionContext } from 'vscode';
import deployCommand from './deploy/deploy-command';
import retrieveCommand from './retrieve/retrieve-command';

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('sfdx-data-deploy-vscode.deploy', deployCommand)
  );
  context.subscriptions.push(
    commands.registerCommand(
      'sfdx-data-deploy-vscode.retrieve',
      retrieveCommand
    )
  );
}
