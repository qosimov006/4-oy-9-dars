
//1-misol
//Savol : Berilgan massivning ichidan berilgan qiymat bor yoki yoqligini tekshiruvchi funksiya yozing
//Javob

/*
function qiymat(massiv, qidirilayotganQiymat) {
    for (let i = 0; i < massiv.length; i++) {
        if (massiv[i] === qidirilayotganQiymat) {
            return true; 
        }
    }
    
    return false;
}

let testMassiv = [1, 2, 3, 4, 5];
let testQiymat1 = 3;
let testQiymat2 = 6;

console.log(qiymat(testMassiv, testQiymat1)); 
console.log(qiymat(testMassiv, testQiymat2)); 
*/




//2-misol
/*
//Savol :  Quyidagi kabi obyektlardan tashkil topgan massiv berilganda
// uning ichidan berilgan qiymatlarga mos keluvhi funksiya yozing
// const products = [
//   { id: 1, name: 'Laptop', brand: 'Dell', price: 999.99 },
//   { id: 2, name: 'Smartphone', brand: 'Samsung', price: 699.99 },
//   { id: 3, name: 'Tablet', brand: 'Apple', price: 499.99 },
//   { id: 4, name: 'Desktop', brand: 'HP', price: 1199.99 },
// ];
*/
//Javob
/*

 const products = [
   { id: 1, name: 'Laptop', brand: 'Dell', price: 999.99 },
   { id: 2, name: 'Smartphone', brand: 'Samsung', price: 699.99 },
   { id: 3, name: 'Tablet', brand: 'Apple', price: 499.99 },
   { id: 4, name: 'Desktop', brand: 'HP', price: 1199.99 },
 ];


 function filterProducts (arr, key, value){
    let res = []
    res = arr.filter(  v => {
        return v[key]==value
    });
    return res;
 }
 console.log(filterProducts(products, 'price', 699.99));
 */





//3-misol
//Savol : Quyidagi kabi massiv berilganda uning ichidan
// yoshlarining o'rtachasini topuvchi funksiya yozing.
 /*
 function totalAge(Masala) {
    let totalAge2 = 0;
    for (let i = 0; i < Masala.length; i++) {
        totalAge2 += Masala[i].age;
    }   
    return totalAge2 / Masala.length;
}
const Masala = [
    { name: 'Alice', age: 22, grades: [85, 90, 92, 88] },
    { name: 'Bob', age: 20, grades: [78, 85, 80, 88] },
  { name: 'Charlie', age: 21, grades: [90, 92, 89, 94] },
 ];
console.log(totalAge(Masala));
*/


 //4-misol
 //Savol :Quyidagi kabi massivni priority boyicha saralab beradigan funksiya yozing.






