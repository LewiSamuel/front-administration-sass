/**
* Import modules
*/
import Post from "../../model/Post";

export default async (req, res) => {

  await Post.update( req.fields.updateField ,{
      where: { id: req.fields.id }
  }).then(result => {
      if(result)
      return res.send({status:"success", message:"POST UPDATE", data: result});
      else
      return res.send({status:"error", message:"POST UPDATE", data: result});
  }).catch(err => {
      return res.send({status:"error", message:"POST UPDATE", data: err});
  });

}