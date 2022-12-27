import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";
import Paragraph from "../components/Paragraph/Paragraph";

export default function Home() {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" className="asdfsdf" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <Paragraph
        children={
          "Students will learn not only the hard skills needed to work as a web designer, but also the soft skills that will enable them to work effectively in teams with managers, developers and marketers. Graduates can compete successfully with middle-level web designers."
        }
        size={"m"}
      />
    </>
  );
}
