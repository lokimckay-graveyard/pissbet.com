import Link from "next/link";
import Icon from "../icon";
import { cssJoin } from "../../lib/array";
import styles from "./button.module.scss";

const Button = ({
  label,
  onClick,
  href,
  as,
  icon,
  style,
  styling,
  className,
  iconClass,
  disabled,
  external,
}) => {
  const LinkWrapper = ({ children }) => {
    return href && !disabled ? (
      external ? (
        <a href={href}>{children}</a>
      ) : (
        <Link href={href} as={as}>
          {children}
        </Link>
      )
    ) : (
      children
    );
  };

  const { position = "left" } = icon || {};
  const renderedIcon = (
    <Icon
      name={typeof icon === "string" && icon}
      {...icon}
      className={cssJoin([iconClass])}
    />
  );

  return (
    <LinkWrapper>
      <button
        onClick={onClick}
        className={cssJoin([
          styles.base,
          disabled && styles.disabled,
          styles[styling],
          className,
        ])}
        style={style}
        disabled={disabled}
      >
        {icon && position === "left" && renderedIcon}
        {label}
        {icon && position === "right" && renderedIcon}
      </button>
    </LinkWrapper>
  );
};

export default Button;
