

   function final_result(){

let result = document.getElementById("userinput").value;

    let random = Math.floor( Math.random()*6)+1;

       document.getElementById("genrate_num").innerHTML=random;

       let total_try = document.getElementById("total_try")
     total_try = -1

if( result ==random){
        
    alert(`congratulation your guess is correct`)
    }else{
    alert("plz try again")
}
   }
   
   






