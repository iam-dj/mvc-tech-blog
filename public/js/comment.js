// Function to handle the form submission and create a new comment
const handleCommentSubmit = async (event) => {
  event.preventDefault();

  try {
    // Get the comment text from the form input
    const newComment = document.querySelector('#commentInput').value;

    // Retrieve the postId value from the appropriate image element
    const element = document.querySelector('#comment');
    const postId = element.getAttribute('comment-id');

    // console.log(postId);

    // Send a POST request to the server to create a new comment
    const response = await fetch(`/api/comments/${postId}`, {
      method: 'POST',
      body: JSON.stringify({ comment: newComment }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If the comment creation is successful, redirect or refresh the page as needed
      window.location.reload(); // Example: Refresh the page
    } else {
      // Handle the error response from the server
      const errorData = await response.json();
      console.log('Error:', errorData);
      // Handle displaying an error message to the user
    }
  } catch (error) {
    console.log('Error:', error);
    // Handle displaying an error message to the user
  }
};

// Add an event listener to the "Update" button
document.querySelector('#commentBtn').addEventListener('click', handleCommentSubmit);
