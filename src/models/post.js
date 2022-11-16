const { DataTypes, Sequelize } = require("sequelize");

const sequelize = new Sequelize("sqlite::memory:");

const Post = sequelize.define("Post", {
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
  },
});

module.exports = Post;
