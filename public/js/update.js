// Get the update form and update button elements
const updateForm = document.querySelector(".update-form");
const updateBtn = document.querySelector("#updateBtn");

const updateButtons = document.querySelectorAll("[data-post-id]");
updateButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Set the stamp's id as a data attribute on the "Update" button in the modal
    const postID = event.target.getAttribute("data-post-id");
    const updateBtn = document.querySelector("#updateBtn");
    updateBtn.setAttribute("stamp-id", postID);
  });
});

//

const updateFormHandler = async (event) => {
  event.preventDefault();

  // Get the id of the stamp to update
  const postID = document.querySelector("#updateBtn").getAttribute("stamp-id");

  // Get the new text from the form
  const text = document.querySelector("#text-update").value.trim();
  console.log(text);
  console.log(postID);
  // Make the PUT request to update the stamp
  const response = await fetch(`/posts/${postID}`, {
    method: "PUT",
    body: JSON.stringify({ text }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace("/profile");
  } else {
    console.log("Failed to update stamp");
  }
};

// Add an event listener to the update form submit button
updateForm.addEventListener("submit", updateFormHandler);


