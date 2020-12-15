const Icon = ({
  name,
  fontSize,
  size,
  colour,
  justify = "center",
  align = "center",
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent: justify,
        alignItems: align,
        fontSize,
        color: colour,
        minWidth: size,
        minHeight: size,
      }}
    >
      <i aria-hidden className={name} />
    </div>
  );
};

export default Icon;
