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

