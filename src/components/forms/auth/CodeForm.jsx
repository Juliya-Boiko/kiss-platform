import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { Notify } from 'notiflix';

const initialState = [
  { id: 0, value: '' },
  { id: 1, value: '' },
  { id: 2, value: '' },
  { id: 3, value: '' },
  { id: 4, value: '' },
  { id: 5, value: '' },
]

const Code = styled.div`
  display: flex;
  align-items: center;
  margin: -3px -3px 20px -3px;
`;

const Input = styled.input`
  width: calc((100% / 6) - 6px);
  padding: 14px;
  margin: 3px;
  text-align: center;
  outline: none;
  border: 0.670481px solid #CED2DB;
  border-radius: 3.3524px;
  font-weight: 400;
  font-size: 14px;
  color: #B6BCC9;
  &:focus {
    outline: 1px solid ${p => p.theme.colors.brand.green};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 24px;
  }
`;

export const CodeForm = ({ verificationToken }) => {
  const navigate = useNavigate();
  const [code, setCode] = useState(initialState);
  const [focused] = useState(0);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const every = code.every(item => item.value.length === 1);
    every ? setValid(true) : setValid(false);
  }, [code]);

  if (code[5].value.length === 1) {
    const currentInput = document.querySelector(`input[name=input-5]`);
    currentInput.blur();
  }

  const inputHandler = (e, id) => {
    const number = e.target.value;
    if (isNaN(+number)) {
      return;
    }

    if (number.length > 1) {
      return;
    }

    const updated = [...code].map(item => {
      return item.id === id ? { id, value: number } : item;
    })
    setCode(updated);

    if (number.length === 1) {
      const nextSibling = document.querySelector(`input[name=input-${id + 1}]`);
      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const value = code.map(item => item.value).join('');
    if (value === verificationToken) {
      navigate('/change-password');
    } else {
      Notify.failure("Code dont match");
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <Code>
        {code.map(({ id, value }) => {
          return <Input key={id} type='text' name={`input-${id}`} autoFocus={id === focused ? true : false} value={value} onChange={(e) => inputHandler(e, id)} />
        })}
      </Code>
      <ButtonPrimary type="submit" disabled={!valid} title="Send Code" width="100%" />
    </form>
  );
};