import * as S from "./DraftEditor.styles";
import save from "../assets/save.svg";
import addParagraph from "../assets/addParagraph.svg";
import textView from "../assets/textView.svg";
import { useState } from "react";
import { Paragraph } from "./Paragraph";

const DraftEditor = () => {
  const [draft, setDraft] = useState<{ id: number; text: string }[]>([]);
  const [paragraph, setParagraph] = useState<string>("");
  const [isViewing, setIsViewing] = useState(false);

  const handleNewParagraph = () => {
    if (paragraph.trim() === "") return;
    const newParagraph = {
      id: draft.length + 1,
      text: paragraph,
    };
    setDraft((prevDraft) => [...prevDraft, newParagraph]);
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
        console.log("Rascunho salvo: ", savedText);
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
              <span className="tooltip">
                {isViewing && draft.length > 0
                  ? "Editar Texto"
                  : "Visualizar Texto"}
              </span>
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

      {isViewing &&
        draft.length > 0 &&
        draft.map((item) => (
          <S.DraftViewContainer>
            <S.DraftViewContent key={item.id}>
              <Paragraph text={item.text} />
            </S.DraftViewContent>
          </S.DraftViewContainer>
        ))}
    </S.DraftEditorContainer>
  );
};

export default DraftEditor;
