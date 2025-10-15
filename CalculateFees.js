const VAT = 0.15; 
const CoursesPrices = [1500, 1500, 1500, 1500];
const CoursesPrices2 = [750, 750, 750];

const checkboxe = document.querySelectorAll(".Courses");
const checkboxe2 = document.querySelectorAll(".Courses2");

let DiscountRate = 0;                                            
let TotalFees = 0;
let Fees = 0;
let DiscountAmount = 0;
let VATAmount = 0;
let selectedCourses = [];

function CalculateFees() {
    // reset accumulators each time
    selectedCourses = [];
    Fees = 0;

    // Check first group (R1500)
    checkboxe.forEach((checkbox, index) => {
        if (checkbox.checked) {
            selectedCourses.push(`Course ${index + 1} (R1500)`);
            Fees += CoursesPrices[index];
        }
    });

    // Check second group (R750)
    checkboxe2.forEach((checkbox, index) => {
        if (checkbox.checked) {
            selectedCourses.push(`Course ${index + 5} (R750)`);
            Fees += CoursesPrices2[index];
        }
    });

    // Apply discount based on total selected
    if (selectedCourses.length === 2) {
        DiscountRate = 0.05;
    } else if (selectedCourses.length === 3) {
        DiscountRate = 0.10;
    } else if (selectedCourses.length > 3) {
        DiscountRate = 0.15;
    } else {
        DiscountRate = 0;
    }

    // Compute totals
    DiscountAmount = Fees * DiscountRate;
    VATAmount = (Fees - DiscountAmount) * VAT;
    TotalFees = Fees - DiscountAmount + VATAmount;

    // Display results
    document.getElementById("output").innerHTML = `
        <strong>Selected Courses:</strong> ${selectedCourses.join(", ") || "None"} <br>
        <strong>Base Fees:</strong> R${Fees.toFixed(2)} <br>
        <strong>Discount Applied:</strong> ${(DiscountRate * 100).toFixed(0)}% <br>
        <strong>Discount Amount:</strong> R${DiscountAmount.toFixed(2)} <br>
        <strong>VAT (15%):</strong> R${VATAmount.toFixed(2)} <br>
        <strong>Total Fees:</strong> R${TotalFees.toFixed(2)}
    `;
}

//  Attach event listeners once (outside the function)
checkboxe.forEach(cb => cb.addEventListener("change", CalculateFees));
checkboxe2.forEach(cb => cb.addEventListener("change", CalculateFees));