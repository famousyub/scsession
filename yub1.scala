import logging.Logger.info 
import scala.math._ 

class Circle (radius: Double){
     import Circle._
     def area:Double =calculateArea(radius)
}
object Circle {
    private def  calculateArea (radius: Double):Double = Pi * pow(radius,2.0)
}
class Greeter (prefix :String , suffix :String){

    def greeter_user(name:String):Unit=
        println(prefix + name + suffix)
}

// class Point {
//     private var _x = 0
//     private var _y = 0 ;
//     private var bound = 100 

//     def x:Int = _x 
//     def x_ = (newValue: Int):Unit= {
//         if(newValue < bound) _x = newValue else printWarning()
//     }
//     def y:Int =_y 
//     def y_ = (newValue: Int):Unit = {
//          if(newValue < bound) _y = newValue else printWarning()
//     }
//     private def printWarning() = println("Warning of bouning")
// }

trait Iterator[A] {
    def hasNext :Boolean
    def Next(): A
}

class IntIterator(to: Int) extends Iterator[Int] {
      private var cuurent = 0
      override def hasNext :Boolean = cuurent < to 
      override def Next :Int = {
            if(hasNext) {
                val t = cuurent 
                cuurent+=1 
                t 
            } else 0
      }
}

class Email(val username: String, val domainName: String)

object Email {
  def fromString(emailString: String): Option[Email] = {
    emailString.split('@') match {
      case Array(a, b) => Some(new Email(a, b))
      case _ => None
    }
  }
}

object Test_ {

    def test ():Unit =  {
     val scalaCenterEmail = Email.fromString("scala.center@epfl.ch")
scalaCenterEmail match {
  case Some(email) => println(
    s"""Registered an email
       |Username: ${email.username}
       |Domain name: ${email.domainName}
     """.stripMargin)
  case None => println("Error: could not parse email")
     }
}

}


object Main {
    def main(args: Array[String]):Unit = 

        if (args.length == 0) println(usage)

  def nextArg(map: Map[String, Any], list: List[String]): Map[String, Any] = {
    list match {
      case Nil => map
      case "--arg1" :: value :: tail =>
        nextArg(map ++ Map("arg1" -> value.toInt), tail)
      case "--arg2" :: value :: tail =>
        nextArg(map ++ Map("arg2" -> value.toInt), tail)
      case string :: Nil =>
        nextArg(map ++ Map("filename" -> string), list.tail)
      case unknown :: _ =>
        println("Unknown option " + unknown)
        exit(1)
    }
  }
  val options = nextArg(Map(), args.toList)
  println(options)
        println(args.length)
        var name = ""
        var port = 0
        var ip = ""
        args.sliding(2, 2).toList.collect {
        case Array("--ip", argIP: String) => ip = argIP
        case Array("--port", argPort: String) => port = argPort.toInt
        case Array("--name", argName: String) => name = argName
        }

        if(args.length>1)
        {
            for (i <- 0 until args.length by 1){
                println(args(i));
            }
        }
        val iterator = new IntIterator(10);
       // var circ = Circle(5.0);
        //println(circ.area);
       
        iterator.Next()
        iterator.Next()
        println("hello");
       // if(args.length>0)
        //info (args(0));
        val grreter = new Greeter("hello","!");
        grreter.greeter_user("ayoub smayen");
}