/**
* Import modules
*/
import User from "../../model/User";

/**
 * 
 * Middleware POST Save
 * Middle to save POST
 * 
 */
 export default async (req, res, next) => {
  const { Titulo, Descr, u, } = req.fields;

    
  /**
   * 
   *  Validations on field
   * Titulo of Post
   * 
   * 
  */
  // Validate length
  if(Titulo){
    // min length
    if(Titulo.length < 6)
    return res.status(400).send({status:"error", message:"Titulo size cannot be less than 6", data: {}});
    // max length
    if(Titulo.length > 255)
    return res.status(400).send({status:"error", message:"Titulo size cannot be greater than 255", data: {}});
  }

  /**
   * 
   *  Validations on field
   * Descr of Post
   * 
   * 
  */
  // Validate length
  if(Descr){
    // min length
    if(Descr.length < 6)
    return res.status(400).send({status:"error", message:"Descr size cannot be less than 6", data: {}});
    // max length
    if(Descr.length > 255)
    return res.status(400).send({status:"error", message:"Descr size cannot be greater than 255", data: {}});
  }

  /**
   * 
   *  Validations on field
   * u of Post
   * 
   * 
  */
  next();
}