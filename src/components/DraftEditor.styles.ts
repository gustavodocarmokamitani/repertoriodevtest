import styled from "styled-components";
import { HeaderItemProps } from "../models/HeaderItem";

export const DraftEditorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
`;

export const DraftEditorContent = styled.div`
  width: 85%;
  height: 75%;
  border-radius: 15px;
  border: 2px solid #adadad;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

export const DraftEditorHeader = styled.div`
  height: 6%;
  width: 100%;
  display: flex;
  background:rgb(214, 225, 241);
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
  height: 94%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 15px 15px;
  background: rgb(255, 255, 255);
`;

export const DraftEditor = styled.textarea`
  width: 75vw;
  height: 55vh;
  border-radius: 15px;
  border: none;
  padding: 20px;
  resize: none;

  &:focus {
    border: none;
    outline: none;
  }
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

  img {
    width: 1.2rem; 
    height: 1.2rem;
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
`;
