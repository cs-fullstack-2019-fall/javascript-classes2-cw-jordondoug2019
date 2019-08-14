// ### Exercise 1
// Create a Movie class. Make all the following attributes: movieName, rating, and yearReleased.
//     Create three different methods to change each attribute.
//     Outside of the class create two different Movie objects, assign values to each object, and print them to the console.
//
//     ### Exercise 2
// Create a class Product that represents a product sold online. A product has a price, quantity and name.
//
//     The class should have:
//     1. A constructor to hold the values.
// 2. A method ```printProduct()``` that prints a product in the following form: ```Banana, price 1.1, amount 13```

//Exercise 1
class Movie
{
    constructor(movieName,rating,yearReleased)
   { this.movieName=movieName;
       this.rating=rating;
       this.yearReleased=yearReleased;
   }
   changeName(movieName)
   {
        this.movieName=movieName
   }
   changeRating(rating)
   {
        this.rating=rating
   }
   changeYear(year)
   {
        this.yearReleased=year
   }
}

let favMovie1= new Movie("Lion King","5 stars",1993);
let favMovie2= new Movie("School daze", "4 stars", 1992);

console.log(favMovie1);
console.log(favMovie2);
favMovie1.changeName("Jumanji");
favMovie2.changeRating("6 stars");
favMovie1.changeYear(2019);

//Exercise 2
class Product
{
    constructor(name,price,quantity)
    {
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
    printProduct(product)
    {
        console.log(this.name);
        console.log(this.price);
        console.log(this.quantity)
    }
}

let fruit = new Product("Bananas",3.25, 5);

fruit.printProduct();