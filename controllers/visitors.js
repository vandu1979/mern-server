import Visitor from "../models/visitor.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
    try {
        const visitors = await Visitor.find()
        res.status(200).json(visitors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
// implementing the logic for adding different post
export const createPost =  async (req, res) => {
    const post = req.body;
    console.log(post);
const newPost = new Visitor(post);
    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
    res.status(409).json({ message: error.message})
}
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    // const { title, message, creator, selectedFile, tags } = req.body;
    const post = req.body;
 
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No visitor with that id');
 
    const updatedPost = 
    await Visitor.findByIdAndUpdate(_id, post, { new: true });
    res.json(updatedPost);
  }

  export const deletePost = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No visitor with that id');
    await Visitor.findByIdAndRemove(id);
    console.log('DELETE');
    res.json({ message: 'Visitor deleted successfully' });
  }