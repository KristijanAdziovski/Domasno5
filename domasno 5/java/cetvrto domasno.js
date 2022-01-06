let broevi = [1,2,3,4,5,6,7,8,9,10,15,19,256,358];

function findNumber(array,type){
    for(let num of broevi){
        array=num;
        if(array%2==0){
            console.log(`Parni broevi se : ${array}`);
        }
        else{
            console.log(`Neparni broevi se : ${array}`);
        }
       
    }

}
findNumber()