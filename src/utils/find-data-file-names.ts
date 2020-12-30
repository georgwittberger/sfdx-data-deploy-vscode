import { DeploymentDescriptor } from './read-descriptor';

export default async function findDataFileNames(
  descriptor: DeploymentDescriptor
): Promise<string[]> {
  return descriptor.jobs.map((job) => job.dataFileName);
}
