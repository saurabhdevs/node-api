mongoose = require("mongoose");

const post_schema = new mongoose.Schema({

    title: {
        type:String,
        required: "Title is required"
    },
    content: {
        type:String,
        required: "Content is required"
    },
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        required: "Comment is required"
    }]
},{
    timestamps:true 
})

module.exports = mongoose.model("Post",post_schema);