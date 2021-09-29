/**
* Import modules
*/
import Post from "../../model/Post";

export default async (req, res) => {

    let objExcluir = await Post.findOne({where: {id: req.fields.id}}).catch(function(erro){
        return res.status(400).send({status:"error", message:"POST DELETE", data: erro });
    });
    if(objExcluir.destroy())
    return res.send({status:"success", message:"POST DELETE", data: objExcluir});
    else
    return res.status(400).send({status:"error", message:"POST DELETE", data: objExcluir });

}

