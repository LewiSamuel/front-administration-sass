/**
* 
* Middleware User Delete
* Middle to delete User
* 
*/
import User from "../../model/User";
import { Op } from "sequelize";
  
export default async (req, res, next) => {
  const { id } = req.fields;

  /**
   * Fields required
   */
  if(!id)
  return res.status(400).send({status:"error", message:"id is required", data:{}});

  next();
}