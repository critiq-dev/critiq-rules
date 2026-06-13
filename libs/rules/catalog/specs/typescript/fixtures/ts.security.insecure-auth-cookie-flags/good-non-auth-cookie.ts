declare function setCookie(
  name: string,
  value: string,
  options?: Record<string, unknown>,
): void;

const tzCookieInfo = { name: 'gitweb_tz', value: 'UTC' };
setCookie(tzCookieInfo.name, tzCookieInfo.value, { expires: 365 });
