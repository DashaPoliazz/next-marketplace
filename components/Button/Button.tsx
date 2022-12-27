import cN from "classnames";
import styles from "./Button.module.css";
import ArrowIcon from "./Vector.svg";
import { ButtonProps } from "./Button.props";

const Button = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cN(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cN(styles.arrow, {
            [styles.down]: arrow === "down",
            [styles.right]: arrow === "right",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
