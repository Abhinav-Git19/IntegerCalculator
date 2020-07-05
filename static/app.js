//Ref: https://healeycodes.com/javascript/python/beginners/webdev/2019/04/11/talking-between-languages.html
//Ref: https://stackoverflow.com/questions/34602395/how-to-use-fade-in-text-image-on-page-is-loaded/34602576#34602576


function pageLoaded() {
    document.querySelector("body").style.opacity = 1;
}
window.onload = pageLoaded;

function myFunction(){
    expr=document.getElementById("expr").value;
    console.log(expr);

    fetch('http://127.0.0.1:5000/evaluate',{
        method:"POST",
        mode:"cors",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({"id":5,"expr":expr})
    }).then( response => {
        console.log('Script Ran!!')
        console.log(response);
        return response.json();
    }).then(data =>{
        console.log(data);
        render(data.result)
    })
    
}

function render(result){
    section=`<div class="card">
    ${result}
    </div>`

    
    document.getElementById("app-result").innerHTML = section;
    document.querySelector(".card").style.opacity = 0;
    setTimeout( ()=>{
        document.querySelector(".card").style.opacity = 1;
    },500);
    
    
}

/* This Node.js way of talking with the python script/
const { spawn } = require('child_process');
function mycalci(expr){
    const evalute=spawn('python3',['calc_backend.py',expr]);
    evalute.stdout.on('data',function(data){
        exprResult=parseInt(data); 
        render(exprResult);
    });
}
*/

