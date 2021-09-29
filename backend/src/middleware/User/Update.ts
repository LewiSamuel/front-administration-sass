/**
*  import modules
*/
import User from "../../model/User";

import bcrypt from "bcrypt";

/**
  * 
  * Middleware User Update
  * Middle to update User
  * 
  */

export default async (req, res, next) => {
  const { id } = req.fields;
    
  if(!id)
  return res.status(400).send({status:"error", message:"id is required", data:{}});
  

    // criptography password
    if(req.fields.Password)
    req.fields.Password = await bcrypt.hash(req.fields.Password, 3);
    
    next();
}