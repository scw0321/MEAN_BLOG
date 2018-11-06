const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mean_blog", { useNewUrlParser: true }, (errs)=>console.log(errs||'db run'));

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		minlength: [3, 'title must be at least 3 characters']
	},
	description: {
		type: String,
		minlength: [3, 'description must be at least 3 characters']
	},
	topic: {
		type: String,
		minlength: [2, 'topic must be at least 2 characters']
	},
	posted_at: Date,
	
	answers: [{
				
		answer: {
			type: String,
			minlength: [3, 'answer must be at least 3 characters']
		}
		
	}]
}, {timestamps: true})


const Posts= mongoose.model('post', PostSchema);


module.exports = Posts