import { useState } from "react";
import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";
import Paragraph from "../components/Paragraph/Paragraph";
import Rating from "../components/Rating/Rating";
import Tag from "../components/Tag/Tag";
import { withMainLayout } from "../layout/MainLayout/MainLayout";

function Home() {
  const [rating, setRating] = useState(4);

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
      <Tag children={"Photoshop"} color="ghost" />
      <Tag children={"Tag"} color="red" />
      <Rating
        maxRating={5}
        rating={rating}
        onRatingChange={setRating}
        isEditable={true}
      />
    </>
  );
}

export default withMainLayout(Home);
