import { window } from 'vscode';
import selectDataFiles from '../utils/select-data-files';
import selectDeployDirectory from '../utils/select-deploy-directory';

export default async function deployCommand(
  deployDir?: string,
  include?: string[]
) {
  const deployDirectory = deployDir || (await selectDeployDirectory())?.detail;
  if (!deployDirectory) {
    return;
  }

  const includeFiles = include || (await selectDataFiles(deployDirectory));
  if (!includeFiles) {
    return;
  }

  const terminal = window.createTerminal('SFDX Data Deploy');
  terminal.show(true);

  if (includeFiles.length > 0) {
    const includeParam = includeFiles.join(',');
    terminal.sendText(
      `sfdx datadeploy:deploy -d "${deployDirectory}" -i "${includeParam}"`
    );
  } else {
    terminal.sendText(`sfdx datadeploy:deploy -d "${deployDirectory}"`);
  }
}
