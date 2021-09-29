/**
* Import modules
*/
import Post from "../../model/Post";
import User from "../../model/User";
export default async (req, res) => {
  await Post.findOne({
    where: {
        id: req.params.id
    }
    }).then(async (result:any) => {
    
      let element = result;
      // ADD RELATION
      let obju:any = await User.findOne({
          where: { id: element.u }
      });
      result.dataValues.u = obju.dataValues;
      
    if(result)
    return res.send({status:"success", message:"Post LISTONE", data: result});
    else
    return res.send({status:"error", message:"Post NOT FOUND", data: result});
  }).catch(err => {
    return res.send({status:"error", message:"Post LISTONE", data: err});
  })
}