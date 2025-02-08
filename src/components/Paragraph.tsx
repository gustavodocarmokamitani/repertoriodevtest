interface ParagraphProps {
  text: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return <p style={{padding: "0 25px"}}>{text}</p>;
};
 