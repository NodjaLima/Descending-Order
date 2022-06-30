var n = 452154646565

function descendingOrder(n){
  var a = n.toString().split("").map(numero => parseInt(numero)).sort((a,b) => b-a)
  var b = []
  for (i=0; i < a.length; i++) {
    b = `${b}${a[i]}`
  }
 
 console.log(parseInt(b));
}

descendingOrder(n)
