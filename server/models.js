const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog", { useNewUrlParser: true }, (errs)=>console.log(errs||'Run! DB Run!'));
var mongoose_email = require('mongoose-type-email');


const PostSchema = new mongoose.Schema({
	email: {
		type: mongoose_email,
	},
	name: {
		type: String,
		minlength: [2, "Be at least 2 letters"],
		required: true,
	},
	title: {
		type: String,
		minlength: [3, 'title must be at least 3 characters'],
		required: true,
	},
	description: {
		type: String,
		minlength: [3, 'comments must be at least 3 characters'],
		required: true,
	},
	comments: [{
		name: {
			type: String,
			minlength: [3, 'name must be at least 3 characters']
		},
		comment: {
			type: String,
			minlength: [3, 'review must be at least 3 characters']
		}
	}]
}, {timestamps: true})

const posts= mongoose.model('post', PostSchema);
module.exports = posts