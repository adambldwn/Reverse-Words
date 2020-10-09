const input = document.querySelector('#text');
const button = document.querySelector('#button');
const result = document.querySelector('#result-text');

button.addEventListener('click', reverse);

input.addEventListener('keyup', function enter(e){
    if(e.keyCode ===13){
        reverse();
    }
})

function reverse(){

    if(input.value == ""){
        result.innerText= "Please write a sentence";
    }
    else{
        var sentence = input.value.split(" ").reverse().join(" ");
        result.innerText= sentence;

        input.value="";
        input.focus();
    }
    
}