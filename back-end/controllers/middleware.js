const Account = require("../models/Account");
const Valet = require("../models/Valet");
const jwt = require("jsonwebtoken");
// const { comment } = require("./create");
const secret = require("../config/config").jwtSecret;
module.exports = {
	loginToken: (req, res, next) => {
		let userToken = req.cookies.user;
		//console.log(userToken);
		if (userToken === undefined) {
			req.loggedIn = false;
			req.user = {};
		} else {
			let data = jwt.verify(userToken, secret);
			//console.log(data);
			let expDate = new Date(data.exp * 1000);
			let date = new Date();
			if (expDate < date) {
				req.loggedIn = false;
				req.user = {};
			} else {
				req.loggedIn = true;
				req.user = {
					id: data._id,
					username: data.username,
				};
			}
		}
		next();
	},
	routeValidation: (req, res, next) => {
		//console.log(req.path);
		if (req.loggedIn) {
			if (req.path === "/user/login" || req.path === "/user/register") {
				res.redirect("/");
			} else {
				if(req.path.startsWith("/edit") ||
                req.path.startsWith("/delete")){
					
					let id = req.path.split("/")[3];
					console.log(id);
					let userId = req.user.id;
					console.log(userId)
					if(req.path.startsWith('/edit/thread')||req.path.startsWith('/delete/thread')){
						Thread.findById(id).lean().then(thread=>{
							let matchCreator = (thread.creatorId.toString() === userId)?true:false;
							if(matchCreator){
								next();
							}else{
								res.redirect(`/thread/${id}`);
							}
						});
					} else if (req.path.startsWith('/edit/comment')||req.path.startsWith('/delete/comment')){
						Comment.findById(id).lean().then(comment=>{
							let matchCreator = (comment.creatorId.toString() === userId) ? true:false;
							if(matchCreator){
								next();
							}else{
								res.redirect(`/thread/${comment.thread}`);
							}
						});
					}
				}else{
					next();
				}
			}
		} else {
			if (
				req.path === "/create/thread" ||
				req.path === "/create/comment" ||
                req.path.startsWith("/edit/thread") ||
				req.path.startsWith("/edit/comment") ||
                req.path.startsWith("/delete")
			) {
                res.redirect("/user/login");
			}else{
                next();
            }
		}
	},
};