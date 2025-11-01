const form = document.getElementById("user form");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", showMessage);

function showMessage() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("course").value;
  if (!name && !email && !course) {
    alert("Please fill out the form before submitting.");
  } else if (!name || !email || !course) {
    alert("Please complete all the required fields.");
  } else {
    alert(
      "Thank you for submitting the form. We will get back to you shortly."
    );
    form.reset();
  }
}
