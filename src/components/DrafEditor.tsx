import * as S from "./DraftEditor.styles";
import save from "../assets/save.svg";
import addParagraph from "../assets/addParagraph.svg";
import textView from "../assets/textView.svg";

const DraftEditor = () => {
  return (
    <S.DraftEditorContainer>
      <S.DraftEditorContent>
        <S.DraftEditorHeader>
          <S.HeaderItem flex={1}>
            <S.FontSelect>
              <S.Option value="14">14px</S.Option>
              <S.Option value="16">16px</S.Option>
              <S.Option value="18">18px</S.Option>
              <S.Option value="20">20px</S.Option>
            </S.FontSelect>
          </S.HeaderItem>

          <S.HeaderItem flex={4}>
            <S.ActionButton>
              <img src={addParagraph} />
              <span className="tooltip">Adicionar Parágrafo</span>
            </S.ActionButton>
          </S.HeaderItem>

          <S.HeaderItem flex={4}>
            <S.ActionButton>
              <img src={textView} />
              <span className="tooltip"></span>
            </S.ActionButton>
          </S.HeaderItem>

          <S.HeaderItem flex={4}>
            <S.ActionButton>
              <img src={save} />
              <span className="tooltip">Salvar Rascunho</span>
            </S.ActionButton>
          </S.HeaderItem>
        </S.DraftEditorHeader>

        <S.DraftEditorBody>
          <S.DraftEditor />
        </S.DraftEditorBody>
      </S.DraftEditorContent>
    </S.DraftEditorContainer>
  );
};

export default DraftEditor;
