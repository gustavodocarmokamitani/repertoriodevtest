import * as S from "./DraftEditor.styles";
import save from "../assets/save.svg";
import addParagraph from "../assets/addParagraph.svg";
import textView from "../assets/textView.svg";
import { useEffect, useState } from "react";
import { Paragraph } from "./Paragraph";
import { Draft } from "../models/Draft";

const DraftEditor = () => {
  const [draft, setDraft] = useState<Draft[]>([]);
  const [paragraph, setParagraph] = useState<string>("");
  const [isViewing, setIsViewing] = useState(false);

  useEffect(() => {
    const savedDraft = localStorage.getItem("draft");
    if (savedDraft) {
      setDraft(JSON.parse(savedDraft));
    }
  }, []);

  const handleNewParagraph = () => {
    if (paragraph.trim() === "")
      return alert(
        "O campo está vazio. Digite um texto para adicionar um parágrafo."
      );

    const newParagraph: Draft = {
      id: draft.length + 1,
      text: paragraph,
    };

    setDraft((prevDraft) => {
      const updatedDraft = [...prevDraft, newParagraph];
      localStorage.setItem("draft", JSON.stringify(updatedDraft));
      return updatedDraft;
    });
    setParagraph("");
  };

  const handleViewParagraph = () => {
    setIsViewing(!isViewing);
  };

  const handleSaveDraft = () => {
    if (draft.length > 0) {
      try {
        const savedText = draft.map((item) => item.text).join("\n");
        alert("Rascunho salvo!");
      } catch (error) {
        console.error("Erro ao salvar o rascunho", error);
      }
    } else {
      alert("Não há nenhum parágrafo para salvar.");
    }
  };

  return (
    <S.DraftEditorContainer>
      <S.DraftEditorContent>
        <S.DraftEditorHeader>
          <S.HeaderItem flex={4}>
            <S.ActionButton onClick={handleNewParagraph}>
              <img src={addParagraph} />
              <span className="tooltip">Adicionar Parágrafo</span>
            </S.ActionButton>
          </S.HeaderItem>

          <S.HeaderItem flex={4}>
            <S.ActionButton onClick={handleViewParagraph}>
              <img src={textView} />
              <span className="tooltip">Visualizar Texto</span>
            </S.ActionButton>
          </S.HeaderItem>

          <S.HeaderItem flex={4}>
            <S.ActionButton onClick={handleSaveDraft}>
              <img src={save} />
              <span className="tooltip">Salvar Rascunho</span>
            </S.ActionButton>
          </S.HeaderItem>
        </S.DraftEditorHeader>

        <S.DraftEditorBody>
          <S.DraftEditor
            value={paragraph}
            onChange={(e) => setParagraph(e.target.value)}
          />
        </S.DraftEditorBody>
      </S.DraftEditorContent>

      <S.DraftViewContainer
        style={{ display: isViewing && draft.length > 0 ? "flex" : "none" }}
      >
        <S.DraftViewContent>
          {isViewing &&
            draft.length > 0 &&
            draft.map((item) => <Paragraph key={item.id} text={item.text} />)}
        </S.DraftViewContent>
      </S.DraftViewContainer>
    </S.DraftEditorContainer>
  );
};

export default DraftEditor;
