import cN from "classnames";
import styles from "./Paragraph.module.css";
import { ParagraphProps } from "./Paragraph.props";

const Paragraph = ({ children, size, className }: ParagraphProps) => {
  return (
    <p
      className={cN(styles.paragraph, className, {
        [styles.small]: size === "s",
        [styles.medium]: size === "m",
        [styles.large]: size === "l",
      })}
    >
      {children}
    </p>
  );
};

export default Paragraph;
