

let Mypage=document.querySelector('html');
let storednumber;

const nombreetage =() => 
{let nombresaisi=prompt('veuillez donner le nombre d etage du pyramide');  
  localStorage.setItem('N',nombresaisi) ;}

  


                                                    
do
{
    nombreetage();
    storednumber=localStorage.getItem('N');
    
}while (storednumber > 25);

console.log(storednumber);


const pyramid = n =>

{
    for (let i =1; i<=n; i++) {
        let string= '';
     
        for (let j =1; j<=2*n-1; j++) {
        if(j>=n-i+1 && j<= n+i-1) {string += '#';}
        else {string+= ' ';}}
        
        console.log(string);  
    } 

 
}



pyramid (storednumber);







