const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema(
  { 
    content: String,

    creatorId: mongoose.Schema.Types.ObjectId,

    picPath: String,

    picName: String
}
)



module.exports = mongoose.model('Post', postSchema);
