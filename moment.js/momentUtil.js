import moment from 'moment';

/**
 * @export
 * @param {Number} ms
 * @param {String} formatStr YYYY-MM-DD hh:mm:ss:SSS
 * @returns
 */
export function msFormat(ms, formatStr) {
  return moment(ms).format(formatStr);
};
// export function msToCn() {

// }