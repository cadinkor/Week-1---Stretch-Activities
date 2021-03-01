const students = [
  { id: 1, name: "bruce",    age: 40 }, 
  { id: 2, name: "zoidberg", age: 22 }, 
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

const sort = students.sort((a, b) =>
  a.name > b.name ? 1 : b.age > a.age ? -1 : 0
);

// let sort = students.sort(function (a,b){
//   return a.name > b.name ? 1 : b.age > a.age ? -1 : 0 
// });

console.log(sort)

// Write a sorting function (sometimes called a custom comparator), that sorts the above array 
// first by the name ascending alphabetically, and in cases where the names are equal sort by 
// descending age.


//https://www.youtube.com/watch?v=BbuLjEqFlw0&ab_channel=dcode
//-a and b are the objects that are being compared against one another to sort appropriately 
//-1 value = a will be before b 
//+1 value = b will be before a 
