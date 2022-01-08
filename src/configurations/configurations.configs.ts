export const environmentFilePaths = ['.env.development.local', '.env'];

export const variableNames = Object.freeze({
  app: { port: 'PORT' },
  mongo: { connectionString: 'MONGO_CONNECTION_STRING' },
});
