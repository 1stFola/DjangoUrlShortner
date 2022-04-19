function myFunction() {
  
    let copyText = document.getElementById("myInput");
   
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    
    navigator.clipboard.writeText(copyText.value);
  
    alert("Copied the text: " + copyText.value);
} 

const obj = document.getElementById("thisButton")

obj.addEventListener("onClick", myFunction())
