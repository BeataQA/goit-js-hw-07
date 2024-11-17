//Zadanie 1

const categoriesList = document.querySelector('ul#categories');
const numberOfCategories = categoriesList.querySelectorAll('li.item').length;
console.log(`Number of categories: ${numberOfCategories}`);

categoriesList.querySelectorAll('li.item').forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsCount}`);

});


//Zadanie 2

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach(ingredient => {
  const listItem = document.createElement("li"); 
  listItem.textContent = ingredient;   
  listItem.classList.add("item");   
  ingredientsList.appendChild(listItem) 
});




//Zadanie 3

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];


const gallery = document.querySelector('.gallery');

const galleryItemsHTML = images.map(image => {
    return `<li class="gallery-item">
    <img src="${image.url}" alt="${image.alt}" class="gallery-image">
    </li>`;
}).join('');

gallery.insertAdjacentHTML('beforeend', galleryItemsHTML);