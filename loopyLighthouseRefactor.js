
let start = 100;
let end = 200;

for (let i = start; i < end + 1; i++) {
  if ((i % 3 === 0) && (i % 4 === 0)) {
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0) {
    console.log("Loopy");
  } else {
    console.log("Lighthouse");
  }
}