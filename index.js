class Queue{
    constructor(){
         this.item = [];
    }
    enqueue(ele){
        return this.item.push(ele)
    }
    dequeue(){
        if(this.item > 0){
            return  this.item.shift()
        }
    }
    front(){
        return this.item[0]
    }
    size(){
        return this.item.length;
    }
    
}

let myqueue = new Queue();

let form = document.querySelector(".form")
let btn = document.querySelector(".btn")
let input = document.querySelector(".trans")
let bal = document.querySelector(".avail-btn")
let availbal = document.querySelector(".avail")
let viewbtn = document.querySelector(".view-tran")
let list = document.querySelector(".list")
let error = document.querySelector(".error")

let currentamount = 50000;

// Take input 
input.addEventListener("change",()=>{
    let value = Number(input.value)
    myqueue.enqueue(value)
    currentamount -= value
    input.value = "" 
   
})
console.log(myqueue)

bal.addEventListener("click",()=>{
    availbal.innerText = `${currentamount} rupees`
})
viewbtn.addEventListener("click",()=>{
    while(myqueue.size() > 0){
        let li = document.createElement("li")
        let each = myqueue.dequeue()
        li.innerText = `debited amount is ${each}`
        li.style.fontSize = "20px"
        li.style.marginBottom = "12px"
        li.style.fontWeight = "600"
        list.append(li)
    }



})









