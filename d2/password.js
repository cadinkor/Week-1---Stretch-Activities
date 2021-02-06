let pwd = process.argv[2];
console.log(process.argv[2])

function obfuscate(str) {
  let result = "";

  for (let i = 0; i < str.length; i++){
    if (str[i] == "a"){
      result += "4";
    } else if (str[i] == "e"){
      result += "3";
    } else if (str[i] == "o"){
      result += "0";
    } else if (str[i] == "al"){
      result += "1";
    } else {
      result += str[i]
    }
  }
  return result;
}

console.log(obfuscate(pwd))