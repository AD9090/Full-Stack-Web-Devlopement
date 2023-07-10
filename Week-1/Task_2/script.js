let a=prompt("Enter Number : ")
a=parseInt(a)

let b=prompt("Enter Another Number : ")
b=parseInt(b)

function print(a,b){
  
  document.write("Sum : "+ ( (a)+(b)) +"<br>")
  document.write("Diff : "+ (a-b)+"<br>")
  document.write("Mul : "+ (a*b)+"<br>")
  document.write("Div : "+ (a/b)+"<br>")
  
}
print(a,b)