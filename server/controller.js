const Posts = require("./models");
const Comments = require("./models");
const Answers = require("./models");

const mongoose = require('mongoose')
// const Post = mongoose.model('Post')
// const Comment = mongoose.model('Comment')
// const Answer = mongoose.model('Answer')

// getAll
function getAll(req,res)
{
	Posts.find({})
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}
// getOne
function getOne(req,res)
{
	Posts.findById(req.params.id)
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}

// create Post
function create(req,res)
{
	Posts.create(req.body)
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}

// addAnswer
function createAnswer(req,res)
{
	Posts.findById(req.params.id)
		.then(data=>{
			data.answers.push(req.body);
			return data.save()
		})
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}
 
//addAnswerComment
function createAnswerComment(req,res)
{
	// Posts.findById(req.params.id)
	// 	.then(data=>{
	// 		Answers.findById(req.params.id)
	// 		data.answers.push(req.body);
	// 		return data.save()
	// 	})
	// 	.then(data=>res.json(data))
	// 	.catch(errs=>res.json(errs));
}



module.exports = 
{
	getAll: getAll,
	create: create,
	// destroy: destroy,
	addAnswer: createAnswer,
	getOne: getOne,
	addAnswerComment: createAnswerComment
}


// delete
// function destroy(req,res)
// {
// 	Posts.findByIdAndRemove(req.params.id)
// 		.then(data=>res.json({status: "deleted", data: data}))
// 		.catch(errs=>res.json({status: "nope", data: errs}));
// }
// function getAll(req,res)
// {
// 	Posts.find({})
// 		.then(data=>res.json(data))
// 		.catch(errs=>res.json(errs));
// }

// function createQuestion(req, res) {
// 	User.findOne({
// 		id: req.user.id
// 	},
// 	function(err, user) {
// 		var newQuestion = new Question({
// 			title: req.body.title,
// 			description: req.body.description,
// 			topic: req.body.topic,
// 			posted_at: new Date(),
// 			_user: user._id,
// 		})
// 		newQuestion.save(function(err, data) {
// 			if (err) {
// 				console.log(err)
// 			} else {
// 				user.questions.push(newQuestion._id)
// 				user.ninja_stars += 1;
// 				user.save()
// 				res.json(data)
// 			}
// 		})
// 	})
// }

// function getQuestions (req, res) {
// 	Question.find({})
// 		.populate('_user')
// 		.populate('comments')
// 		.populate('answers')
// 		.populate({
// 			path: 'answers',
// 			populate: {
// 				path: '_user'
// 			}
// 		})
// 		.populate({
// 			path: 'answers',
// 			populate: {
// 				path: 'comments'
// 			}
// 		})
// 		.exec(function(err, questions) {
// 			res.json(questions)
// 		})
// }
		
// function createComment(req, res) {
// 	User.findOne({
// 		id: req.user.id
// 	}, function(err, user) {
// 		Question.findOne({
// 			_id: req.body.question_id
// 		}, function(err, question) {
// 			var newComment = new Comment({
// 				comment: req.body.comment,
// 				_user: user,
// 				_question: question._id
// 			})
// 			newComment.save(function(err, data) {
// 				if (err) {
// 					console.log(err)
// 				} else {
// 					user.comments.push(newComment._id)
// 					question.comments.push(newComment._id)
// 					user.save()
// 					question.save()
// 					res.json(data)
// 				}
// 			})
// 		})
// 	})
// }
	  
// function createAnswerComment(req, res) {
// 	User.findOne({
// 		id: req.user.id
// 	}, 
// 	function(err, user) {
// 		Answer.findOne({
// 			_id: req.body.answer_id
// 		}, 
// 	function(err, answer) {
// 		var newAnswerComment = new Comment({
// 			comment: req.body.comment,
// 			_user: user,
// 			_answer: answer._id,
// 		})
	
// 	newAnswerComment.save(function(err, data) {
// 				if (err) {
// 					console.log(err)
// 				} else {
// 					user.comments.push(newAnswerComment._id)
// 					answer.comments.push(newAnswerComment._id)
// 					user.save()
// 					answer.save()
// 					res.json(data)
// 				}
// 			})
// 		})
// 	})
// }

// function createAnswer(req, res) {
// 	User.findOne({
// 		id: req.user.id
// 	}, function(err, user) {
// 		Question.findOne({
// 			_id: req.body.question_id
// 		}, function(err, question) {
// 			var newAnswer = new Answer({
// 				answer: req.body.answer,
// 				topic: question.topic,
// 				_user: user._id,
// 				_question: question._id,
// 			})
// 			newAnswer.save(function(err, data) {
// 				if (err) {
// 					console.log(err)
// 				} else {
// 					user.ninja_stars += 1;
// 					user.answers.push(newAnswer._id)
// 					question.answers.push(newAnswer._id)
// 					user.save()
// 					question.save()
// 					res.json(data)
// 				}
// 			})
// 		})
// 	})
// }
        







