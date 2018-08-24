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
function addAnswer(req,res)
{
	Posts.findById(req.params.id)
		.then(data=>{
			data.answers.push(req.body);
			return data.save()
		})
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}
 




module.exports = 
{
	getAll: getAll,
	create: create,
	// destroy: destroy,
	addAnswer: addAnswer,
	getOne: getOne
	
}


// delete
// function destroy(req,res)
// {
// 	Posts.findByIdAndRemove(req.params.id)
// 		.then(data=>res.json({status: "deleted", data: data}))
// 		.catch(errs=>res.json({status: "nope", data: errs}));
// }






