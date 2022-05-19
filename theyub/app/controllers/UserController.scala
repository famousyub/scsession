// package controllers

// import javax.inject._
// import play.api._
// import play.api.mvc._


// @Singleton
// class UserController @Inject() (val service: UserService) extends Controller {
//   import play.api.libs.concurrent.Execution.Implicits.defaultContext
   
//   def getUsers = Action.async {
//     service.findAll().map { users =>
//       Ok(views.html.users(users))
//     }
//   }
// }