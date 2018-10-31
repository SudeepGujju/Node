var readline = require('readline');

var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
/* 
rl.question('Enter a number to get its factorial ',(fact)=>{

    var vTemp = 1;
    while(fact != 1 )
    {
        vTemp = vTemp*fact--;
        //fact--;
    }

    console.log( `The factorial of ${fact} is ${vTemp}`);
    //rl.close();
});
 */
/* 
var a = 0, b = 0, i = 0;
console.log('Enter two numbers');
rl.on("line",(inp)=>{

    if(i == 0){
        a = +inp;
        i++;
    }else{
        b = +inp;

        //console.log("Sum of two numbers is "+a+b); // O/P -> "Sum of two numbers is ab" - appending takes place
        console.log("Sum of two numbers is "+(a+b)); // O/P -> "Sum of two numbers is"+a+b
        rl.close();
    }
}); */



rl.question('Enter two numbers to add \nEnter first number ',(firNumber)=>{

    rl.question('Enter second number ',(secNumber)=>{

        console.log( Number(secNumber)+Number(firNumber));
       // rl.close();
    });

});

//rl.on("line",(inp)=>{console.log("line");});

rl.on("close",function(){

    console.log("closing");
});

rl.on("SIGINT",function(){
    console.log("Inter");rl.close();
});
