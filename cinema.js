let recette = 0;
let billetsmoins16 = 0;
let billetsaumoins16 = 0;
let prixbilletsmoins16= 1500;
let prixbilletsaumoins16=2500 ;
for ( let age = 11; age <= 20; age++ ){
    if(age<16){
        console.log(`la personne de ${age} ans a un billet qui coute ${prixbilletsmoins16} FCFA`);
    }else {
        console.log(`la personne de ${age} ans a un billlet qui coute ${prixbilletsaumoins16} FCFA`); 
    }   
}