
// to implement toggle mechanist to show and not show the links 
// step-1 click on the toggle 
// step-2 now we have 2 classes links and show- links 
// step-3 app is to change the links to show-links and vice versa on every click 
// since show-links is at height 10rm and links is at height - 0 
// so on click of toggle the height of list of links (home , about ,contact etc) will change its place
// hence the toggle personality 


// classList - show/gets all classes 
// contains - checks classList for specific class 
// add - add class 
// remove - remove class 
// toggle - toggles class 
const  navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click' , function(){
    console.log('Toggle button is clicked')
   // console.log(links.classList.contains('links'))
   // console.log(links.classList.contains('show-links'))
  if(links.classList.contains('show-links')){
    links.classList.remove('show-links');
   }else{
    links.classList.add('show-links');
   }
  
 /* instead of whole if-else statement a simple toggle statement can be used which on every click simply toggles and changes links to show-links vice versa 
   links.classList.toggle('show-links');
   */
});



  