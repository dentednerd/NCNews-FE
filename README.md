# Northcoders News

A Reddit clone built in Mongo, Express, React, Redux and Bulma.

---

## Instructions

1. In server, run `mongod`.
2. In server, run `npm run start`.
3. In front-end, run `npm run dev`.

---

## Northcoders News API

### Background

We will be building an API which we will be using later on during the
Front End block of the course. Your mongoose models and a Database seed file have been done for you.

A working version of the API has been built for you to interact with. Look closely at the response you get for each route on [http://northcoders-news-api.herokuapp.com/](http://northcoders-news-api.herokuapp.com/). You will notice that we also send data such as the comment and vote count for each article. You will need to think carefully about how to do this in your API.

You will need to get all your routes built up first as you can share the functionality between you `GET comments by id` route and the comment count on the articles response for example.

### Mongoose Documentation

The below are all model methods that you call on your models.

* [find](http://mongoosejs.com/docs/api.html#model_Model.find)
* [findOne](http://mongoosejs.com/docs/api.html#model_Model.findOne)
* [findOneAndUpdate](http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate)
* [findOneAndRemove](http://mongoosejs.com/docs/api.html#model_Model.findOneAndRemove)
* [findById](http://mongoosejs.com/docs/api.html#model_Model.findById)
* [findByIdAndUpdate](http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate)
* [findByIdAndRemove](http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove)
* [update](http://mongoosejs.com/docs/api.html#model_Model.update)

There are also some methods that can be called on new or retrieved documents. These are:

* [remove](http://mongoosejs.com/docs/api.html#model_Model-remove)
* [save](http://mongoosejs.com/docs/api.html#model_Model-save)
* [count](http://mongoosejs.com/docs/api.html#model_Model.count)

### Tasks

1. Seed your database with the main seed file `$ node seed/seed.js`
2. Build your express App
3. Mount an API Router onto your app
4. Define the routes described below using TDD
5. Define controller functions for each of your routes
6. Once you have all your routes, tackle adding the vote and comment counts to every article when the articles are requested. Here is an example of what the response should look like: [http://northcoders-news-api.herokuapp.com/api/articles](http://northcoders-news-api.herokuapp.com/api/articles). You will need to use [Async.js](https://caolan.github.io/async/) or Promises. The [Bluebird](http://bluebirdjs.com/docs/api-reference.html) library provides extended functionality for Promises and may come in handy.

### Routes

| Route |   |
| ------|---|
| `GET /api/topics` | Get all the topics |
| `GET /api/topics/:topic_id/articles` | Return all the articles for a certain topic |
| `GET /api/articles` | Returns all the articles |
| `GET /api/articles/:article_id/comments` | Get all the comments for a individual article |
| `POST /api/articles/:article_id/comments` | Add a new comment to an article. This route requires a JSON body with a comment key and value pair e.g: {"comment": "This is my new comment"} |
| `PUT /api/articles/:article_id` | Increment or Decrement the votes of an article by one. This route requires a vote query of 'up' or 'down' e.g: /api/articles/:article_id?vote=up |
| `PUT /api/comments/:comment_id` | Increment or Decrement the votes of a comment by one. This route requires a vote query of 'up' or 'down' e.g: /api/comments/:comment_id?vote=down |
| `DELETE /api/comments/:comment_id` | Deletes a comment |
| `GET /api/users/:username` | Returns a JSON object with the profile data for the specified user. |

---

### Northcoders News Front-End

Northcoders News is a social news aggregation, web content rating, and discussion website. It is similar to [Reddit](https://www.reddit.com/)

Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API.
Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments which
they have added.

### Objectives
1. Pull together all the skills and technologies you have learnt over the past three weeks.
2. Learn about working with a [C.R.U.D](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) application from a front end perspective.
3. Make more advanced asynchronous API calls.
4. Begin to familiarise yourself with the various HTTP response codes and update your UI accordingly.
5. Learn more common HTTP request types `POST`, `PUT` & `DELETE`
6. Learn more about interacting with a server using URL queries and request bodies.

You will be getting the data from your implementation of the Northcoders News API server.

### Stages

1. Have a look at your API endpoints and at Reddit. Think about what data you have available, and how you will structure your application. What routes will your application have? What articles will you choose to display on the main page?

2. Set up your routing with React Router. Render dummy components and make sure they are rendering in the right place.

3. Think about what data each component will need. Where will it come from? Will any components need to pass data down to dumb components as props? Focus on loading a list of articles for your front page first of all.

4. Consider more complex functionality. You should be able to post a new comment on a topic. NB all comments you post from your app will automatically have the username 'northcoder'. Consider whether the comments will appear in order of popularity or by time.

5. You should also be able to delete comments that you have posted. If you try to delete a comment that does not have the author 'northcoder' the API throws an error.

6. Each comment, and each article, can be upvoted or downvoted. See the [API reference](https://northcoders-news-api.herokuapp.com/) which explains how to to this.

### Users

Users are available from the API and have already been busy adding comments to the articles! There is also a 'northcoder' user. Any comments you add will belong to the 'northcoder' user and you will also be able to delete those comments using the API.

### Extra credit

1. Create a route which shows which users have been most active adding articles and comments
2. Make this route sort the users by how popular they are based on an aggregation of their article and comment vote counts
3. Implement a filter which re-orders comments based on either the time they were added, or how many votes they have got.
