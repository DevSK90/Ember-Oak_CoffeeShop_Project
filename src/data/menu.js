import Caramel_Iced_Coffee from "../assets/images/drinks/Caramel_Iced_Coffee.jpg";
import slow_cold_brew from "../assets/images/drinks/slow_cold_brew.jpg";
import velvet_cappuccino from "../assets/images/drinks/velvet_cappuccino.jpg";
import classic_espresso from "../assets/images/drinks/classic_espresso.jpg";
import Ceremonial_Matcha from "../assets/images/drinks/Ceremonial_Matcha.jpg";
import Spiced_Chai_Latte from "../assets/images/drinks/Spiced_Chai_Latte.jpg";
import Iced_Oat_Mocha from "../assets/images/drinks/Iced_Oat_Mocha.jpg";

import basque_cheesecake from "../assets/images/pastries/basque_cheesecake.jpg";
import butter_croissant from "../assets/images/pastries/butter_croissant.jpg";
import sea_salt_cookie from "../assets/images/pastries/sea_salt_cookie.jpg";

export const drinks = [
  {
    id: "drink-1",
    image: Caramel_Iced_Coffee,
    name: "Caramel Iced Coffee",
    description: "Double espresso, steamed oat milk, house caramel.",
    price: "5.50",
    likes: 128,
  },
  {
    id: "drink-2",
    image: slow_cold_brew,
    name: "slow cold brew",
    description: "18-hour steep, notes of dark chocolate and cherry.",
    price: "4.75",
    likes: 96,
  },
  {
    id: "drink-3",
    image: velvet_cappuccino,
    name: "velvet cappuccino",
    description: "Rich espresso with silky microfoam, hand-poured art.",
    price: "4.25",
    likes: 154,
  },
];

export const pastries = [
  {
    id: "pastri-1",
    image: butter_croissant,
    name: "butter croissant",
    price: "5.00",
  },
  {
    id: "pastri-2",
    image: basque_cheesecake,
    name: "basque cheesecake",
    price: "3.50",
  },

  {
    id: "pastri-3",
    image: sea_salt_cookie,
    name: "sea salt cookie",
    price: "2.75",
  },
];

export const menuItems = [
  {
    id: "1",
    categoty: "coffee",
    image: Caramel_Iced_Coffee,
    name: "Caramel Iced Coffee",
    description: "Double espresso, steamed oat milk, house caramel.",
    price: "5.50",
    likes: 128,
  },
  {
    id: "2",
    categoty: "coffee",
    image: velvet_cappuccino,
    name: "velvet cappuccino",
    description: "Rich espresso with silky microfoam, hand-poured art.",
    price: "4.25",
    likes: 154,
  },
  {
    id: "3",
    categoty: "coffee",
    image: classic_espresso,
    name: "Classic Espresso",
    description: "Two-shot pull, rich crema, notes of cocoa and toasted nut.",
    price: "3.25",
    likes: 154,
  },
  {
    id: "4",
    categoty: "tea",
    image: Spiced_Chai_Latte,
    name: "Spiced Chai Latte",
    description: "Black tea, warm spices, steamed milk, honey.",
    price: "4.50",
    likes: 96,
  },
  {
    id: "5",
    categoty: "tea",
    image: Ceremonial_Matcha,
    name: "Ceremonial Matcha",
    description: "Stone-ground matcha whisked with steamed milk.",
    price: "5.00",
    likes: 96,
  },
  {
    id: "6",
    categoty: "pastri",
    image: butter_croissant,
    name: "butter croissant",
    description: "Stone-ground matcha whisked with steamed milk.",
    price: "5.00",
    likes: 96,
  },
  {
    id: "7",
    categoty: "pastri",
    image: basque_cheesecake,
    name: "basque cheesecake",
    description: "Stone-ground matcha whisked with steamed milk.",
    price: "3.50",
    likes: 96,
  },

  {
    id: "8",
    categoty: "pastri",
    image: sea_salt_cookie,
    name: "sea salt cookie",
    description: "Stone-ground matcha whisked with steamed milk.",
    price: "2.75",
    likes: 96,
  },
  {
    id: "9",
    categoty: "cold",
    image: slow_cold_brew,
    name: "slow cold brew",
    description: "18-hour steep, notes of dark chocolate and cherry.",
    price: "4.75",
    likes: 96,
  },
  {
    id: "10",
    categoty: "cold",
    image: Iced_Oat_Mocha,
    name: "Iced Oat Mocha",
    description: "House chocolate, espresso, oat milk over ice.",
    price: "4.75",
    likes: 96,
  },
];
