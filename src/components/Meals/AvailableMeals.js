import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Tea",
    description: "Smell grassy, light and fresh ",
    price: 10,
  },
  {
    id: "m2",
    name: "Black Tea",
    description: "true tea that comes from the Camellia sinensis plant!",
    price: 8,
  },
  {
    id: "m3",
    name: "Lemon Tea",
    description: "a refreshing tea",
    price: 10,
  },
  {
    id: "m4",
    name: "coffee",
   // description: "Healthy...and green...",
    price: 12,
  },
  {
    id: "m9",
    name: "Samosa",
    description: "a fried or baked pastry with a savory filling",
    price: 8,
  },
  {
    id: "m14",
    name: "Bread Pakoda",
   // description: "Healthy...and green...",
    price: 10,
  },
  {
    id: "m5",
    name: "Sandwitch",
   //description: "Healthy...and green...",
    price: 15,
  },
  {
    id: "m6",
    name: "Single Egg Omlet",
   // description: "Healthy...and green...",
    price: 15,
  },
  {
    id: "m7",
    name: "Double Egg Omlet",
   // description: "Healthy...and green...",
    price: 25,
  },
  {
    id: "m8",
    name: "Bread Omlet",
   // description: "Healthy...and green...",
    price: 20,
  },
  {
    id: "m10",
    name: "Double Omlet",
   // description: "Healthy...and green...",
    price: 30,
  },
  {
    id: "m11",
    name: "Veg Maggi",
   // description: "Healthy...and green...",
    price: 30,
  },
  {
    id: "m12",
    name: "Egg Maggi",
   // description: "Healthy...and green...",
    price: 40,
  },
  {
    id: "m13",
    name: "Fry Maggi",
   // description: "Healthy...and green...",
    price: 35,
  },
  {
    id: "m15",
    name: "Aloo Paratha",
   // description: "Healthy...and green...",
    price: 15,
  },
  {
    id: "m16",
    name: "Pyaz Paratha",
   // description: "Healthy...and green...",
    price: 15,
  },
  {
    id: "m17",
    name: "Paneer Paratha",
   // description: "Healthy...and green...",
    price: 25,
  },
  {
    id: "m18",
    name: "Egg Paratha",
   // description: "Healthy...and green...",
    price: 20,
  },
  {
    id: "m19",
    name: "Double Egg Paratha",
   // description: "Healthy...and green...",
    price: 30,
  },
  {
    id: "m20",
    name: "Veg Momos (Full Plate)",
   // description: "Healthy...and green...",
    price: 50,
  },
  {
    id: "m21",
    name: "Veg Momos (Half Plate)",
   // description: "Healthy...and green...",
    price: 25,
  },
  {
    id: "m22",
    name: "Non Veg Momos (Full Plate)",
  //  description: "Healthy...and green...",
    price: 60,
  },
  {
    id: "m23",
    name: "Non Veg Momos (Half Plate)",
   // description: "Healthy...and green...",
    price: 30,
  },
  {
    id: "m24",
    name: "Panner Momos (Full Plate)",
  //  description: "Healthy...and green...",
    price: 60,
  },
  {
    id: "m25",
    name: "Paneer Momos (Half Plate)",
  //  description: "Healthy...and green...",
    price: 30,
  },
  {
    id: "m26",
    name: "Chowmin (Full Plate)",
  //  description: "Healthy...and green...",
    price: 50,
  },
  {
    id: "m27",
    name: "Chowmin (Half Plate)",
  //  description: "Healthy...and green...",
    price: 30,
  },
  {
    id: "m28",
    name: "Single Egg Chowmin (Full Plate)",
  //  description: "Healthy...and green...",
    price: 60,
  },
  {
    id: "m29",
    name: "Single Egg Chowmin (Half Plate)",
  //  description: "Healthy...and green...",
    price: 40,
  },
  {
    id: "m30",
    name: "Fried Rice (Full Plate)",
  //  description: "Healthy...and green...",
    price: 50,
  },
  {
    id: "m31",
    name: "Fried Rice (Half Plate)",
   // description: "Healthy...and green...",
    price: 30,
  },
  {
    id: "m32",
    name: "Egg Fried Rice (Full Plate)",
  //  description: "Healthy...and green...",
    price: 60,
  },
  {
    id: "m33",
    name: "Egg Fried Rice (Half Plate)",
  //  description: "Healthy...and green...",
    price: 40,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
