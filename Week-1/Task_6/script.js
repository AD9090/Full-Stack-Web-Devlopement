  function f1(){
    let a=10
  }
  console.log(a)
  // Can't Access outside Function beacuse its scope is within f1 function
  
  f2 = () => {
    let b=20
  } // Act like Global Function
  console.log("Value is : " + b+"<br>")
  // Can't Access outside Function beacuse its scope is within f2 function