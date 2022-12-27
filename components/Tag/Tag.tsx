import cN from "classnames";
import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";

const Tag = ({ children, className, color }: TagProps) => {
  return (
    <div
      className={cN(styles.tag, className, {
        [styles.ghost]: color === "ghost",
        [styles.green]: color === "green",
        [styles.grey]: color === "grey",
        [styles.red]: color === "red",
        [styles.purple]: color === "purple",
      })}
    >
      {children}
    </div>
  );
};

export default Tag;
