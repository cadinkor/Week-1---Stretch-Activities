let arr = ["gists", "types", "operators", "iteration", "problem solving"];

function joinList(arr) {
  let string = "";
  for (let item of arr) {
    if (arr.indexOf(item) === 0) {
      string += `${item}`
    } else {
      string += `, ${item}`
    }
  }
  return string
}

console.log(joinList(arr))
