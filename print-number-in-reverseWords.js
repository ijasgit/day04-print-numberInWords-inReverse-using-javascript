var num,rem;
num=152;
while(num>0)
{
    rem=num%10;
    if(rem==1){
        console.log("one");
    }
        
    else if(rem==2){
        console.log("two");
       
    }
    else if(rem==3){
        console.log("three");
        
    }
    else  if(rem==4){
        console.log("four");
        
    }
    else if(rem==5){
        console.log("five");
        
    }
    else if(rem==6){
        console.log("six");
        
    }
    else  if(rem==7){
        console.log("seven");
        
    }
    else  if(rem==8){
        console.log("eight");
       
    }
    else  if(rem==9){
        console.log("nine");
        
    }
    else   if(rem==0){
        console.log("zero");
        break;
    }
    num=num-rem;
    num=num/10;
   
}
