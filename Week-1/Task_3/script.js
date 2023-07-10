let age=prompt("Enter Your Age : ")
display(age);

function display(age){
  if(age<18){
    document.write("You are a minor.")
  }
  else if(age<65){
    document.write("You are an adult.")
  }
  else{
    document.write("You are a senior citizen.")
  }
}