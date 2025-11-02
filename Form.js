const form = document.getElementById("userform");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault(); // prevent form from reloading page
  showMessage();
});

function showMessage() {
  const name = document.getElementById("Name").value.trim();
  const email = document.getElementById("Email").value.trim();
  const phone = document.getElementById("Phone").value.trim();

  if (!name && !email && !phone) {
    alert("Please fill out the form before submitting.");
  } else if (!name || !email || !phone) {
    alert("Please complete all the required fields.");
  } else {
    alert(
      "Thank you for submitting the form. We will get back to you shortly."
    );
    form.reset();
  }
}
