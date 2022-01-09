export const variableNames = Object.freeze({
  app: { port: 'PORT' },
  mongo: {
    host: 'MONGO_HOST',
    port: 'MONGO_PORT',
    query: 'MONGO_QUERY',
    user: 'MONGO_INITDB_ROOT_USERNAME',
    password: 'MONGO_INITDB_ROOT_PASSWORD',
    database: 'MONGO_DB',
  },
  kuna: {
    publicKey: 'KUNA_PUBLIC_KEY',
    secret: 'KUNA_SECRET_KEY',
  },
  currency: {
    endpoint: 'CURRENCY_ENDPOINT',
    key: 'CURRENCY_KEY',
    conversions: 'CURRENCY_CONVERSIONS',
    required: 'CURRENCY_REQUIRED_CURRENCIES',
  },
});
