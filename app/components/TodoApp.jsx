var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoApp = React.createClass({
  getInitialState: function() {
    return {
        todos: [
          {
            id: 1,
            text: 'Do golang'
          },{
            id: 2,
            text: 'Do React'
          },{
            id: 3,
            text: 'Do Debian'
          },{
            id: 4,
            text: 'Do Docker'
          }
        ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo '+text);
  },
  render: function() {
    var { todos }  = this.state;
    return (
      <div>
        <TodoList todos={ todos }/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
