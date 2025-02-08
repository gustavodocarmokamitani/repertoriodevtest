import styled from "styled-components";
import { HeaderItemProps } from "../models/HeaderItem";

export const DraftEditorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f2f2f2;

  @media (max-width: 1200px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const DraftEditorContent = styled.div`
  width: 45%;
  height: 30rem;
  border-radius: 15px;
  border: 2px solid #adadad;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  margin: 50px 0px;

  @media (max-width: 1200px) {
    width: 80%;
  }
`;

export const DraftEditorHeader = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  background: rgb(198, 216, 243);
  border-radius: 15px 15px 0px 0px;
`;

export const HeaderItem = styled.div<HeaderItemProps>`
  flex: ${(props) => props.flex};
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid rgba(173, 173, 173, 0.35);

  &:last-child {
    border-right: none;
  }
`;

export const DraftEditorBody = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 15px 15px;
  background: rgb(255, 255, 255);
`;

export const DraftEditor = styled.textarea`
  width: 40rem;
  height: 25rem;
  border-radius: 15px;
  border: none;
  padding: 10px;
  resize: none;
  font-family: "Poppins";

  &:focus {
    border: none;
    outline: none;
  }
`;

export const DraftViewContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  aling-items: center;
  max-height: 80%;
  border-radius: 15px;
  border: 2px solid #adadad;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  @media (max-width: 1200px) {
    width: 80%;
  }
`;

export const DraftViewContent = styled.div`
  width: 98%;  
  overflow-y: auto;
`;

export const FontSelect = styled.select`
  font-size: 18px;
  border-radius: 5px;
  border: none;
  background-color: transparent;
  color: #334155;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const Option = styled.option`
  color: #334155;
  border-radius: 15px;
`;

export const ActionButton = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding: 3px 10px;
  border-radius: 5px;

  img {
    width: 1.2rem;
    height: 1.2rem;
    object-fit: contain;
    position: relative;
  }

  .tooltip {
    font-size: 0.8rem;
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  &:active {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    transform: scale(1.2);
  }
`;
