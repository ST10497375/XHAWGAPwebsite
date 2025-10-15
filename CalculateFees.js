const VAT = 0.15;
const CoursesPrices = [1500, 1500, 1500, 1500];
const CoursesPrices2 = [750, 750, 750];
document.addEventListener("DOMContentLoaded", function () {
  const checkboxe = document.querySelectorAll(".Courses");
  const checkboxe2 = document.querySelectorAll(".Courses2");
  const CalculateButton = document.getElementById("CalculateTotal");

  let DiscountRate = 0;
  let TotalFees = 0;
  let Fees = 0;
  let DiscountAmount = 0;
  let VATAmount = 0;
  let selectedCourses = [];

  function createOrGetOutput() {
    let out = document.getElementById("output");
    if (out) return out;

    out = document.createElement("div");
    out.id = "output";
    // Try to place the output near the Calculate button if available
    if (CalculateButton && CalculateButton.parentNode) {
      CalculateButton.parentNode.insertBefore(out, CalculateButton.nextSibling);
    } else {
      document.body.appendChild(out);
    }
    return out;
  }

  function CalculateTotal() {
    // Ensure output element exists (prevents null innerHTML error)
    const outputEl = createOrGetOutput();

    selectedCourses = [];
    Fees = 0;

    // First group (R1500)
    checkboxe.forEach((checkbox, index) => {
      if (checkbox.checked) {
        const courseName = [
          "First Aid",
          "Sewing",
          "Landscaping",
          "Life Skills",
        ][index];
        selectedCourses.push(courseName);
        Fees += CoursesPrices[index];
      }
    });

    // Second group (R750)
    checkboxe2.forEach((checkbox, index) => {
      if (checkbox.checked) {
        const courseName = ["Child Minding", "Cooking", "Garden Maintenance"][
          index
        ];
        selectedCourses.push(courseName);
        Fees += CoursesPrices2[index];
      }
    });

    // Apply discount
    const numCourses = selectedCourses.length;
    if (numCourses === 2) {
      DiscountRate = 0.05;
    } else if (numCourses === 3) {
      DiscountRate = 0.1;
    } else if (numCourses > 3) {
      DiscountRate = 0.15;
    } else {
      DiscountRate = 0;
    }

    // Compute totals
    DiscountAmount = Fees * DiscountRate;
    VATAmount = (Fees - DiscountAmount) * VAT;
    TotalFees = Fees - DiscountAmount + VATAmount;

    // Display
    outputEl.innerHTML = `
        <strong>Selected Courses:</strong> ${
          selectedCourses.join(", ") || "None"
        } <br>
        <strong>Base Fees:</strong> R${Fees.toFixed(2)} <br>
        <strong>Discount Applied:</strong> ${(DiscountRate * 100).toFixed(
          0
        )}% <br>
        <strong>Discount Amount:</strong> R${DiscountAmount.toFixed(2)} <br>
        <strong>VAT (15%):</strong> R${VATAmount.toFixed(2)} <br>
        <strong>Total Fees:</strong> <span style="color:green; font-weight:bold;">R${TotalFees.toFixed(
          2
        )}</span>
    `;
  }

  // Expose for inline onclick handlers and other callers
  window.calculateTotal = CalculateTotal;

  if (CalculateButton) {
    CalculateButton.addEventListener("click", CalculateTotal);
  }
});

