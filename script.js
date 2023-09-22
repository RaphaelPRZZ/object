"use scrict"

/*OBJECT

declarer object student avec me, fav food, city
Recuperer le nombre de caracteres dans chaues proprieter puis les additionner pour obtenir un nombre 
 
 * Si le nombre pair afficher dans la console "pair"
 * Si le nombre est impair afficher dans la console "impaire"
 * 
 * Plusieurs solutions possibles 
 * Object.keys()=> recuperer les proprieter=s un stunada
 * Object.values() => recuperer les valeurs
 * 
 */
//Premiere exemple 
 let student={
    name:'Nicolas',
    favoriteFood:"Salad",
    city:"Paris",
}
let values=Object.values(student);
console.log(values);
let result=0;
values.forEach((values)=> {
     result+=values.length
})
