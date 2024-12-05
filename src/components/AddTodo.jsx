// src/components/AddTodo.jsx
import React, { useState } from "react"; // Importerer React og useState hook
import styled from "styled-components"; // Importerer styled-components for styling

// Styled-component til formularen
const Form = styled.form`
  display: flex;
  flex-direction: column; // Gør formularen vertikal
  margin: 1rem 0; // Tilføjer margin omkring formularen
`;

// Styled-component til inputfelter
const Input = styled.input`
  margin-bottom: 0.5rem; // Lægger afstand mellem inputfelterne
  padding: 0.5rem; // Indre polstring for inputfelterne
  border-radius: 5px; // Rundede hjørner
  border: 1px solid #ddd; // Lys grå kant rundt om inputfeltet
`;

// Styled-component til knappen
const Button = styled.button`
  padding: 0.5rem; // Indre polstring af knappen
  background-color: #61dafb; // Blå baggrundsfarve
  color: white; // Hvid tekstfarve
  border: none; // Ingen kant
  border-radius: 5px; // Rundede hjørner på knappen
  cursor: pointer; // Ændrer markøren til pointer (hånd) når den er over knappen

  &:hover { // Styling ved hover (når musen er over knappen)
    background-color: #21a1f1; // Skift baggrundsfarve ved hover
  }
`;

function AddTodo({ addTodo }) { // AddTodo-komponenten modtager addTodo som en prop
  // useState hook til at holde styr på form data (titel og beskrivelse)
  const [formData, setFormData] = useState({ title: "", description: "" });

  // Håndterer ændringer i inputfelterne
  const handleChange = (e) => {
    const { name, value } = e.target; // Henter navnet og værdien fra det ændrede inputfelt
    setFormData({ ...formData, [name]: value }); // Opdaterer formData ved at bruge computed property name
  };

  // Håndterer form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Forhindrer, at siden genindlæses ved form submission
    // Tjekker, om begge felter er udfyldt, før todo'en tilføjes
    if (formData.title && formData.description) {
      addTodo(formData); // Hvis addTodo er en funktion, kaldes den med formData som argument
      setFormData({ title: "", description: "" }); // Rydder inputfelterne efter submission
    }
  };

  return (
    <div>
      <h2>Add a Todo</h2> {/* Overskrift til formularen */}
      <Form onSubmit={handleSubmit}> {/* Formularen, der håndterer submit event */}
        <Input
          type="text"
          name="title" // Navnet på inputfeltet (bruges til at opdatere formData)
          placeholder="Title" // Pladsholdertekst for inputfeltet
          value={formData.title} // Sætter værdien af inputfeltet til formData.title
          onChange={handleChange} // Kalder handleChange når inputfeltet ændres
        />
        <Input
          type="text"
          name="description" // Navnet på inputfeltet (bruges til at opdatere formData)
          placeholder="Description" // Pladsholdertekst for inputfeltet
          value={formData.description} // Sætter værdien af inputfeltet til formData.description
          onChange={handleChange} // Kalder handleChange når inputfeltet ændres
        />
        <Button type="submit">Add Todo</Button> {/* Submit-knap til formularen */}
      </Form>
    </div>
  );
}

export default AddTodo; // Eksporterer AddTodo-komponenten
