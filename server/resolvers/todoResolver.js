import Todo from "../models/Todo";

export default {
  Query: {
    todo: (root, args) => {
      return new Promise((resolve, reject) => {
        Todo.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    todos: () => {
      return new Promise((resolve, reject) => {
        Todo.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addTodo: (root, { text, date }) => {
      const id = Math.floor(Math.random()*100000)
      const newTodo = new Todo({ id, text, date });

      return new Promise((resolve, reject) => {
        newTodo.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editTodo: (root, { id, text}) => {
        return new Promise((resolve, reject) => {
          Todo.findOneAndUpdate({ id }, { $set: { text } }).exec(
            (err, res) => {
              err ? reject(err) : resolve(res);
            }
          );
        });
      },
      deleteTodo: (root, args) => {
        return new Promise((resolve, reject) => {
          Todo.findOneAndRemove(args).exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });
      }
  }
};