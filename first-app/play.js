const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

const printName = ({name}) => {
    console.log(name);
};

const {name, age} = person;
console.log(name, age);

// const copiedPerson = {...person};
// console.log(copiedPerson);
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);a
// // console.log(hobbies.map(hobby => {
// //     return 'Hobby: ' + hobby;
// // }));

// // console.log(hobbies)
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// // const toArray = (arg1, arg2, arg3) => {
// // return [arg1, arg2, arg3];
// // };
// const toArray = (...args) => {
//     return args;
// };

// console.log(toArray(1, 2, 3));