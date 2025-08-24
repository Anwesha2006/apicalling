function convert() {
  let url = document.getElementById("youtubeUrl").value;

  if (url === "") {
    alert("Please enter a YouTube URL");
    return;
  }

  // Change blog title dynamically
  document.getElementById("blogTitle").innerHTML = "<b>Blog Title:</b> Generated Blog from " + url;

  console.log("Converting:", url);
}

// Event Listener
generateBtn.addEventListener("click", () => {
  generateBlog(youtubeUrl.value);
});



