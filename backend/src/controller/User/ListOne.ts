/**
* Import modules
*/
import User from "../../model/User";
export default async (req, res) => {
  await User.findOne({
    where: {
        id: req.params.id
    }
    }).then(async (result:any) => {
    
    if(result)
    return res.send({status:"success", message:"User LISTONE", data: result});
    else
    return res.send({status:"error", message:"User NOT FOUND", data: result});
  }).catch(err => {
    return res.send({status:"error", message:"User LISTONE", data: err});
  })
}