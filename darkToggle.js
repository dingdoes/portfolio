//dark mode toggle
document.getElementById("toggle").addEventListener("click", function(){
  document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});

//toggle headline highlight
document.getElementById("gravity").addEventListener("click", function(){

  Body.setStatic(greetBox, false);
  console.log(greetBox.isStatic);

  if (greetBox.isStatic) {
    Body.setStatic(greetBox, true);
    console.log('ping2');
    }
});
