
var fs = require("fs");

var fsWatcher = fs.watch("./WatcherFolder",{persistent:true,recursive:true,encoding:'utf8'},(event,filename)=>{

    console.log(event,filename);// event -> rename | change

    fnLogChange(filename,new Date());

});//File watcher will be obj will be returned
/*
fsWatcher.on("change",function(){
    //console.log("changeing");
    //fsWatcher.close();
});
*/
setTimeout(function(){

  //console.log("closing file watcher");
  fsWatcher.close();

},10000);


/* Log */
function fnLogChange(vFileName,vDate){

    fs.open("./WatcherFolderLog.txt","a+",777,(err,fd)=>{

        if(err){
            console.log(err);
        }else{
            fs.write(fd,`${vFileName} - ${vDate} \n`,0,(err, bytesWritten, buffer)=>{
                console.log(err, bytesWritten, buffer);

                fs.close(fd,(err)=>{
                    if(err)console.log(err);
                });
            });
        }

    });

}//fnLogChange