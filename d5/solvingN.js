function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
factorialize(5);


// https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/