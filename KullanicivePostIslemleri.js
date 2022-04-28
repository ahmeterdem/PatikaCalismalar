import axios from "axios";


export const kullaniciVerileriGetir=  (async (userid )=>{

    return new Promise(async(response,reject)=>{ 
 const {status:userServiceStatus,data:userData} =await axios("https://jsonplaceholder.typicode.com/users/"+userid);
if(userServiceStatus===200){
    
    const {status:postStatus, data:postData} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+userid);

    //console.log("user:", userData);
    if(postStatus===200)
    {
        userData['posts']= postData;

        //console.log("user and posts:", userData);

        response(userData);
    }
    else  {
       // console.log("Post verisi getirilemedi.");
        reject("Post verisi getirilemedi.");
    }

}
else{
    //console.log("User bilgisi getirilemedi.");
    reject("User verisi getirilemedi.");
}

    });
});

kullaniciVerileriGetir(1).then((data)=>console.log(data)).catch((e)=>console.log(e));