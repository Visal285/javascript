const person = {
    name: 'Bob',
    address : {
        city: 'Pnom Penh',
        zip: '12345',
    }
};
const {name,...rest} = person;
console.log(rest);