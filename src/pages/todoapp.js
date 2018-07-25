import React from 'react';
import {view as Todos} from '../components/todos/index';
import {view as Filter} from '../components/filter/index';

function TodoApp() {
    return (
        <div>
            <div>热更新已配置好</div>
            <Todos/>
            <Filter/>
        </div>
    );
}

export default TodoApp;
