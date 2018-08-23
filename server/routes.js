const bp = require("body-parser");

const api = require("./controller");

function router(app)
{
	app.use(bp.json());
	//getall
	app.get("/api/posts", api.getAll);
	//create
	app.post("/api/posts/new", api.create);
	//getone
	app.get("/api/posts/:id", api.getOne);
	//delete
	// app.delete("/api/posts/:id", api.destroy);
	//update
	// app.patch("/api/posts/update/:id", api.update);
	//addComment
	app.put("/api/posts/:id/answer", api.addAnswer);
	app.put("/api/posts/:id/answer/:id/comment", api.addAnswerComment);
}

module.exports = router;