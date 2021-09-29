/**
* Import modules
*/
import User from "../../model/User";

export default async (req, res) => {
  const { objFilters } = req.fields;
  // execute
  await User
  .findAll( objFilters.find )        // filters search 
  .then(async result => {
      // return sucess
      return res.send({
          status: "success",
          message: "USER SEARCH",
          data: result,
          count: result.length,
          page: objFilters.skip,
          pageSize: objFilters.limit });

  }).catch(err => {
      console.log(err)
      // return error
      return res.status(400).send({status: "error",
          message: "USER SEARCH",
          data: err,
          page: objFilters.skip,
          pageSize: objFilters.limit });
  });
}