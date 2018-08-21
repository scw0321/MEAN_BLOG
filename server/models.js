const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog", { useNewUrlParser: true }, (errs)=>console.log(errs||'Run! DB Run!'));

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		minlength: [3, 'title must be at least 3 characters']
	},
	description: {
		type: String,
		minlength: [3, 'comments must be at least 3 characters']
	},
	comments: [{
		name: {
			type: String,
			minlength: [3, 'name must be at least 3 characters']
		},
		comment: {
			type: String,
			
			minlength: [3, 'comment must be at least 3 characters']
		},
		
	}]
}, {timestamps: true})

const posts= mongoose.model('post', PostSchema);

module.exports = posts