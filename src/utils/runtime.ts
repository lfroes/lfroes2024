export const isMobile = (): boolean => {
  const userAgent = navigator.userAgent || navigator.vendor;
  const isMobileUserAgent = /android|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent);
  const isMobileScreen = window.innerWidth <= 768;

  return isMobileUserAgent || isMobileScreen;
}
