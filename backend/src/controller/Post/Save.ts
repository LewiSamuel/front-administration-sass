/**
* Import modules
*/
import Post from "../../model/Post";
export default async (req, res) => { 
 
// save
await Post.create( req.fields ).then( async (result:any) => {
    if(result){
        return res.send({status:"success", message:"POST SAVE", data: result });
    }else
    return res.send({status:"error", message:"POST SAVE", data: result});
}).catch(err => {
    return res.send({status:"error", message:"POST SAVE", data: err});
});

}