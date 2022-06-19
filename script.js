console.log("Test");
heading = document.querySelector(".heading");
headingDescr = document.querySelector('#hbdescr');

let baseText = heading.textContent;
let baseDescr = headingDescr.textContent;

heading.onclick = function() {

  console.log("Button is pressed!");
  
  if (heading.classList.contains("strange-style")) {
	  heading.textContent = baseText;
	  headingDescr.textContent = baseDescr;
	  
	  heading.parentElement.style.border= "none";
  }
  else {
	  heading.textContent='"Epidemy: The Outbreak"';
	  headingDescr.textContent = 'Our main and sole product';
	  //heading.parentElement.style.border = "5px dotted";
  }
  heading.classList.toggle("strange-style");  
  }
