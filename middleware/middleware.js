const axios = require('axios');
const golobals =require('node-global-storage')
class middleware{
    bkash_auth=async(req,res,next)=>{
        golobals.unsetValue('id_token');
        try{
            const {data}= await axios.post(process.env.bkash_grant_token_url,{
                app_key: process.env.bkash_api_key,
                app_secret: process.env.bkash_secret_key
            },{
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    username: process.env.bkash_username,
                    password: process.env.bkash_password
                }
            })
            // console.log("grant token route",process.env.bkash_grant_token_url)
            console.log("grant token ",data);

        }
        catch(error){
            console.log("Error from middleware", error)
        }
    }
}
module.exports=new middleware;