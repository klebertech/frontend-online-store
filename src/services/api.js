export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const data = await fetch(URL);
  const result = await data.json();
  return result;
}

export async function getItensByCategories(categoryId) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const data = await fetch(URL);
  return data;
}