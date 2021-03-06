const env = {
  DEV_MODE: process.env.DEV_MODE,
  prefix: process.env.prefix,
  appPrefix: process.env.appPrefix,
  apiPrefix: process.env.apiPrefix,
  NODE_ENV: process.env.NODE_ENV || 'development',
};
if (__isBrowser__) {
  console.table(env);
}

export default env;
