const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mean_blog", { useNewUrlParser: true }, (errs)=>console.log(errs||'db run'));

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		minlength: [3, 'name must be at least 3 characters']
	},
	description: {
		type: String,
		minlength: [3, 'cuisine must be at least 3 characters']
	},
	topic: {
		type: String,
		minlength: [3, 'cuisine must be at least 3 characters']
	},
	posted_at: Date,
	
	answers: [{
				
		answer: {
			type: String,
			minlength: [3, 'answer must be at least 3 characters']
		},
		comments: [{
			comment: {
				type: String,
				minlength: [3, 'answer must be at least 3 characters']
			}
			}]
	}]
}, {timestamps: true})


const Posts= mongoose.model('post', PostSchema);
// const Comments= mongoose.model('comment', CommentSchema);
// const Answers = mongoose.model('answer', AnswerSchema);

module.exports = Posts