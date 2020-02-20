
let Mypage=document.querySelector('html');
let storednumber;

const nombreetage =() => 
{let nombresaisi=prompt('veuillez donner le nombre d etage du pyramide');  
  localStorage.setItem('N',nombresaisi) ;}

  nombreetage();


                                                    
do
{
    nombreetage();
    storednumber=localStorage.getItem('N');
    
}while (storednumber > 25);

console.log(storednumber);

let pyramide= n => {
for(let i=0;i<n;i++)
{for (let j=1;j<=2*n-1;j++)
  {if((j<=n+i)&&(j>=n-i))
  {console.log('#');}
  else {console.log('');}

  }}}

  pyramide(storednumber);




