const raisinAlarm = function(cookies) {
  let result = "All good"
  for(let i = 0; i < cookies.length; i++){
    if (cookies[i] === "🍇"){
      return "Raisin Alert"
    // } else if (cookies[i] === "🍫"){
    //   return "All good!"
    }
  }return result;
}

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
console.log(raisinAlarm(["🍇", "🍫", "🍫"]));

