const deleteButtons = document.querySelectorAll("[data-id]");
deleteButtons.forEach((button) => {
  button.addEventListener("click", async (event) => {
    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      console.log(response.status);
      console.log("Failed to delete project");
    }
  });
});