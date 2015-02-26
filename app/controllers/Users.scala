package controllers

import play.modules.reactivemongo.MongoController
import play.modules.reactivemongo.json.collection.JSONCollection
import scala.concurrent.Future
import reactivemongo.api.Cursor
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import org.slf4j.{ LoggerFactory, Logger }
import javax.inject.Singleton
import play.api.mvc._
import play.api.libs.json._
import reactivemongo.api.QueryOpts
import reactivemongo.bson.BSONDocument
import reactivemongo.core.commands.Count
import scala.util.Failure
import scala.util.Success

/**
 * The Users controllers encapsulates the Rest endpoints and the interaction with the MongoDB, via ReactiveMongo
 * play plugin. This provides a non-blocking driver for mongoDB as well as some useful additions for handling JSon.
 * @see https://github.com/ReactiveMongo/Play-ReactiveMongo
 */
@Singleton
class Users extends Controller with MongoController {

  private final val logger: Logger = LoggerFactory.getLogger(classOf[Users])

  /*
   * Get a JSONCollection (a Collection implementation that is designed to work
   * with JsObject, Reads and Writes.)
   * Note that the `collection` is not a `val`, but a `def`. We do _not_ store
   * the collection reference to avoid potential problems in development with
   * Play hot-reloading.
   */
  def collection: JSONCollection = db.collection[JSONCollection]("users")

  import models._
  import models.JsonFormats._

  def findUsers(page: Int = 1, start: Int = 0, limit: Int = 25, filter: String = "") = Action.async { implicit request =>
    var selector: JsValue = Option(filter) getOrElse ("") isEmpty match {
      case true => Json.obj("active" -> true)
      case false => Json.obj("active" -> true, "firstName" -> filter)
    }

    // let's do our query
    val cursor: Cursor[User] = collection.
      //Get Generic Query Builder
      genericQueryBuilder.
      // sort them by creation date
      sort(Json.obj("created" -> -1)).
      /**
       * ****** Provide Query Potions using QueryOpts(skipN: Int = 0, batchSizeN: Int = 0, flagsN: Int = 0)
       * ****** skipN: The number of documents to skip.
       * ****** batchSizeN: The upper limit on the number of documents to retrieve per batch.
       * ****** flagsN: The query flags.
       */
      options(QueryOpts(start, limit, 1)).
      // Find all with given selector and options
      query(selector).
      // perform the query and get a cursor of JsObject
      cursor[User]
    // gather all the JsObjects in a list
    val futureUsersList: Future[List[User]] = cursor.collect[List](limit)

    // transform the list into a JsArray
    val futurePersonsJsonArray: Future[JsArray] = futureUsersList.map { users =>
      Json.arr(users)
    }

    val count = Count(collection.name)
    val futureCount = db.command(count)

    var futurePersonsJsonArrayCount = for {
      total <- futureCount
      users <- futurePersonsJsonArray
    } yield (total, users)

    // everything's ok! Let's reply with the array
    futurePersonsJsonArrayCount.map {
      values =>
        Ok(Json.obj("totalCount" -> values._1, "users" -> values._2(0)))
    }
  }
}