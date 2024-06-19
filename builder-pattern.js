class Meal {
    constructor(mainCourse, side, drink) {
        this.mainCourse = mainCourse;
        this.side = side;
        this.drink = drink;
    }

    toString() {
        return `Meal: Main Course - ${this.mainCourse}, Side - ${this.side}, Drink - ${this.drink}`;
    }
}

interface MealBuilder {
    setMainCourse(mainCourse): this;
    setSide(side): this;
    setDrink(drink): this;
    build(): Meal;
}

// BurgerMealBuilder (Concrete Builder)
class BurgerMealBuilder implements MealBuilder {
    #meal = new Meal();

    setMainCourse(mainCourse) {
        this.#meal.mainCourse = mainCourse;
        return this;
    }

    setSide(side) {
        this.#meal.side = side;
        return this;
    }

    setDrink(drink) {
        this.#meal.drink = drink;
        return this;
    }

    build() {
        return this.#meal;
    }
}

// PizzaMealBuilder (Concrete Builder)
class PizzaMealBuilder implements MealBuilder {
    #meal = new Meal();

    setMainCourse(mainCourse) {
        this.#meal.mainCourse = mainCourse;
        return this;
    }

    setSide(side) {
        this.#meal.side = side;
        return this;
    }

    setDrink(drink) {
        this.#meal.drink = drink;
        return this;
    }

    build() {
        return this.#meal;
    }
}

class MealDirector {
    constructor(private builder: MealBuilder) {}

    createMeal() {
        return this.builder.build();
    }
}

const mealDirector = new MealDirector(new BurgerMealBuilder());
mealDirector.createMeal()
    .setMainCourse("Cheeseburger")
    .setSide("Fries")
    .setDrink("Soda");

const burgerMeal = mealDirector.createMeal();
console.log(burgerMeal.toString());

const pizzaDirector = new MealDirector(new PizzaMealBuilder());
pizzaDirector.createMeal()
    .setMainCourse("Large Pepperoni Pizza")
    .setSide("Garlic Bread")
    .setDrink("Juice");

const pizzaMeal = pizzaDirector.createMeal();
console.log(pizzaMeal.toString());