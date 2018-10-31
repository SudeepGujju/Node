var fs = require('fs');

fs.readdir("../",(err,list)=>{

    if(err)
    {
        console.log(err);
        throw err;
    }

    console.log(list);
});

var vFoldersList = fs.readdirSync("../");
console.log(vFoldersList);
/*
fs.link("./Dummy.txt","./New.txt",(err)=>{

    if(err)
    {
        console.log(err);
        throw err;
    }
});


fs.unlink("./Dummy.txt",(err)=>{

    if(err)
    {
        console.log(err);
        throw err;
    }
});
*/
let cfsWatch = fs.watch("./WatcherFolder",{'persistent':true,'recursive':true},(event,filename)=>{

    console.log(event);

    //fs.open();
    //console.log(`Modified file name ${filename}`);

});//File watcher will be obj will be returned
/*
cfsWatch.on("change",function(){
    console.log(arguments);
});
*/

//console.log(cfsWatch);