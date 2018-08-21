const bp = require("body-parser");

const api = require("./controller");

function router(app)
{
	app.use(bp.json());
	//readall
	app.get("/api/posts", api.getAll);
	//create
	app.post("/api/posts/new", api.create);
	//viewone
	app.get("/api/posts/:id", api.getOne);
	//deleteone
	app.delete("/api/posts/:id", api.destroy);
	//updateone
	app.patch("/api/posts/edit/:id", api.update);
	//addreview
	app.put("/api/posts/:id/comment", api.addComment);
}

module.exports = router;