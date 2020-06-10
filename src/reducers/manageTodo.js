export default function manageTodo(state = {
  todos: [{text: 'buy grocereis'}, {text: 'watch netflix'}],
}, action) {

  console.log("reducer received this action:", action);

  return state;
}
