function calculate() {
  let firstnum = document.getElementById("first").value
  let secondnum = document.getElementById("second").value
  let test = document.getElementById("inputGroupSelect04").value

  if (test === "+") {
    let answer = parseInt(firstnum) + parseInt(secondnum)
    document.getElementById("answer").innerText = answer
    if (document.getElementById("answer").innerText === "NaN") {
      document.getElementById("answer").innerText = "Something Went Wrong!"
    }
  }
  if (test === "-") {
    let answer = parseInt(firstnum) - parseInt(secondnum)
    document.getElementById("answer").innerText = answer
    if (document.getElementById("answer").innerText === "NaN") {
      document.getElementById("answer").innerText = "Something Went Wrong!"
    }
  }
  if (test === "*") {
    let answer = parseInt(firstnum) * parseInt(secondnum)
    document.getElementById("answer").innerText = answer
    if (document.getElementById("answer").innerText === "NaN") {
      document.getElementById("answer").innerText = "Something Went Wrong!"
    }
  }
  if (test === "/") {
    let answer = parseInt(firstnum) / parseInt(secondnum)
    document.getElementById("answer").innerText = answer
    if (document.getElementById("answer").innerText === "NaN") {
      document.getElementById("answer").innerText = "Something Went Wrong!"
    }
  }
}
