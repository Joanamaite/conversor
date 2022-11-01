let btns = document.querySelectorAll("button");
let cels = document.querySelector("#cels");


let fa = document.querySelector("#fa");
let ke = document.querySelector("#ke");
let ra = document.querySelector("#ra");
let temperatura;

btns.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        temperatura = e.target.innerHTML;

        if(temperatura == "Celsius"){
           let ccel = parseFloat(cels.value);

           let fahre = ((ccel*9/5)+32).toFixed(1);
           let kelvin = (ccel+273.15).toFixed(1);
           let rand = (((ccel + 273.15)*9)/5).toFixed(1);
           
           fa.placeholder = (fahre);
           ke.placeholder = (kelvin);
           ra.placeholder = (rand);
        }else if(temperatura == "Fahrenheit"){
            let cfa = parseFloat(fa.value);
 
            let celsius = ((cfa-32)*5/9).toFixed(1);
            let kelvin = (((cfa-32)*5/9)+273.15).toFixed(1);
            let rand = (cfa+459).toFixed(1);
 
            cels.placeholder = (celsius);
            ke.placeholder = (kelvin);
            ra.placeholder = (rand);
         }else if(temperatura == "Kelvin") {
            let cke = parseFloat(ke.value);
 
            let celsius = (cke-273.15).toFixed(1);
            let fahre = ((cke-273.15)*9/5+32).toFixed(1);
            let rand = (cke*1.8).toFixed(1);
 
            cels.placeholder = (celsius);
            fa.placeholder = (fahre);
            ra.placeholder = (rand);
         }else if(temperatura == "Rankine") {
            let cra = parseFloat(ra.value);
 
            let celsius = ((cra-491.67)*5/9).toFixed(1);
            let fahre = (cra-459.67).toFixed(1);
            let kelvin = (cra*5/9).toFixed(1);
 
            cels.placeholder = (celsius);
            fa.placeholder = (fahre);
            ke.placeholder = (kelvin);
         }else if(temperatura == "Limpar"){
            cels.placeholder = "";
            fa.placeholder = "";
            ke.placeholder = "";
            ra.placeholder = "";
         }

    })
})
