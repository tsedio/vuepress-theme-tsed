export function scrollPosition() {
  return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
}
