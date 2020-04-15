

function calculate(){

	var amt = document.getElementById("amount").value;

   var numOfPeople = document.getElementById("people").value;
   var qa = document.getElementById("serviceQual").value;



   if (amt == "" || numOfPeople ==0 ){
   	alert ("pls enter value");
   	return ;

   }

   if (numOfPeople==0 || numOfPeople <0) {
   	numOfPeople = 1;
   }


   var total = (amt * qa)/numOfPeople ;
   total = total.toFixed(2);
document.getElementById("tip").innerHTML=total;

	
}

//calculate();