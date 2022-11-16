const getPosts = require("../src/get-posts");
const Post = require("../src/models/post");

describe("getPosts", () => {
  beforeEach(async () => {
    await Post.sync({ force: true });
    await Post.create({
      slug: "first-post",
      title: "First Post",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet viverra nibh lobortis fermentum. Duis tristique at mi quis consequat. Aenean justo enim, feugiat quis porta non, congue nec lorem. Morbi aliquet non urna eu fermentum. Proin sed ornare ipsum.",
    });
  });

  it("returns an array", async () => {
    const posts = await getPosts();

    expect(Array.isArray(posts)).toBe(true);
  });

  it("returns of collection of posts", async () => {
    const posts = await getPosts();

    expect(
      posts.every((post) => {
        if (post.slug && post.title) {
          return true;
        } else {
          return false;
        }
      })
    );
  });
});
