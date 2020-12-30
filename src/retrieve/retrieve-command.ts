import { window } from 'vscode';
import readDescriptor from '../utils/read-descriptor';
import selectDataFiles from '../utils/select-data-files';
import selectDeployDirectory from '../utils/select-deploy-directory';

export default async function retrieveCommand(
  deployDir?: string,
  include?: string[]
) {
  const deployDirectory = deployDir || (await selectDeployDirectory())?.detail;
  if (!deployDirectory) {
    return;
  }

  let descriptor;
  try {
    descriptor = await readDescriptor(deployDirectory);
  } catch (error) {
    window.showErrorMessage(error.message);
    return;
  }

  const includeFiles = include || (await selectDataFiles(descriptor));
  if (!includeFiles) {
    return;
  }

  const terminal = window.createTerminal('SFDX Data Retrieve');
  terminal.show(true);

  if (includeFiles.length > 0) {
    const includeParam = includeFiles.join(',');
    terminal.sendText(
      `sfdx datadeploy:retrieve -d "${deployDirectory}" -i "${includeParam}"`
    );
  } else {
    terminal.sendText(`sfdx datadeploy:retrieve -d "${deployDirectory}"`);
  }
}
