const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogsSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    body: String,
    category_ids: [{type: mongoose.Types.ObjectId, ref: 'Categories'}]
  });

 const usersSchema = new Schema({
        _id : Schema.Types.ObjectId,
        name: String,
        email: String,
        social_profile : {
        linkedIn: String,
        facebook: String,
        twiter: String,
        github: String,
        instagram: String,
        },
        addresses: [
        {
        line1: String,
        city: String,
        state: String,
        pincode: Number,
        }
        ],
        blogs_id: [{type: mongoose.Types.ObjectId, ref: 'Blogs'}]
 })

 const categoriesSchema = new Schema({
        _id : Schema.Types.ObjectId,
        name: String
 })

 const commentsSchema = new Schema({
    _id: Schema.Types.ObjectId,
    blog_id: {type: mongoose.Types.ObjectId, ref: 'Blogs'},
    user_id: {type: mongoose.Types.ObjectId, ref: 'Users'},
    message: String,
    rating: Number
})

const likesSchema = new Schema({
    _id: Schema.Types.ObjectId,
    blog_id: {type: mongoose.Types.ObjectId, ref: 'Blogs'},
    user_id: {type: mongoose.Types.ObjectId, ref: 'Users'},
    emoji: String
})

  const Blogs = mongoose.model('Blogs', blogsSchema);
  const Users = mongoose.model('Users', usersSchema);
  const Categories = mongoose.model('Categories', categoriesSchema);
  const Comments = mongoose.model('Comments', commentsSchema);
  const Likes = mongoose.model('Likes', likesSchema);
