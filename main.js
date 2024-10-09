var i = 0;
var txt = ["creative", "you.", "kind", "helpful", "artistic", "well-mannered", "userERR NAME UNKNOWN TERMINATING...."];
var speed = 65;
var currentText = "";
var previousText = "";

function typeWriter() {
  if (i < txt.length) {
    var newText = txt[Math.floor(Math.random() * txt.length)];
    while (newText === previousText) {
      newText = txt[Math.floor(Math.random() * txt.length)];
    }
    currentText = newText;
    document.getElementById('typewriter').innerHTML = ""; // Clear the previous text
    var charIndex = 0;
    var typeInterval = setInterval(() => {
      document.getElementById('typewriter').innerHTML += currentText.charAt(charIndex);
      charIndex++;
      if (charIndex >= currentText.length) {
        clearInterval(typeInterval);
        previousText = currentText; // Update the previous text
        setTimeout(deleteText, 2000); // Delete the text after 2 seconds
      }
    }, speed);
  }
}

function deleteText() {
  var deleteInterval = setInterval(() => {
    var currentTextElement = document.getElementById('typewriter');
    currentTextElement.innerHTML = currentTextElement.innerHTML.slice(0, -1);
    if (currentTextElement.innerHTML === "") {
      clearInterval(deleteInterval);
      typeWriter(); // Start typing a new text
    }
  }, speed);
}

typeWriter(); // Start the typewriter effect