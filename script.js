function add7() {
    let num1 = document.getElementById("add7input").value;
    let result = Number(num1) + 7;
    document.getElementById("p1").innerHTML = `=${result}` ;
  }
  
  function multiply() {
    let mnum1 = document.getElementById("minput").value;
    let mnum2 = document.getElementById("minput1").value;
    let mresult = Number(mnum1) * Number(mnum2)
    document.getElementById("p2").innerHTML = `=${mresult}` ;
  }
  
  function capitalize() {
    let ctext1 = document.getElementById("cinput").value
    let cresult = ctext1.charAt(0).toUpperCase() + ctext1.slice(1).toLowerCase();
    document.getElementById("p3").innerHTML = `${cresult}`
  }
  
  function lastLetter() {
    let ltext1 = document.getElementById("linput").value
    let lresult = ltext1.slice(-1);
    document.getElementById("p4").innerHTML = `${lresult}`
  }
  