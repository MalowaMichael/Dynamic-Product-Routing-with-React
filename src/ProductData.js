import { faker } from '@faker-js/faker';


const categories = ["Men", "Women", "Kids", "Clothes", "Sports", "Beauty", "Health", "Garden", "Electronics", "Shoes",];
const itemPerCategory = 5;

const generateProducts = () => {
  const products = [];

  categories.forEach((category) =>{
    for (let i = 0; i < itemPerCategory; i++) {
      products.push({
        id: faker.string.uuid(),
        image: faker.image.urlPicsumPhotos({ width: 400, height: 400 }), // Random product image
        name: faker.commerce.productName(), // Random product name
        category: category,
        price_old: faker.commerce.price({ min: 500, max: 1000, dec: 0 }), // Old price
        price_new: faker.commerce.price({ min: 300, max: 900, dec: 0 }), // New price
          
  })
    }
  })
  return products;
};

//generate products only if they don't exist in the loca storage
const loadProducts = () => {
  const savedProducts = localStorage.getItem("products")

  if (savedProducts) {
    const parsedProducts = JSON.parse(savedProducts);
    const savedCategories = new Set(parsedProducts.map((product) => product.category))
     
    //now all added categories
    const allCategoriesExist = categories.every(cat => savedCategories.has(cat));

    if (allCategoriesExist) {
      //console.log("Loaded products from local storage: ", parsedProducts)
      return parsedProducts;
    }else{
      console.log("Some categories are missing, regenerating products...");

    }
    
  }else{
    console.log("No products found in localStorage, generating new ones...");

  }

    const newProducts = generateProducts()
    localStorage.setItem("products", JSON.stringify(newProducts))
    console.log("✅ New products saved to localStorage:", newProducts);

    return newProducts;
}
const product_data = loadProducts() || []
//console.log("generated prods: ", product_data)
export default product_data