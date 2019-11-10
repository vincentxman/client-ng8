import { environment } from '../../environments/environment';
const isProd = environment.production;


export function dumpErr(obj: any, title: string = '') {
  if (isProd) { return; }
  // const sObj = json ? JSON.stringify(obj) : obj;
  // tslint:disable-next-line:no-console
  console.log(`${title}>...`, `${obj}`);
}

export function dump(obj: any, title: string = '') {
  if (isProd) { return; }
  // const sObj = json ? JSON.stringify(obj) : obj;
  // tslint:disable-next-line:no-console
  console.log(`${title}>...`, `${obj}`);
}

export function sleep(ms: number) {
  if (isProd) { return; }
  // tslint:disable-next-line:no-console
  dump(`延迟${ms}ms`);
  return new Promise(resolve => setTimeout(resolve, ms));
}
