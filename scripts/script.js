const checkboxes = document.querySelectorAll('.inbox [type = "checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if(e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this; //this is referencing what has been clicked. stores reference to the element 
}

checkboxes.forEach(item => item.addEventListener('click', handleCheck));