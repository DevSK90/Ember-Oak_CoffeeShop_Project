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

import Antigua from "../assets/images/beans/Antigua.jpg";
import House_Blend from "../assets/images/beans/House_Blend.jpg";
import Huila_Reserve from "../assets/images/beans/Huila_Reserve.jpg";
import Mandheling from "../assets/images/beans/Mandheling.jpg";
import Yirgacheffe from "../assets/images/beans/Yirgacheffe.jpg";

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
    Category: "coffee",
    image: Caramel_Iced_Coffee,
    name: "Caramel Iced Coffee",
    description: "Double espresso, steamed oat milk, house caramel.",
    price: "5.50",
    likes: 128,
  },
  {
    id: "2",
    Category: "coffee",
    image: velvet_cappuccino,
    name: "velvet cappuccino",
    description: "Rich espresso with silky microfoam, hand-poured art.",
    price: "4.25",
    likes: 154,
  },
  {
    id: "3",
    Category: "coffee",
    image: classic_espresso,
    name: "Classic Espresso",
    description: "Two-shot pull, rich crema, notes of cocoa and toasted nut.",
    price: "3.25",
    likes: 154,
  },
  {
    id: "4",
    Category: "tea",
    image: Spiced_Chai_Latte,
    name: "Spiced Chai Latte",
    description: "Black tea, warm spices, steamed milk, honey.",
    price: "4.50",
    likes: 96,
  },
  {
    id: "5",
    Category: "tea",
    image: Ceremonial_Matcha,
    name: "Ceremonial Matcha",
    description: "Stone-ground matcha whisked with steamed milk.",
    price: "5.00",
    likes: 96,
  },
  {
    id: "6",
    Category: "Pastry",
    image: butter_croissant,
    name: "butter croissant",
    description: "Stone-ground matcha whisked with steamed milk.",
    price: "5.00",
    likes: 96,
  },
  {
    id: "7",
    Category: "Pastry",
    image: basque_cheesecake,
    name: "basque cheesecake",
    description: "Stone-ground matcha whisked with steamed milk.",
    price: "3.50",
    likes: 96,
  },

  {
    id: "8",
    Category: "Pastry",
    image: sea_salt_cookie,
    name: "sea salt cookie",
    description: "Stone-ground matcha whisked with steamed milk.",
    price: "2.75",
    likes: 96,
  },
  {
    id: "9",
    Category: "cold",
    image: slow_cold_brew,
    name: "slow cold brew",
    description: "18-hour steep, notes of dark chocolate and cherry.",
    price: "4.75",
    likes: 96,
  },
  {
    id: "10",
    Category: "cold",
    image: Iced_Oat_Mocha,
    name: "Iced Oat Mocha",
    description: "House chocolate, espresso, oat milk over ice.",
    price: "4.75",
    likes: 96,
  },
];

export const beans = [
  {
    id: "bean1",
    image: Yirgacheffe,
    tags: ["Light Roast", "Ethiopia"],
    name: "Yirgacheffe",
    desc: "Floral and bright, with notes of jasmine, bergamot, and stone fruit.",
    price: "18.00",
  },
  {
    id: "bean2",
    image: Huila_Reserve,
    tags: ["Medium Roast", "Colombia"],
    name: "Huila Reserve",
    desc: "Balanced and sweet, with caramel, red apple, and a hint of walnut.",
    price: "17.00",
  },
  {
    id: "bean3",
    image: Antigua,
    tags: ["Medium Roast", "Guatemala"],
    name: "Antigua",
    desc: "Rich and spiced — cocoa, cinnamon, and a smooth, full body.",
    price: "17.50",
  },
  {
    id: "bean4",
    image: Mandheling,
    tags: ["Dark Roast", "Sumatra"],
    name: "Mandheling",
    desc: "Bold and earthy — dark chocolate, cedar, and a syrupy body.",
    price: "16.50",
  },
  {
    id: "bean5",
    image: House_Blend,
    tags: ["Medium-Dark", "House Blend"],
    name: "Ember Signature Blend",
    desc: "Our house cup — brown sugar, roasted almond, and a smooth finish.",
    price: "19.00",
  },
];
