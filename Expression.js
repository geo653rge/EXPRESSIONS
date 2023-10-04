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