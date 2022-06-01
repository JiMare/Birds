export type FeedType = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export const feeds: FeedType[] = [
  {
    id: 1,
    name: "maso",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur necessitatibus odit ut non officiis aut ipsum dicta quos! Eligendi ab voluptatum magnam odit odio, dolorem autem eaque voluptate doloribus.",
    image: "/images/img-feed/meat.jpg",
  },
  {
    id: 2,
    name: "semínka",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur necessitatibus odit ut non officiis aut ipsum dicta quos! Eligendi ab voluptatum magnam odit odio, dolorem autem eaque voluptate doloribus.",
    image: "/images/img-feed/seeds.jpg",
  },
  {
    id: 3,
    name: "ovoce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur necessitatibus odit ut non officiis aut ipsum dicta quos! Eligendi ab voluptatum magnam odit odio, dolorem autem eaque voluptate doloribus.",
    image: "/images/img-feed/fruit.jpg",
  },
  {
    id: 4,
    name: "tuk",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur necessitatibus odit ut non officiis aut ipsum dicta quos! Eligendi ab voluptatum magnam odit odio, dolorem autem eaque voluptate doloribus.",
    image: "/images/img-feed/tallow.jpg",
  },
];
