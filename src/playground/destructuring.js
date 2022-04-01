console.log("ds");

const person = {

    age: 31,
    location: {
        city: "Louisville",
        temp: 101
    }
};

const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}`);


const { city, temp: temperature} = person.location;

console.log(`it's ${temperature} in ${city}`)


const book = {
    title: "Ego",
    author: 'Joseph Enderle',
    publisher: {
        name: "Wiley"
    }
};

const { name: publisherName = 'self-published' } = book.publisher;

console.log(publisherName);

//Array Destructuring

const address = ['1299 S. Juniper Street', "Louisville", 'KY', "40217"];

const [street, location, state, zip] = address;

console.log(`You are in ${city} ${state} ${street}`)

const item = ["coffee (hot)", '$2', '$3', '$5'];

const [coffee,,price] = item;

console.log(`a medium ${coffee} costs ${price}`)
