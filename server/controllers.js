// native modules
const path = require('path');

// 3rd party dependencies

// project dependencies
const { Topics, Articles, Comments, Users } = 
    require(path.resolve(__dirname, 'models', 'models'));

function getTopics (req, res, next) {
    Topics.find({}, function (err, topics) {
        if (err) return next({status:500, msg:err});
        else if (topics === null) {
            return next({status:404, msg:'Not Found'});
        } else {
            res.status(200).json({topics});
        }
    });
}

function getArticlesByTopic (req, res, next) {
    const id = req.params.topic_id;
  
    Articles.find({belongs_to: id}, function (err, articles) {
        if (err) return next({status:500, msg:err});
        else if (articles.length === 0) {
            return next({status:404, msg:'No Articles Found For Topic ' + id});
        } else {
            res.status(200).json({articles});
        }
    });
}

/* // old version without comment count
function getArticles (req, res, next) {
    Articles.find({}, function (err, articles) {
        if (err) return next({status:500, msg:err});
        else {
            res.status(200).json({articles});
        }
    });
}
*/

function getCommentsByArticles (req, res, next) {
    const query = { belongs_to: req.params.article_id };
    Comments.find(query, function (err, comments) {
        if (err) return next({status:500, msg:err});
        else if (comments.length === 0) {
            return next({status:404, msg:'No Comments Found For article ' + req.params.article_id});
        } else {
            res.status(200).json({comments});
        }
    });
}

function postCommentToArticle (req, res, next) {
    const newComment = req.body.comment;
    const commentObj = { belongs_to: req.params.article_id, body:newComment };
    const freshComment = new Comments(commentObj);
    freshComment.save(function (err, comments) {
        if (err) return next({status:500, msg:err});
        else 
          {
            res.status(200).json({comments});
        }
    });
}

function voteArticle (req, res, next) {
    const query = req.query;
    let voteNum;
    if (query.vote === 'up') {voteNum = 1;} else if (query.vote === 'down') {voteNum = -1;}
    Articles.findByIdAndUpdate(req.params.article_id, {$inc:{votes:voteNum}}, function (err) {
        if (err) return next({status:500, msg:err});
        else {
            res.status(200).send({message:'OK'});
        }
    });
}

function getArticlesById (req, res, next) {
    Articles.findById(req.params.article_id, function (err, article) {
        if (err) return next({status:500, msg:err});
        else {
            res.status(200).json({article});
        }
    });
}

function voteComment (req, res, next) {
    const query = req.query;
    let voteNum;
    if (query.vote === 'up') {voteNum = 1;} else if (query.vote === 'down') {voteNum = -1;}
    Comments.findByIdAndUpdate(req.params.comment_id, {$inc:{votes:voteNum}}, function (err) {
        if (err) return next({status:500, msg:err});
        else {
            res.status(200).send({message:'OK'});
        }
    });
}

function deleteComment (req, res, next) {
    Comments.findByIdAndRemove(req.params.comment_id, function (err) {
        if (err) return next({status:500, msg:err});
        else {
            res.status(200).send({message: 'comment deleted'});
        }
    });
}

function getUserProfile (req, res, next) {
   Users.findOne({username:req.params.username}, function (err, user) {
        if (err) return next({status:500, msg:err});
        else if (user === null) {
            return next({status:404, msg:'User Not Found'});
        } else {
            return res.status(200).json({user});
        }
    }); 
}

function getArticlesWithCount (req, res, next) {
   Articles.find({})
        .then(function (articles) {
            const countCommentsPromises = articles.map((article) => {
                return Comments.count({
                    belongs_to: article._id
                });
            });
            return Promise.all([articles, ...countCommentsPromises]);
        })
        .then(([articles, ...commentCounts]) => {
            const articlesWithCounts = articles.map((article, i) => {
                article.comments = commentCounts[i];
                return article;
            });
            res.json({articles: articlesWithCounts});
        })
        .catch((err) => next(err));
}

module.exports = {
    getTopics, getArticlesByTopic, getCommentsByArticles,
    postCommentToArticle, voteArticle, getArticlesById, voteComment,
    deleteComment, getUserProfile, getArticlesWithCount
};