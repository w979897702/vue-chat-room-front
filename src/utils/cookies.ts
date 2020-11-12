export function setCookie(key: string, value: string, days: number = 30) {
  var d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = key + '=' + value + '; ' + expires;
}
export function getCookie(key: string) {
  var name = key + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return '';
}
export function delCookie(key: string) {
  var d = new Date();
  d.setTime(-1);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = key + '=0; ' + expires;
}
