import { versions } from './versions';

export const environment = {
  production: true,

  // vincent
  uriWebsocket: 'wss://www.audioprint.cn/graphql?subscription=1',
  isMemoDB: false,
  version: versions.app
};
