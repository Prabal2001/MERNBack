const Blog = require('../models/Blog');

exports.createBlog = async(req,res) => {
    const{title,image,description} = req.body;
    const newBlog = new Blog({title,image,description});           //creates the blog
    await newBlog.save();
    res.status(200).json(newBlog);
}

exports.getAllBlogs = async(req,res) => {
    const blogs = await Blog.find();                               //get all the blogs
    res.json(blogs);
}

exports.getBlog = async(req,res) =>{
    const blog = await Blog.findById(req.params.id);               //get a blog
     res.json(blog);
};

exports.updateBlog = async(req,res) => {
    const{title,image,description} = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(                 //update a blog
        req.params.id,
        {title,image,description },
         { new:true }
    );
    res.status(200).json(updatedBlog);
}

exports.deleteBlog = async(req,res) => {
     await Blog.findByIdAndDelete(req.params.id);                      //delete the blog
     res.json({message:"Blog deletion successful"});
}