const person = {name: 'Jack William', age: 17, job:'Facebooker', gfName: 'Emmma Watson', address: 'Kochu Khet', phone: '01717112211', friends:['Tom hancks', 'Tom Cruise', 'Tom Yarn']};

const { phone, gfName, address } = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'Kola Bagan',
        leader: 'Tiger Leader'
    }
}

const {leader} = complexObject.info;
console.log(leader);
// const gfName = person.gfName;
// const phone = persone.phone;

// console.log(gfName, phone, address);
// console.log(gfName, phone, address);

const friends = ['Sakib Khan', 'Amir Khan', 'Arman Khan', 'Salman Khan', 'Shahrukh Khan'];
const [first, second, ...rest] = friends;
console.log(rest);