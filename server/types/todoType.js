export default `
  type Todo {
    id: String
    text: String!
    date: String
  }
  type Query {
    todo(id: String): Todo
    todos: [Todo]
  }
  type Mutation {
    addTodo(id: String, text: String!, date: String): Todo
    editTodo(id: String, text: String!, date: String): Todo
    deleteTodo(id: String, text: String, date: String): Todo
  }
`;