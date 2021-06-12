const checkboxes = document.querySelectorAll('.inbox [type = "checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if(e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
    })
  }
  lastChecked = this; //this is referencing what has been clicked. stores reference to the element 
}

checkboxes.forEach(item => item.addEventListener('click', handleCheck));


/*
10 remember last clicked index
20 listen for space
30 listen for click
40 remember last clicked index
50 turn checked on
*/