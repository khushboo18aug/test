module.exports = function(app) {
const todoList = require(‘../controllers/todoListController’),
const userHandlers = require(‘../controllers/userController.js’);

app.route('/tasks')
  .get(todoList.list_all_tasks)
  .post(todoList.loginRequired, todoList.create_a_task);

app.route('/tasks/:taskId')
  .get(todoList.read_a_task)
  .post(todoList.update_a_task)
  .delete(todoList.delete_a_task);

app.route('/auth/register')
  .get(userHandlers.register);

app.route('/auth/sign_in')
  .get(userHandlers.sign_in);

};
