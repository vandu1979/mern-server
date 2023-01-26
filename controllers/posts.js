import Visitor from "../models/visitor.js";

export const getPosts = async (req, res) => {
    try {
        const visitors = await Visitor.find()
        res.status(200).json(visitors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
// implementing the logic for adding different post
export const createPosts =  async (req, res) => {
    const post = req.body;
const newPost = new Visitor(post);
    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
    res.status(409).json({ message: error.message})
}
}