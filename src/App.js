import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';

const itemsFromBackend = [
  { id: uuid(), content: "01 task" },
  { id: uuid(), content: "02 task" },
  { id: uuid(), content: "03 task" }
];

const columnsFromBackend = {
  [uuid()]: {
    name: "To do",
    items: itemsFromBackend
  }
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
