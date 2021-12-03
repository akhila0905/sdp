import { addNewUser,getUsers,getUserWithId,UpdateUser,deletUser} from "../Controllers/userController";

const routes=(app)=>{
    app.route('/Users')
      .get(getUsers)

        .post(addNewUser);
    app.route('/User/:UserId')
      .get(getUserWithId)

          .put(UpdateUser)

              .delete(deletUser)
}

export default routes