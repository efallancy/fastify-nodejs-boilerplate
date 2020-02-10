import { configureServer } from './server';
import config from './config';

const server = configureServer();

server.listen(config.port, '0.0.0.0', (err: Error) => {
  if (err) {
    server.log.error(`Error starting up server. Message: ${err.message}`);
    process.exit(1);
  }
});
