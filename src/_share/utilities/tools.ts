import { environment } from '../../environments/environment';
const Tools = require('./../../../scripts/tools/dump.js');

const isProd = environment.production;


export function dumpErr(obj: any, title: string = '') {
  if (isProd) { return; }
  // const sObj = json ? JSON.stringify(obj) : obj;
  // tslint:disable-next-line:no-console
  // console.log(notice(`${title}>...`), error(`${obj}`));
  Tools.dumpErr(obj, title);
}

export function dump(obj: any, title: string = '') {
  if (isProd) { return; }
  // const sObj = json ? JSON.stringify(obj) : obj;
  // tslint:disable-next-line:no-console
  // console.log(notice(`${title}>...`), warn(`${obj}`));
  Tools.dump(obj, title);
}

export function sleep(ms: number) {
  if (isProd) { return; }
  // tslint:disable-next-line:no-console
  dump(`延迟${ms}ms`);
  return new Promise(resolve => setTimeout(resolve, ms));
}
