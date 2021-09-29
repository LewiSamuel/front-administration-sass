/**
* Import modules
*/
import Post from "../../model/Post";
import User from "../../model/User";

export default async (req, res) => { 
  await Post.findAll({
      order: [
          ['id', 'ASC'],
      ],
      where: req.fields
  }).then(async (result:any) => {
    
        /**
         *  ANALIZING ALL REGISTERS
         */
        for (let i = 0; i < result.length; i++){
          let element = result[i];
          
          // ADD RELATION
          
          let obju:any = await User.findOne({
              where: { id: element.u }
          });
          result[i].dataValues.u = obju.dataValues;
          
        }
      return res.send({status:"success", message:"Post LIST", data: result});
  }).catch(err => {
      return res.send({status:"error", message:"Post LIST", data: err});
  });
}