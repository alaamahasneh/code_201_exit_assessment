
document.getElementById('click').addEventListener('click',function (event) {
    
    event.preventDefault();
    var input=document.getElementById('name');
    localStorage.getItem(input);
    var hEl= document.getElementById('h1');
    var pEl= document.createElement('p');
    hEl.appendChild(pEl);
   var result= localStorage.setItem(hEl);
    pEl.textContent= result;
});



