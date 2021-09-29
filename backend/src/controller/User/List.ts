/**
* Import modules
*/
import User from "../../model/User";

export default async (req, res) => { 
  await User.findAll({
      order: [
          ['id', 'ASC'],
      ],
      where: req.fields
  }).then(async (result:any) => {
    
      return res.send({status:"success", message:"User LIST", data: result});
  }).catch(err => {
      return res.send({status:"error", message:"User LIST", data: err});
  });
}