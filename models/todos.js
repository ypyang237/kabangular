var todoSchema = mongoose.moodel({
  title: String,
  author: String,
  due: Date,
  state: String
});