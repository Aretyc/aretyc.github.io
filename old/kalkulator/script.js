var z=0;
var y=0;
var tab = new Array(2);
tab[0]=0;                                     // liczba pierwsza z inputa 1 
tab[1]=0;                                     // liczba druga  z inputa 2
var licznik=0;
var linput=0;
var procent = false;

function main(kontener,a)
{
    znak(a);
    tab[3]=a;                                 // pod indeksem 3 jest przechowywana informacja o wykonywaniej operacji arytmetycznej 
    if(kontener!=null){add(kontener);}        // wywołuje funkcje dodającą kontener 
    var z=document.getElementById('rowne');   // zmienia kolor przycisku równe 
    z.style.backgroundColor='rgb(131, 47, 37)';
    if (kontener==null&&linput==1){
        del();
    }

}


function wynik()                       // wynik 
{
    console.log(linput);
var w=0;
var u;
var d= null;
var e= 0;
u=document.getElementById("blad");     // przypisuje elementy do zmiennych 
w=document.getElementById("inp0");     //  

if(linput>0)
{
d=document.getElementById("inp1")      //
;
}

var c=Number(w.value);                 // zminenna przechowuje wartosc liczby pierszej z formularza 1 
if(linput>0)
{
 e=Number(d.value);                 // zminenna przechowuje wartosc liczby pierszej z formularza 2 
}
w.style.boxShadow="";
w.style.backgroundColor='';
w.style.border= "";            // usuwa zaznaczenie błędu 
u.style.display='none'
if(linput>0)
{
d.style.boxShadow="";
d.style.backgroundColor='';
d.style.border= ""           //
}
w.style.order='1';

                     
    if(blad(c,e,u,w,d)==true)            // sprzwdza czy padane wartosci są poprawne 
   {
    
    if(procent==true)
    {
       e=(c*e)/100 
    }
switch(tab[3])                          // wywołuje funkcje odpowiedzialna za daną operacje arytmetyczną   
    {
        case '-' :
        odejmowanie(c,e);
        break;
        case '+' :
        dodawanie(c,e);
        break;
        case '/' :
        dzielenie(c,e);
        break;
        case '*' :
        mnozenie(c,e);
        break;
        case 'pierwiastek':
        {
        console.log(tab[3]);
        pierwiastek(c,w,d,u);
        break;
        }
    }

    w.value=tab[0];     // wypisuje wynik w inpucie pierwszym 
   if(linput>0)
{
    d.value='';         // usuwa wartosć inputa drugiego 
    del();
   
    
}
znak('');
}
}

function wczytaj(a)    // wczytuje znaki 
{
var h=0;
 h = document.getElementById("inp"+y).value;
  tab[z]=h+''+a;
   wypisz();
}


function wypisz() // wypisuje 
{
    var w=0;
    w=document.getElementById("inp"+y);
    w.value=tab[z];
}

function przecinek() // wstawia przecinek do ciągu liczb 
{
    if(licznik==0) {tab[z]=tab[z]+","; licznik++;}
       wypisz();
}


function add(kontener)             // dodaje nowy element typu input na stronie 
{
    if(linput<1)
    {
        if(z==0){z=1}else{z=0}
        y=++linput;
        var znacznik = document.createElement('input');
        znacznik.setAttribute('type', 'text');
        znacznik.setAttribute('name', 'plik'+linput);
        znacznik.setAttribute('value', '0');
        znacznik.setAttribute('onclick', 'activ(1)');
        znacznik.id='inp'+linput;
        var kontener = document.getElementById(kontener);
        kontener.appendChild(znacznik);
        document.form1.plik1.focus();
    }
    
}
function del()  // usuwa input 2 
{
var d=document.getElementById('inp1').remove();  
linput=0;
y=0;
document.form1.dzialanie.focus();
var z=document.getElementById('rowne');   // zmienia kolor przycisku równe 
z.style.backgroundColor='rgba(131, 47, 37, 0)';
}

function znak(a)      // wyświetla znak operacji na stronie 
{
var inner = document.getElementById('znak');
if(a=='pierwiastek'){a='&#8730';}
    inner.innerHTML=a;
}

function activ(a)    // pobiera informację o aktywnym input 
{
    z=a;
    y=a;

}

function blad(c,e,u,w,d)
{

    if(isNaN(c)||isNaN(e))            // sprzwdza czy padane wartosci są poprawne 
    {
        u.style.display="block"         
        if(isNaN(c))
        {
            w.style.boxShadow="0 0 10px red";
            w.style.backgroundColor='rgb(230, 164, 159)';
            w.style.border= "2px solid red";
          
        }   
        if(isNaN(e))
    {
        w.style.order='-1';
        if(linput>0)
        {
        d.style.boxShadow="0 0 10px red";
        d.style.backgroundColor='rgb(230, 164, 159)';
        d.style.border= "2px solid red";
        }
    }  
        tab[0]='';                  // usuwa liczby 
        tab[1]='';
        w.value='';                 // usuwa wartości formularza 
       if(linput>0)
        {
        d.value=''; 
        }

    }
    else{
        return true;
}

}


function dodawanie(c,e)     // wykonuje operację dodawania 
{
   tab[0]= c;
   tab[1]= e;
   tab[0] = tab[0]+tab[1]
   tab[1]='';

}

function odejmowanie(c,e)   // wykonuje operację odejmowania
{
   tab[0]= c;
   tab[1]= e;
   tab[0] = tab[0]-tab[1]
   tab[1]='';
}

function dzielenie(c,e) // wykonuje operację dzielenia  
{
  
   tab[0]= c;
   tab[1]= e;
   tab[0] = tab[0]/tab[1]
   if(c==0||e==0)
   {
       tab[0]=0;
   }
   tab[1]='';  
}
function mnozenie(c,e)   // wykonuje operację mnozenia 
{
   tab[0]= c;
   tab[1]= e;
   tab[0] = tab[0]*tab[1]
   tab[1]='';
}
function pierwiastek(c,w,d,u)     // pierwiastkuje 
{
  tab[1]='';
if(c<0)
{  
    blad('blad',0,u,w,d);
}
else
{
    tab[0]=Math.sqrt(c);
}
} 
function procenty(dp)
{
     dp = document.getElementById("procenta");
     var inp=document.getElementById("inp1"); 
    if(procent==false&&linput==1)
    {
      dp.style.backgroundColor="green"; 
      procent=true; 
      console.log(procent);
      inp.style.backgroundColor="#cbeccb";
      inp.style.border="3px solid green"; 
      inp.style.boxShadow="0px 0px 10px green";
    }
    else{
        procent=false;
        dp.style.backgroundColor="rgba(131, 47, 37, 0)";  
       inp.style.backgroundColor="";
       inp.style.border=""; 
       inp.style.boxShadow="";
    }
} 

