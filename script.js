function changeContent(contentId) {
  var content = document.getElementById('mainContent');
  
  // Fetch content based on contentId
  var newContent;
  if (contentId === 'about') {
    newContent = "<h2>About Me</h2><p>This is the about me content.</p>";
  } else if (contentId === 'project1') {
    newContent = "<h2>Project 1</h2><p>This is the content for Project 1.</p>";
  } else if (contentId === 'project2') {
    newContent = "<h2>Project 2</h2><p>This is the content for Project 2.</p>";
  } else if (contentId === 'project3') {
    newContent = "<h2>Project 3</h2><p>This is the content for Project 3.</p>";
  }
  
  // Update the content
  content.innerHTML = newContent;
}
