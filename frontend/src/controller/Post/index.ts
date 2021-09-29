/**
* import structure
*/
import axios from 'axios';
import ObjectForm from '../../lib/ObjectForm';
import Session from '../../lib/Session';

/**
 * Import types
 */
import {iPost, 
        iPostSave,
        iPostSearch,
        iPostDelete,
        iPostUpdate,
        iPostUpdateField,
        iPostList,
        iPostListOne} from '../../model/Post';

/**
 * CLASS ENTITY
 */
class Post{



  /**
   * 
   *  METHOD SAVE
   * 
   */
  public async save(post:iPostSave){
 
    const result = await axios.request({
      // method request
      method: "POST",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/post/save",
      // FormData with the content of the variable 'post'
      data: ObjectForm.create(post) , 
      // api security 
      headers: { Authorization: Session.get("token") }
    })
    .then(sucess => {return sucess.data})
    .catch(err => {return err.response.data});

    return result;
  }



  /**
   * 
   *  METHOD DELETE
   * 
   */
  public async delete(post:iPostDelete){

    const result = await axios.request({
      // method request
      method: "DELETE",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/post/delete",
      // FormData with the content of the variable 'post'
      data: ObjectForm.create(post), 
      // api security 
      headers: { Authorization: Session.get("token") }
    })
    .then(sucess => {return sucess.data})
    .catch(err => {return err.response.data});

    return result;
  }




  /**
   * 
   *  METHOD LIST
   * 
   */
  public async list(post:iPostList){

    const result = await axios.request({
      // method request
      method: "GET",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/post/list",
      // FormData with the content of the variable 'post'
      data: ObjectForm.create(post), 
      // api security 
      headers: { Authorization: Session.get("token") }
    })
    .then(sucess => {return sucess.data})
    .catch(err => {return err.response.data});

    return result;
  }



  /**
   * 
   *  METHOD LIST ONE
   * 
   */
  public async listOne(post:iPostListOne){

    const result = await axios.request({
      // method request
      method: "GET",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/post/list/" + post.id,
      // FormData with the content of the variable 'post'
      data: ObjectForm.create(post), 
      // api security 
      headers: { Authorization: Session.get("token") }
    })
    .then(sucess => {return sucess.data})
    .catch(err => {return err.response.data});

    return result;
  }


  
  /**
   * 
   *  METHOD UPDATE ONE
   * 
   */
  public async updateField(post:iPostUpdateField){

    const result = await axios.request({
      // method request
      method: "PATCH",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/post/update/" + post.id,
      // FormData with the content of the variable 'post'
      data: ObjectForm.create(post), 
      // api security 
      headers: { Authorization: Session.get("token") }
    })
    .then(sucess => {return sucess.data})
    .catch(err => {return err.response.data});

    return result;
  }



  /**
   * 
   *  METHOD UPDATE
   * 
   */
  public async update(post:iPostUpdate){

    const result = await axios.request({
      // method request
      method: "PUT",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/post/update/",
      // FormData with the content of the variable 'post'
      data: ObjectForm.create(post), 
      // api security 
      headers: { Authorization: Session.get("token") }
    })
    .then(sucess => {return sucess.data})
    .catch(err => {return err.response.data});

    return result;
  }


  
  /**
   * 
   *  METHOD SEARCH
   * 
   */
  public async search(post:iPostSearch){

    const result = await axios.request({
      // method request
      method: "GET",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/post/search/",
      // FormData with the content of the variable 'post'
      data: ObjectForm.create(post), 
      // api security 
      headers: { Authorization: Session.get("token") }
    })
    .then(sucess => {return sucess.data})
    .catch(err => {return err.response.data});

    return result;
  }

}

export default new Post();