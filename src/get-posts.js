const Post = require("./models/post");

const getPosts = async () => Post.findAll();

module.exports = getPosts;
