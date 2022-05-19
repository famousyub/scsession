package controllers

import javax.inject._
import play.api._
import play.api.mvc._

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(
  // val  userAction: UserInfoAction,
  val controllerComponents: ControllerComponents) extends BaseController {

  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  // def index() = Action { implicit request: Request[AnyContent] =>
  //    Ok(views.html.index())
  // }
/*
  def indata  = userAction { implicit request: UserRequest[_] =>
    Ok(views.html.index(form))
  }*/
  // def greet() = Action { implicit request: Request[AnyContent]=>
  //   Ok(views.html.index())
  // }

  def login( userId: String ,loginName: String ) =Action { implicit request: Request[AnyContent]=>
     Ok(views.html.login(userId, loginName))
  }

  def fetdata(userId: String , loginName: String, dispatcher : String)=Action { implicit request: Request[AnyContent]=>
     Ok(views.html.fetdata(userId,loginName,dispatcher))
  }

  def terminalsql (userId: String , loginName: String )=Action { implicit request: Request[AnyContent]=>
       Ok(views.html.terminalsql(userId,loginName))
  }
}
