// @ts-ignore
export { version } from '../package.json';

export default (envVar: any) => {
  const strVar = String(envVar).toLowerCase();

  if (
    strVar === ''
    || strVar === 'false'
    || strVar === '0'
    || strVar === 'null'
    || strVar === 'undefined'
  ) {
    return false;
  }

  return true;
}
