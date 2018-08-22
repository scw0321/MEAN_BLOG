const posts = require("./models");

// readAll
function getAll(req,res)
{
	posts.find({})
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}

// create Post
function create(req,res)
{
	posts.create(req.body)
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}

// viewOne
function getOne(req,res)
{
	posts.findById(req.params.id)
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}

// editOne
function update(req,res)
{
	posts.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}

// add Comment
function addComment(req,res)
{
	posts.findById(req.params.id)
		.then(data=>{
			data.reviews.push(req.body);
			return data.save()
		})
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}

// deleteOne
function destroy(req,res)
{
	posts.findByIdAndRemove(req.params.id)
		.then(data=>res.json({status: "deleted", data: data}))
		.catch(errs=>res.json({status: "nope", data: errs}));
}

// app.post('/sessions', (req, res) => {
//     console.log(" req.body: ", req.body);
//     User.findOne({email:req.body.email, password: req.body.password}, (err, user) => {
//         if (err) {
//             // Code...
//         }
//         else {
//             // Code...
//     		req.session.user_id = user._id;
// 		req.session.email = user.email;
//         }
//     })
// })

module.exports = 
{
	getAll: getAll,
	create: create,
	destroy: destroy,
	addComment: addComment,
	getOne: getOne,
	update: update
}