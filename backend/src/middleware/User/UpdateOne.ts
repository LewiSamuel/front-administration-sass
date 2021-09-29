/**
* Import modules
*/
import User from "../../model/User";

/**
* 
* Middleware User Update One Field
* Middle to Update One Field Users
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
  
  
  if(!User.rawAttributes[field])
  return res.status(400).send({status:"error", message:"Attribute '" + field + "' dont exist in 'User'", data:{}});

  /**
  * build object to query
  */
  let aux = {}
  aux[req.params.field] = req.fields.value;  
  req.fields.updateField = aux;

  next();
}