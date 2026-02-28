exports.getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Posts fetched successfully",
    data: []
  });
};

exports.getSinglePost = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Single post fetched successfully",
    data: { id: req.params.id }
  });
};

exports.createPost = (req, res) => {
  res.status(201).json({
    success: true,
    message: "Post created successfully",
    data: req.body
  });
};

exports.updatePost = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Post updated successfully",
    data: { id: req.params.id }
  });
};

exports.deletePost = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Post deleted successfully",
    data: { id: req.params.id }
  });
};