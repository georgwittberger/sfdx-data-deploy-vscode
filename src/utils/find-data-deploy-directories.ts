import { dirname } from 'path';
import { workspace } from 'vscode';

export default function findDataDeployDirectories(): Thenable<string[]> {
  return workspace
    .findFiles('**/datadeploy.json', '**/node_modules/**')
    .then((uris) => uris.map((uri) => dirname(uri.fsPath)).sort());
}
