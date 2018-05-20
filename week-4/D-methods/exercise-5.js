/* 
A coffee machine is defined below. 
One can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.

insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee 
only if the inserted amount is greater or equal than the price of the coffee!
*/

var coffeeMachine = {
    brand: "Super Coffee",
    prices: {
        cappuccino: 2.40,
        blackCoffee: 1.50,
        flatWhite: 3.00
    },
    insertedAmount: 0,
    insertMoney: function(amount) {
        this.insertedAmount = amount;
    },
    getCoffee: function(coffee) {
        let price = this.prices[coffee];
        let insertedAmount = this.insertedAmount;
        switch (true) {
          case coffee === "cappuccino" && insertedAmount >= price:
            return coffee;
          case coffee === "blackCoffee" && insertedAmount >= price:
            return coffee;
          case coffee === "flatWhite" && insertedAmount >= price:
            return coffee;
          default:
            return "'Sorry you don\'t have enough money for a flatWhite'";
        }
    }
};


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

coffeeMachine.insertMoney(2.40);
console.log("Expected result: 'Please take your cappuccino'. Actual result: " + "'Please take your " + coffeeMachine.getCoffee('cappuccino') + "'");

coffeeMachine.insertMoney(1.50);
console.log("Expected result: 'Please take your blackCoffee'. Actual result: " + "'Please take your " + coffeeMachine.getCoffee('blackCoffee') + "'");

coffeeMachine.insertMoney(4.00);
console.log("Expected result: 'Please take your flatWhite'. Actual result: " + "'Please take your " + coffeeMachine.getCoffee('flatWhite') + "'");

coffeeMachine.insertMoney(2.40);
console.log("Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: " + coffeeMachine.getCoffee('flatWhite'));

