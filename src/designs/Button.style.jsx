import styled from "styled-components"

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 38px;
  gap: 10px;

  font-weight: 800;
  font-size: 11px;
  line-height: 15px;

  background-color: rgba(130, 87, 229, 0);
  color: white;
  border: 1px solid #8257E5;
  border-radius: 6px;

  &:hover {
    transition: .4s;
    cursor: pointer;
    background-color: #8257e5;
  }

  &:focus {
    outline: none;
  }
`