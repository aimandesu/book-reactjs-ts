import { BookClass } from "./bookClass";

export const bookMockData: BookClass[] = [
  {
    id: 1,
    isbn: "9781785883262",
    name: "Android Programming for Beginners",
    year: 2015,
    author: "John Horton",
    description:
      "Learn Android application development with this accessible tutorial that takes you through Android and Java programming with practical and actionable steps.",
    image: "https://content.packt.com/B11621/cover_image.png",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    isbn: "9781788293631",
    name: "Learn Node.js by Building 6 Projects",
    year: 2018,
    author: "Eduonix Learning Solutions",
    description:
      "This is an advanced, practical guide to harnessing the power of Node.js by creating 6 full-scale real-world projects, from creating a chat application to an eLearning system.",
    image: "https://content.packt.com/B07858/cover_image_small.png",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 17,
    isbn: "9781785283109",
    name: "Multiplayer Game Development with HTML5",
    year: 2015,
    author: "Rodrigo Silveira",
    description:
      "Build fully-featured, highly interactive multiplayer games with HTML5",
    image: "https://content.packt.com/B04669/cover_image.jpg",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 18,
    isbn: "9781788299954",
    name: "Integrating Twitter and Facebook into Your iOS Apps",
    year: 2018,
    author: "Nick Walter",
    description:
      "Learn how to integrate Twitter and Facebook APIs into iOS apps",
    image: "https://static.packt-cdn.com/products/9781788299954/cover/smaller",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 227,
    isbn: "9781787121799",
    name: "Practical Game Design",
    year: 2018,
    author: "Adam Kramarzewski, Ennio De Nucci",
    description: "Design accessible and creative games across genres",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-aJPe1mxKWhuMHmjDrihxGRvmx5WkxoPeQ&s",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
