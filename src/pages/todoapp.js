import React from 'react';
import {view as Todos} from '../components/todos/index';
import {view as Filter} from '../components/filter/index';

function TodoApp() {
  return (
    <div>
      <Todos />
      <Filter />
    </div>
  );
}

export default TodoApp;
