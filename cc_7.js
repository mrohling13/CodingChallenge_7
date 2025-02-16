// Task 1: Function Declaration

function calculateInvoice(subtotal, taxRate, discount) { // Declaring Invoice Function
    const total = (subtotal +(subtotal * taxRate)) - discount; // Calculates Final Invoice amount
    return `Total Invoice: $${total.toFixed(2)}`;
}

// Test Data for Task 1
console.log(calculateInvoice(100, 0.08, 5)); // Expected output: "Total Invoice: $103.00" 

console.log(calculateInvoice(500, 0.1,20)); // Expected output: "Total Invoice: $530.00" 


// Task 2: Function Expression

const calculateHourlyWage = function(salary, hoursPerWeek) { // Declaring a hourly wage
    const hourlyWage = salary / (hoursPerWeek * 52); // caluclates wage
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};

// Test Data for Task 2
console.log(calculateHourlyWage(52000, 40)); // Expected output: Expected output: "Hourly Wage: $25.00"

console.log(calculateHourlyWage(75000, 35)); // Expected output: Expected output: "Hourly Wage: $41.21"

// Task 3: Arrow Function

const calculateLoyaltyDiscount = (amount, years) => { 
    let discountRate;
    if (years >= 5) {
        discountRate = 0.15; // Calculates 15% discount
    } else if (years >= 3) {
        discountRate = 0.10; // Calculates 10% discount
    } else {
        discountRate = 0.05; // Calculates 5% discount
    }
    const discountedPrice = amount - (amount * discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};

// Test Data for Task 3
console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"

// Task 4: Parameters and Arguments 
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost;
    if (location === "USA") {
        baseCost = 5 + (0.5 * weight); // Calculates USA shipping cost 
    } else if (location === "Canada") {
        baseCost = 10 + (0.7 * weight); // Calculates Canada shipping cost 
    } else {
        return "Invalid Location"; // Handles invalid locations
    }
    if (expedited) {
        baseCost += 10; // Add $10 for expedited shipping
    }
    return `Shipping Cost: $${baseCost.toFixed(2)}`; // Format and return the result
}

// Test Data for Task 4

console.log(calculateShippingCost(10, "USA", true)); // Expected output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"

// Task 5: Returning Values

function calculateLoanInterest(principal, rate, years) { 
    const interest = principal * rate * years; // Calculates loan interest 
    return ` Total Interest: $${interest.toFixed(2)}`;
}

// Test Data for Task 5 

console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00"

console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Interest: $1750.00"

// Task 6: Higher Order Functions

function filterHighValueTransactions(transactions, filterFunction) { // function filters transactions
    return transactions.filter(filterFunction);
}

// Test Data for Task 6

let transactions = [500, 1200, 3000, 800, 2200];
filterHighValueTransactions(transactions, amount => amount > 1000);
console.log(filterHighValueTransactions(transactions, amount => amount > 1000));
// Expected output: [1200, 3000, 2200]

// Task 7: Closures

function createBudgetTracker() {
    let balance = 0;
    return function(expense) {
        balance -= expense;
        return `Current Balance: -$${Math.abs(balance).toFixed(2)}`;
    };
}

// Test Data for Task 7 

let budget = createBudgetTracker();
console.log(budget(300)); // Expected output: "Current Balance: -$300"
console.log(budget(200)); // Expected output: "Current Balance: -$500"