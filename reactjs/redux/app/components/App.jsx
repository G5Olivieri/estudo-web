import React from 'react';
import List from './List.jsx';
import Form from './Form.jsx';

const App = () => (
    <div>
        <div>
            <h1>Articles</h1>
            <List />
        </div>
        <div>
            <h1>Add new article</h1>
            <Form />
        </div>
    </div>
)

export default App;