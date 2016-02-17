"use strict";
import express 	from 'express';
import Douban 	from 'douban-book-client';

let router = express.Router();

router.get("/search", (req, res) => {
	let api = new Douban();
	api.search({
		q: req.query.q,
		start: req.query.start,
		count: req.query.count,
		tag: req.query.tag
	}, (err, data) => {
		if (err) {
			res.status(err.code).send(err.msg);
		} else {
			res.json(data);
		}
	});
});

export default router;
