function processGrade(grade){

 
 if (grade >70){
     console.log("Your new grade is :" +grade +'Grade is Overkill');
 }
 else{
     if (grade <= 100){
          console.log("Your new grade is :" +grade +' There is no grade like that');
     }
     else if('INC'){
         console.log("Your grade is incomplete")
     }
     else if('DROP'){
         console.log("You have dropped your subject")
     }
 }

 
 
 
  if (grade < 75){
    if(grade % 2){  //odd
    console.log("Your new grade is :" + (grade -3 ));
    }
    else {
      console.log("Your new grade is :" + (grade -2 ));   
    }
  }else{

 if(grade % 2){  //odd
    console.log("Your new grade is :" + (grade + 5 ));
    }
    else {
      console.log("Your new grade is :" + (grade + 3));   
    }

  }
}

module.exports = {
    processTheGrade:processGrade
}