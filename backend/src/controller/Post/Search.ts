/**
* Import modules
*/
import Post from "../../model/Post";

export default async (req, res) => {
  const { objFilters } = req.fields;
  // execute
  await Post
  .findAll( objFilters.find )        // filters search 
  .then(async result => {
      // return sucess
      return res.send({
          status: "success",
          message: "POST SEARCH",
          data: result,
          count: result.length,
          page: objFilters.skip,
          pageSize: objFilters.limit });

  }).catch(err => {
      console.log(err)
      // return error
      return res.status(400).send({status: "error",
          message: "POST SEARCH",
          data: err,
          page: objFilters.skip,
          pageSize: objFilters.limit });
  });
}