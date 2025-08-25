let students =[
    
{ name: "Alice", score: 85 },
{ name: "Bob", score: 92 },
{ name: "Charlie", score: 78 }
];
let result = students.map(function(student) {
  return student.name + ": " + (student.score >= 80 ? "Pass" : "Fail");
});
console.log(result);

