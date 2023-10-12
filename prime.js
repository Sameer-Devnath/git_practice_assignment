function identifyPrime(num) {
    let factor=0;
    for(i=1;i<=num;i++){
        if(num%i===0){
            factor+=1;
        }
    }
    
    if(factor===2){
        console.log("Yes");
    }    
    else{
        console.log("No");
    }
    
}

identifyPrime(13);