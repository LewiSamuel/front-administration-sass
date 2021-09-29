/**
* Import modules
*/
import Post from "../../model/Post";

/**
* 
* Middleware Post Update One Field
* Middle to Update One Field Posts
* 
*/
export default async (req, res, next) => {
  const { id, value } = req.fields;
  const { field } = req.params;

  if(!id)
  return res.status(400).send({status:"error", message:"id is required", data:{}});

  if(!field)
  return res.status(400).send({status:"error", message:"field is required", data:{}});

  if(!value)
  return res.status(400).send({status:"error", message:"value is required", data:{}});
  
  
  if(req.fields.u){
    const resultPost:any = await Post.count({ where: { u: req.fields.u }});
            
    if(resultPost !== 0)
    return res.status(400).send({status:"error", message:"u id not found!", data:{}});
  }

  if(!Post.rawAttributes[field])
  return res.status(400).send({status:"error", message:"Attribute '" + field + "' dont exist in 'Post'", data:{}});

  /**
  * build object to query
  */
  let aux = {}
  aux[req.params.field] = req.fields.value;  
  req.fields.updateField = aux;

  next();
}