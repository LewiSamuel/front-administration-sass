/**
* Import modules
*/
import bcrypt from "bcrypt";
import User from "../../model/User";

/**
 * 
 * Middleware USER Save
 * Middle to save USER
 * 
 */
 export default async (req, res, next) => {
  const { Name, Email, Password, } = req.fields;

    
  /**
   * 
   *  Validations on field
   * Name of User
   * 
   * 
  */
  // Check if Name provided
  if(!Name)
  return res.status(400).send({status:"error", message:"Name is required", data:{}});
   
  // Validate length
  if(Name){
    // min length
    if(Name.length < 6)
    return res.status(400).send({status:"error", message:"Name size cannot be less than 6", data: {}});
    // max length
    if(Name.length > 255)
    return res.status(400).send({status:"error", message:"Name size cannot be greater than 255", data: {}});
  }

  /**
   * 
   *  Validations on field
   * Email of User
   * 
   * 
  */
  // Check if Email provided
  if(!Email)
  return res.status(400).send({status:"error", message:"Email is required", data:{}});
   
  // Check if already exists
  const existUserEmail = await User.count({ where: { Email: Email }});                
  if(existUserEmail !== 0)
  return res.status(400).send({status:"error", message:"User already exists (Email)", data:{}});
  
  
  // Validate length
  if(Email){
    // min length
    if(Email.length < 6)
    return res.status(400).send({status:"error", message:"Email size cannot be less than 6", data: {}});
    // max length
    if(Email.length > 255)
    return res.status(400).send({status:"error", message:"Email size cannot be greater than 255", data: {}});
  }

  /**
   * 
   *  Validations on field
   * Password of User
   * 
   * 
  */
  // Check if Password provided
  if(!Password)
  return res.status(400).send({status:"error", message:"Password is required", data:{}});
   
  // Validate length
  if(Password){
    // min length
    if(Password.length < 6)
    return res.status(400).send({status:"error", message:"Password size cannot be less than 6", data: {}});
    // max length
    if(Password.length > 255)
    return res.status(400).send({status:"error", message:"Password size cannot be greater than 255", data: {}});
  }

  // criptography password
  req.fields.Password = await bcrypt.hash(Password, 3);
  
  next();
}