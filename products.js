// Products Data with Categories and Sizes
const products = {
  menShoes: {
    categoryName: "Men's Shoes",
    categoryId: 1,
    items: [
      {
        id: 101,
        name: "Formal Black Oxford",
        price: 4999,
        image: "images/men-formal.jpg",
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        description: "Premium formal black shoes"
      },
      {
        id: 102,
        name: "Casual Brown Sneaker",
        price: 3499,
        image: "images/men-casual.jpg",
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        description: "Comfortable casual brown sneaker"
      },
      {
        id: 103,
        name: "Sports Running Shoe",
        price: 5999,
        image: "images/men-sports.jpg",
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        description: "High-performance running shoes"
      }
    ]
  },

  womenShoes: {
    categoryName: "Women's Shoes",
    categoryId: 2,
    items: [
      {
        id: 201,
        name: "Red Heels",
        price: 3999,
        image: "images/women-heels.jpg",
        sizes: ["4", "5", "6", "7", "8", "9"],
        description: "Elegant red heels for parties"
      },
      {
        id: 202,
        name: "Comfortable Flats",
        price: 2499,
        image: "images/women-flats.jpg",
        sizes: ["4", "5", "6", "7", "8", "9"],
        description: "Comfortable and stylish flats"
      },
      {
        id: 203,
        name: "White Sneakers",
        price: 3299,
        image: "images/women-sneakers.jpg",
        sizes: ["4", "5", "6", "7", "8", "9"],
        description: "Trendy white canvas sneakers"
      }
    ]
  },

  kidsShoes: {
    categoryName: "Kids' Shoes",
    categoryId: 3,
    items: [
      {
        id: 301,
        name: "School Black Shoes",
        price: 1999,
        image: "images/kids-school.jpg",
        sizes: ["1", "2", "3", "4", "5"],
        description: "Durable school shoes for kids"
      },
      {
        id: 302,
        name: "Casual Colorful Sneaker",
        price: 1799,
        image: "images/kids-casual.jpg",
        sizes: ["1", "2", "3", "4", "5"],
        description: "Fun and colorful casual sneakers"
      },
      {
        id: 303,
        name: "Kids Sports Shoes",
        price: 2299,
        image: "images/kids-sports.jpg",
        sizes: ["1", "2", "3", "4", "5"],
        description: "Perfect for sports and activities"
      }
    ]
  },

  sportsShoes: {
    categoryName: "Sports Shoes",
    categoryId: 4,
    items: [
      {
        id: 401,
        name: "Running Shoes Pro",
        price: 6999,
        image: "images/sports-running.jpg",
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        description: "Professional running shoes"
      },
      {
        id: 402,
        name: "Basketball Shoes",
        price: 7999,
        image: "images/sports-basketball.jpg",
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        description: "High ankle basketball shoes"
      },
      {
        id: 403,
        name: "Cricket Shoes",
        price: 5499,
        image: "images/sports-cricket.jpg",
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        description: "Professional cricket shoes"
      }
    ]
  }
};

// Function to get all categories
function getAllCategories() {
  return Object.keys(products).map(key => ({
    id: products[key].categoryId,
    name: products[key].categoryName,
    key: key,
    itemCount: products[key].items.length
  }));
}

// Function to get products by category
function getProductsByCategory(categoryKey) {
  return products[categoryKey] || null;
}

// Function to get single product by ID
function getProductById(productId) {
  for (let category in products) {
    const found = products[category].items.find(item => item.id === productId);
    if (found) return found;
  }
  return null;
}

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { products, getAllCategories, getProductsByCategory, getProductById };
}
