let a = [10000, 5000, 40000, 2000, 7700000, 30000]

function max(a) {
  let mx = 0;
  for (let arg of a) {
    if (arg > mx) {
      mx = arg
    }
  }
  document.write("Maximum Salary is " + mx +"<br>");
}

function min(a) {
  let mn = a[0]
  for (let arg of a) {
    if (arg < mn) {
      mn = arg
    }
  }
  document.write("Minimum Salary is : " + mn+"<br>");
}

max(a);
min(a);