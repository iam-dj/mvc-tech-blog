const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#project-name").value.trim();
    // let photo = "";
    const text = document
      .querySelector("#project-desc")
      .value.trim();
  
    // Get the uploaded photo URL
  
    if (title && text ) {
      const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({title, text}),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        console.log("Failed to create stamp");
      }
    }
  };


const newStampBtn = document.querySelector("#new-stamp-btn");
const newStampFormContainer = document.querySelector(
  "#new-stamp-form-container"
);
let n = 0;
const showNewStampForm = () => {
  if (n == 0) {
    newStampFormContainer.style.display = "block";
    n++;
  } else {
    newStampFormContainer.style.display = "none";
    n--;
  }
};
newStampBtn.addEventListener("click", showNewStampForm);

// Event listener for form submission
document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);
