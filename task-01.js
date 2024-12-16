const categoriesList = document.querySelector('ul#categories');
const numberOfCategories = categoriesList.querySelectorAll('li.item').length;
console.log(`Number of categories: ${numberOfCategories}`);

categoriesList.querySelectorAll('li.item').forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsCount}`);

});