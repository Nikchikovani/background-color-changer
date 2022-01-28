var btn = document.querySelector('#btn');
var value = document.querySelector('#value');
var body = document.querySelector('body');
var title = document.querySelector('.title');
var usercolor = document.querySelector('#usercolor')
function background() {
    var r = Math.round(Math.random()*255)
    var g = Math.round(Math.random()*255)
    var b = Math.round(Math.random()*255)
    return `rgb(${r},${g},${b})`
}
btn.addEventListener('click', function(){
    var color = body.style.background = background();
    value.innerHTML = background(); 
    btn.style.border = `3px solid ${background()}`;
    btn.style.color= background();
    title.style.color = background();
    value.style.color = background();
})
console.log("creater : NCH")






