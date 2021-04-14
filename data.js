import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "kartikey",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "john",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Royal Langa ",
      category: "clothes",
      image: "/images/product-1.jpg",
      price: 400,
      countInStock: 10,
      brand: "Nike",
      description: "high quality products",
    },
    {
      name: "Palazo ",
      category: "clothes",
      image: "/images/product-2.jpg",
      price: 2200,
      countInStock: 0,
      brand: "Nike",
      description: "high quality products",
    },
    {
      name: "Z-black",
      category: "clothes",
      image: "/images/product-3.jpg",
      price: 3000,
      countInStock: 20,
      brand: "Nike",
      description: "high quality products",
    },
    {
      name: "Langaa Garianga",
      category: "clothes",
      image: "/images/product-4.jpg",
      price: 2760,
      countInStock: 10,
      brand: "Nike",
      description: "high quality products",
    },
    {
      name: "Mix match",
      category: "clothes",
      image: "/images/product-5.jpg",
      price: 2980,
      countInStock: 10,
      brand: "Nike",
      description: "high quality products",
    },
    {
      name: "Parry look",
      category: "clothes",
      image: "/images/product-6.jpg",
      price: 3980,
      countInStock: 10,
      brand: "Nike",
      description: "high quality products",
    },
    {
      name: "bhai aur naam nahi pata",
      category: "clothes",
      image: "/images/product-7.jpg",
      price: 2450,
      countInStock: 10,
      brand: "Nike",
      description: "high quality products",
    },
    {
      name: "Kuch bhi",
      category: "clothes",
      image: "/images/product-8.jpg",
      price: 1990,
      countInStock: 10,
      brand: "Nike",
      description: "high quality products",
    },
    {
      name: "Langaa",
      category: "clothes",
      image: "/images/product-9.jpg",
      price: 4580,
      countInStock: 10,
      brand: "Nike",
      description: "high quality products",
    },
  ],
};

export default data;
