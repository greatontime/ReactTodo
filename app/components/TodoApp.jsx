var React = require('react');
var TodoList = require('TodoList');
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
  render: function() {
    var { todos }  = this.state;
    return (
      <div>
        <TodoList todos={ todos }/>
      </div>
    )
  }
});

module.exports = TodoApp;
