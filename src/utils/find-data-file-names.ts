import { promises as fs } from 'fs';
import { resolve as resolvePath } from 'path';

export default async function findDataFileNames(
  directory: string
): Promise<string[]> {
  const descriptorPath = resolvePath(directory, 'datadeploy.json');
  try {
    const descriptorData = await fs.readFile(descriptorPath, 'utf8');
    const descriptor = JSON.parse(descriptorData);
    if (typeof descriptor !== 'object' || !Array.isArray(descriptor.jobs)) {
      return [];
    }
    return descriptor.jobs.map((job: any) => job.dataFileName);
  } catch (error) {
    throw new Error(`Error reading deployment descriptor: ${descriptorPath}`);
  }
}
