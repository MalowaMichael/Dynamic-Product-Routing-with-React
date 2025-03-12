import { faker } from '@faker-js/faker';


const categories = ["Health", "Garden", "Electronics", "Shoes"];
const itemPerCategory = 8;

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
    return JSON.parse(savedProducts)
  }else{
    const newProducts = generateProducts(20)
    localStorage.setItem("products", JSON.stringify(newProducts))
    return newProducts;
  }
}
const product_data = loadProducts()
//console.log("generated prods: ", product_data)
export default product_data