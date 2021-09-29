/**
* import structure
*/
import axios from 'axios';
import ObjectForm from '../../lib/ObjectForm';
import Session from '../../lib/Session';

/**
 * Import types
 */
import {iUser, 
        iUserAuth,
        iUserSave,
        iUserSearch,
        iUserDelete,
        iUserUpdate,
        iUserUpdateField,
        iUserList,
        iUserListOne} from '../../model/User';

/**
 * CLASS ENTITY
 */
class User{


  /**
   * 
   *  METHOD AUTH
   * 
   */
  public async auth(user:iUserAuth){

    const result = await axios.request({
      // method request
      method: "POST",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/user/auth",
      // FormData with the content of the variable 'category'
      data: ObjectForm.create(user)
    })
    .then(sucess => {return sucess.data})
    .catch(err => {return err.response.data});

    return result;
  }

  /**
   * 
   *  METHOD SAVE
   * 
   */
  public async save(user:iUserSave){
 
    const result = await axios.request({
      // method request
      method: "POST",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/user/save",
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(user) 
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
  public async delete(user:iUserDelete){

    const result = await axios.request({
      // method request
      method: "DELETE",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/user/delete",
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(user), 
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
  public async list(user:iUserList){

    const result = await axios.request({
      // method request
      method: "GET",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/user/list",
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(user), 
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
  public async listOne(user:iUserListOne){

    const result = await axios.request({
      // method request
      method: "GET",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/user/list/" + user.id,
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(user), 
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
  public async updateField(user:iUserUpdateField){

    const result = await axios.request({
      // method request
      method: "PATCH",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/user/update/" + user.id,
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(user), 
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
  public async update(user:iUserUpdate){

    const result = await axios.request({
      // method request
      method: "PUT",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/user/update/",
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(user), 
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
  public async search(user:iUserSearch){

    const result = await axios.request({
      // method request
      method: "GET",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/user/search/",
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(user), 
      // api security 
      headers: { Authorization: Session.get("token") }
    })
    .then(sucess => {return sucess.data})
    .catch(err => {return err.response.data});

    return result;
  }

}

export default new User();