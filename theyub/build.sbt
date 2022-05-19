name := """theyub"""
organization := "com.example"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.13.8"
val AkkaVersion = "2.6.19"
//libraryDependencies += guice
libraryDependencies += ws
libraryDependencies += guice
libraryDependencies += "org.abstractj.kalium" % "kalium" % "0.8.0"
//libraryDependencies += "com.typesafe.akka" %% "akka-distributed-data" % "2.5.18"
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "5.0.0" % Test
//libraryDependencies+= "com.typesafe.akka" %% "akka-actor" % "2.4.0"
// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.example.controllers._"
libraryDependencies+=    "com.typesafe.akka" %% "akka-testkit" % "2.6.19" % Test
libraryDependencies+=      "com.typesafe.akka" %% "akka-stream-testkit" % "2.6.19" % Test
libraryDependencies+=   "com.typesafe.akka" %% "akka-cluster" % "2.6.19"
libraryDependencies+="com.typesafe.akka" %% "akka-multi-node-testkit" % "2.6.19" % Test
libraryDependencies+=  "com.typesafe.akka" %% "akka-actor" % "2.6.19" 
libraryDependencies+= "com.typesafe.akka" %% "akka-distributed-data" % "2.6.19"
// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.example.binders._"
scalacOptions ++= Seq(
  "-feature",
  "-deprecation",
  "-Xfatal-warnings"
)