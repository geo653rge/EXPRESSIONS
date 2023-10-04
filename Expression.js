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