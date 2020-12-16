import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({
  name,
  fontSize,
  size,
  colour,
  display = "flex",
  justify = "center",
  align = "center",
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        display,
        justifyContent: justify,
        alignItems: align,
        fontSize,
        color: colour,
        minWidth: size,
        minHeight: size,
      }}
    >
      <FontAwesomeIcon icon={name} />
    </div>
  );
};

export default Icon;
