import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

export function createEnvs() {
  const path =
    process.env.NODE_ENV === 'test'
      ? '.env.test'
      : process.env.NODE_ENV === 'dev'
        ? '.env.dev'
        : '.env';

  const currentEnvs = dotenv.config({ path });
  return dotenvExpand.expand(currentEnvs);
}
