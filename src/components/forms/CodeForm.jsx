import { useState } from "react";
import styled from "styled-components";

const initialState = [
  { id: 0, value: '' },
  { id: 1, value: '' },
  { id: 2, value: '' },
  { id: 3, value: '' },
  { id: 4, value: '' },
  { id: 5, value: '' },
]

const Input = styled.input`
  &:focus {
    background-color: lightblue;
  }
  &:focus-visible {
    background-color: lightblue;
  }
`;

export const CodeForm = () => {
  const [code, setCode] = useState(initialState);
  const [focused] = useState(0);

  if (code[5].value.length === 1) {
    const currentInput = document.querySelector(`input[name=input-5]`);
    currentInput.blur();
  }
  
  const inputHandler = (e, id) => {
    const data = [...code];
    const filtered = data.map(item => {
      if (item.id === id) {
        return { id, value: e.target.value }
      }
      return item;
    })
    setCode(filtered);

    if (e.target.value.length === 1) {
      const nextSibling = document.querySelector(`input[name=input-${id + 1}]`);
      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
  };

  const focusGetter = (id, current) => {
    if (id === current) {
      return true;
    }
    return false;
  }

  return (
    <form>
      <h1>Insert code Form</h1>
      {code.map(({ id, value }) => {
        return <Input key={id} type='text' name={`input-${id}`} autoFocus={focusGetter(id, focused)} value={value} onChange={(e) => inputHandler(e, id)} />
      })}
      {/* <input type="text" value={inputValue} onChange={inputHandler} />
      <button type="submit" onClick={confirmHandler}>Confirm</button> */}
    </form>
  );
};