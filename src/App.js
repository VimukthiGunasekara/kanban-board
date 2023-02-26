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

const onDragEnd = (result, columns, setColumns) => {
  
};

function App() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
      {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500
                        }}
                      >                      
                       
                      </div>
                    );
                  }}
                </Droppable>
          )
        })}
      </DragDropContext>
    </div>
  );
}

export default App;
