var restart =document.querySelector("#b");
var sqr = document.querySelectorAll('td');
function clearBoard() {
  for (var i = 0; i < sqr.length; i++) {
   sqr[i].textContent='';
  }

}
restart.addEventListener('click',clearBoard);
function changemr(){
  if (this.textContent===' ') {
    this.textContent = 'X';


  }
  else if (this.textContent ==='X') {
    this.textContent='O';

  }
  else {
    this.textContent=' ';
  }
}
for (var i = 0; i < sqr.length; i++) {
sqr[i].addEventListener('click',changemr);
}
