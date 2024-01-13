
export function scrollNextPage(altura, multiply) {
  window?.scrollTo({
    top: altura*multiply,
    behavior: 'smooth'
  });
};