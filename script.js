console.log("hello world");
let string = "";
let numbButtons = document.getElementsByClassName('box');
let displayBar = document.getElementById('display');
let resetBtn = document.querySelector('button');

resetBtn.addEventListener('click',()=>{
    string = "";
    displayBar.innerHTML="";
})
Array.from(numbButtons).forEach((element)=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e)=>{
        console.log(boxtext.innerHTML);
        if(boxtext.innerHTML === '=')
        {
            try {
                string = eval(string)
                displayBar.innerHTML = string;
                
            } catch (error) {
                displayBar.innerHTML = "Error";
                string = "";
            }
            ;
            
            console.log(string);
        }
        else
        {
            string += boxtext.innerHTML;
            displayBar.innerHTML = string;
            console.log(string);
        }
        // displayBar.innerHTML += boxtext.innerHTML;
    })
})