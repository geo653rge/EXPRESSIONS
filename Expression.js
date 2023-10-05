function*func() {
yield 1;
yield 2;
yield 3
yield " Geeks ";

}

let obj ='';

for (const i of func()) {
obj = obj += i ;


}

//output

console.log(obj) ;
// implicit Binding - this keyword


const person = {
name: 'George',
age: 27,
display: function() {
    return 'Jina langu ni ' + this.name + ' na nina miaka '+ this.age + ' .';
}
}
console.log(person.display());

function ageVerify(){
if(this.age > 18){
    console.log (' You are eligible to vote');
} else{
    console.log( ' You are not eligible to vote');
    }
}
const person1 ={age: 24};
const person2 ={age: 16};
// const person3 = {age: 17};
// const person4 ={age: 18};
ageVerify.call(person1);
ageVerify.call(person2);
// ageVerify.call(person3);
// ageVerify.call(person4);


//Default Binding

const age = 22
function ageVerify(){
    return this.age;

}

console.log(ageVerify());