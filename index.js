import slugify from "slugify";
import varsayilan, {hello2, hellobos,topla,cikar, carp,PROGRAM_ADI,user,users} from "./my-module.js";
import {dovizCevir} from "./DovizKurlariWebServis.js"

console.log("Bismillahirrahamanirrahim.");

const title=slugify("some string","*");

console.log(title);


console.log(topla(2,4));
console.log(cikar(4,1));
console.log(carp(2,4));

hello2("Mehmet");

console.log(PROGRAM_ADI);

console.log(user);
console.log(user.name+ " "+ user.surname);

console.log(users);

varsayilan('Ragıp');


// deöviz çevir
console.log("Döviz çevir:");
let sonuc= await dovizCevir(10.0,"USD");
console.log(sonuc);
console.log("Döviz çevir sonra");