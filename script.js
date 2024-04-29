
function changeContent(contentId) {
 var content = document.getElementById('mainContent');
  
  // Fetch content based on contentId
  var newContent;
   if (contentId === 'about') {
    newContent = "<h2>About Me</h2>" +
                 "<p>This is the content about me. You can write anything you want to introduce yourself here.</p>";
  } else if (contentId === 'project1') {
    newContent = "<h2>Project 1</h2>" +
                 "<p>Project 1 is a poem based around the concept of "uncreative writing." Describe your project and its features here.</p>";
  } else if (contentId === 'project2') {
    newContent = "<h2>Project 2</h2>" +
                 "<p>This is the content for Project 2. Provide details about your second project here.</p>";
  } else if (contentId === 'project3') {
    newContent = "<h2>Project 3</h2>" +
                 "<p>This is the content for Project 3. Describe your third project here.</p>";
  }
  
  content.innerHTML = newContent;
}

