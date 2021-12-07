import { addNewUser,getUsers,getUserWithId,UpdateUser,deletUser} from "../Controllers/ContactUsController";

const routes=(app)=>{
    app.route('/ContactUs')
      .get(getUsers)

        .post(addNewUser);
    app.route('/Contact/:ContactId')
      .get(getUserWithId)

          .put(UpdateUser)

              .delete(deletUser)
}

export default routes