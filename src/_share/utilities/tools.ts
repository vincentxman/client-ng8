import { environment } from '../../environments/environment';

const isProd = environment.production;

export function sleep(ms: number) {
  if (isProd) { return; }
  // tslint:disable-next-line:no-console
  console.log(`延迟${ms}ms`);
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function dump(obj: any, title: string = '') {
  if (isProd) { return; }
  // const sObj = json ? JSON.stringify(obj) : obj;
  // tslint:disable-next-line:no-console
  console.log(`${title}>...`, obj);
}
