import uuid from 'uuid';

const generateRequestId = (): string => uuid();

const getPortFromEnv = (): number => {
  const portEnv = process.env.PORT || '';
  const parsedPortEnv = parseInt(portEnv);

  return isNaN(parsedPortEnv) ? 0 : parsedPortEnv;
};

const config = {
  logger: true,
  genReqId: generateRequestId,
  port: getPortFromEnv() || 3000,
};

export default config;
