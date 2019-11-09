import { environment } from '../../environments/environment';
const clc = require('cli-color');

const isProd = environment.production;

const error = clc.red.bold;
const warn = clc.yellow;
const notice = clc.blue;
// 颜色: https://zh.wikipedia.org/wiki/ANSI%E8%BD%AC%E4%B9%89%E5%BA%8F%E5%88%97
export function dumpErr(obj: any, title: string = '') {
  if (isProd) { return; }
  // const sObj = json ? JSON.stringify(obj) : obj;
  // tslint:disable-next-line:no-console
  console.log(notice(`${title}>...`), error(`${obj}`));
}

export function dump(obj: any, title: string = '') {
  if (isProd) { return; }
  // const sObj = json ? JSON.stringify(obj) : obj;
  // tslint:disable-next-line:no-console
  console.log(notice(`${title}>...`), warn(`${obj}`));
}

export function sleep(ms: number) {
  if (isProd) { return; }
  // tslint:disable-next-line:no-console
  dump(`延迟${ms}ms`);
  return new Promise(resolve => setTimeout(resolve, ms));
}
