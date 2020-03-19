import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the User Schema.
const TodoSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  complete: Boolean,
  text: {
    type: String,
    required: true,
  },
  date :{
      type: Date,
      default: new Date()
  }
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;