const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog", { useNewUrlParser: true }, (errs)=>console.log(errs||'Run! DB Run!'));

const PostSchema = new mongoose.Schema({
	name: {
		type: String,
		minlength: [3, 'name must be at least 3 characters']
	},
	description: {
		type: String,
		minlength: [3, 'cuisine must be at least 3 characters']
	},
	comments: [{
		name: {
			type: String,
			minlength: [3, 'name must be at least 3 characters']
		},
		rating: {
			type: Number,
			default: 1,
			minimum: 1
		},
		review: {
			type: String,
			minlength: [3, 'review must be at least 3 characters']
		}
	}]
}, {timestamps: true})

const posts= mongoose.model('post', PostSchema);

module.exports = Posts