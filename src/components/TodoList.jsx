// src/components/TodoList.jsx
import React from "react"; // Importerer React for at kunne oprette komponenten
import styled from "styled-components"; // Importerer styled-components for at style komponenterne

// Styled-component til ul-listen, som indeholder alle todos
const List = styled.ul`
  list-style-type: none; // Fjerner standard punkttegn for listen
  padding: 0; // Fjerner standard padding
`;

// Styled-component til hvert listeelement (li), som repræsenterer en todo
const ListItem = styled.li`
  background: #f4f4f4; // Baggrundsfarven for hvert listeelement
  margin: 0.5rem 0; // Lægger afstand til de øvrige listeelementer
  padding: 1rem; // Tilføjer indre polstring for at skabe lidt luft omkring indholdet
  border-radius: 5px; // Gør hjørnerne på hvert element rundede
`;

function TodoList({ todos = [] }) { // TodoList-komponenten modtager en liste af todos som en prop
  return (
    <div>
      <h2>Your Todos</h2> {/* En overskrift for at vise, hvad sektionen handler om */}
      <List> {/* Denne ul-element indeholder listen af todos */}
        {todos.length === 0 ? ( // Tjekker om der er nogen todos i listen
          <p>No todos available. Add some!</p> // Hvis der ikke er nogen todos, vis en besked
        ) : (
          // Hvis der er todos, kortlægger vi hvert todo til et listeelement
          todos.map((todo, index) => (
            <ListItem key={index}> {/* For hver todo opretter vi et ListItem */}
              <h3>{todo.title}</h3> {/* Vist titel for hver todo */}
              <p>{todo.description}</p> {/* Vist beskrivelse for hver todo */}
            </ListItem>
          ))
        )}
      </List>
    </div>
  );
}

export default TodoList; // Eksporterer TodoList-komponenten, så den kan bruges andre steder



