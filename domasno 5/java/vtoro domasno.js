let ime=["Kristijan" , "Jana" , "Stefan" , "Toma"];
let prezime = ["Adziovski" , "Stojanovski" , "Stefanovski", "Nikolovski"];

function treta (){
    let i=0,listNum=1;
    for( i=0;i<ime.length;i++)
    {
        if(ime[i]!==null){
            console.log(`${listNum}.${ime[i]}`);
            listNum++;
        }
    }
    
     
}

function cetvrta(){
    let j=0,listNum=1;
    for(j=0;j<prezime.length;j++){
         if(prezime[j]!==null){
             console.log(`${prezime[j]}`);
             listNum++;
         }
     }
}
treta()
cetvrta()

