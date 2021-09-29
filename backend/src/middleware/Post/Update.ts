/**
*  import modules
*/
import User from "../../model/User";
import Post from "../../model/Post";

/**
  * 
  * Middleware Post Update
  * Middle to update Post
  * 
  */

export default async (req, res, next) => {
  const { id } = req.fields;
    
  if(!id)
  return res.status(400).send({status:"error", message:"id is required", data:{}});
  
  if(req.fields.u){
    const resultPost:any = await Post.count({ where: { u: req.fields.u }});
            
    if(resultPost !== 0)
    return res.status(400).send({status:"error", message:"u id not found!", data:{}});
  }

    next();
}