let recette = 0;
let billetsEnfant = 0;
let billetsAdulte = 0;

for ( let age = 11; age <= 20; age++ ) 
{let prix ;

    if( age < 16) 
    { 
    prix = 1500; 
    billetsEnfant++;
    }
    else
    {
    prix = 2500; 
    billetsAdulte++;
    }
recette=recette + prix;
console.log("recette totale : " + recette + " fcfa " );
}
console.log("billets à 1500 fcfa : "  + billetsEnfant);
console.log(" Billets à 2500 fcfa : " + billetsAdulte );




