import Caramel_Iced_Coffee from "../assets/images/drinks/Caramel_Iced_Coffee.jpg";
import slow_cold_brew from "../assets/images/drinks/slow_cold_brew.jpg";
import velvet_cappuccino from "../assets/images/drinks/velvet_cappuccino.jpg";

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
