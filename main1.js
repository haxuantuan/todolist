var list=document.querySelector(".list")
var btn=document.querySelector('.btn')
var input=document.querySelector('.input')
var form=document.querySelector('form')
var ul=document.querySelector('ul')
var ds=[]
form.onsubmit=function(e){
    e.preventDefault();
    let val=input.value.trim()
    ds.push(val)
    input.value=''
    show()
    luu()
}
function show(){
    ul.innerHTML=''
   for(let i=0;i<ds.length;i++){
       let app=ds[i]
       ul.innerHTML+=`
       <li>
                <span onclick="completed(${i})">${app}</span>
                <i onclick="xoa(${i},1)" class="fas fa-trash"></i>
            </li>`
   }
}
function luu(){
    let todoLi=document.querySelectorAll('li')
    let todostoge=[]
    todoLi.forEach(function(item){
        let text= item.querySelector('span').innerText
        todostoge.push(
              text
        )
    })
    localStorage.setItem('todolist',JSON.stringify(todostoge))
    //localStorage.removeItem('todolist')
}
function init(){
    let data=JSON.parse(localStorage.getItem('todolist'))
 console.log(data)
  if(data!=null) {
    ds=ds.concat(data)
    show()}
}
init()
function xoa(i,n){
    ds.splice(i,n);
    show();
    luu();
}
function completed(i){
    let todolis=document.querySelectorAll('li')
    todolis[i].classList.toggle('completed')
}
let todolis=document.querySelectorAll('li')
    console.log(todolis[0])