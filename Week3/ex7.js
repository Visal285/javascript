const arr=[1 ,2 ,3];
const newarr=[0,...arr,4,5];
const [first,second,...rest]= newarr;

console.log(newarr);
console.log("First=", first);
console.log("Second=", second);
console.log("Rest=", rest);