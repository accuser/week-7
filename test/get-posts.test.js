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

  test("returns the posts", async () => {
    const posts = await getPosts();

    expect(posts[0].slug).toBe("first-post");
    expect(posts[0].title).toBe("First Post");
    expect(posts[0].body).toMatch("Lorem ipsum dolor sit amet");
  });
});
