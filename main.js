

let Mypage=document.querySelector('html');   /*appeler la page html*/
let storednumber;                  /*déclarer un nombre*/

const nombreetage =() =>                                  /* fonction qui demande au visiteur le nombre d etage*/ 
{let nombresaisi=prompt('veuillez donner le nombre d etage du pyramide');  
  localStorage.setItem('N',nombresaisi) ;}

  


                                                    
do
{
    nombreetage();                                         
    storednumber=localStorage.getItem('N');               /*repetition de la demande si nombre d étage > 25*/ 
    
}while (storednumber > 25);


console.log(storednumber);          /*afficher le nombre d'étage saisi*/ 


const pyramid = n =>                  /*fonction qui construit le pyramide et l'affiche*/ 

{
    for (let i =1; i<=n; i++) {
        let string= '';
     
        for (let j =1; j<=2*n-1; j++) { 

         if (j >= n-i+1 && j <= n+i-1) {string += '#';} else {string += ' ';}}
    
        
        console.log(string);  
    } 

 
}

pyramid (storednumber);              /*appel de la fonction pyramid*/ 







