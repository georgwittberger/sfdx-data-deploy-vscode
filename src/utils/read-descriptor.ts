import { constants as fsConstants, promises as fs } from 'fs';
import { resolve as resolvePath } from 'path';

export default async function readDescriptor(
  directory: string
): Promise<DeploymentDescriptor> {
  const descriptorPath = resolvePath(directory, 'datadeploy.json');
  try {
    await fs.access(descriptorPath, fsConstants.F_OK | fsConstants.R_OK);
  } catch (error) {
    throw new Error(
      `Deployment descriptor does not exist or is not accessible: ${descriptorPath}`
    );
  }
  let descriptor: DeploymentDescriptor;
  try {
    const descriptorData = await fs.readFile(descriptorPath, 'utf8');
    descriptor = JSON.parse(descriptorData);
  } catch (error) {
    throw new Error(`Error reading deployment descriptor: ${descriptorPath}`);
  }
  if (typeof descriptor !== 'object' || !Array.isArray(descriptor.jobs)) {
    throw new Error(
      `Deployment descriptor has an invalid format: ${descriptorPath}`
    );
  }
  return descriptor;
}

export type DeploymentDescriptor = {
  jobs: DeploymentJob[];
};

export type DeploymentJob = {
  sObjectApiName: string;
  dataFileName: string;
};
