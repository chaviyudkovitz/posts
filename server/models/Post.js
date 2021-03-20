const mongoose = require ('mongoose')
//const User = require('./User')

const postSchema = mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
    _id:{type: mongoose.Schema.Types.ObjectId},
    title: { type: String, required: true },
    body: { type: String },
    })
    
  module.exports = mongoose.model('Post', postSchema);

  // postSchema.post('save',async(err,post)=>{
  //   console.log(hi)
  //     if(post)
  //        await User.findByIdAndUpdate(this.userId,{$push:{posts:this.id}})
     
  // })

//   postSchema.pre('remove',async(dev,next)=>{
    
//     if(!dev)
//     console.log("pre middlware remove post");
//        await User.findByIdAndUpdate(this.userId,{$pull:{posts:this.id}})

//    next()
// })