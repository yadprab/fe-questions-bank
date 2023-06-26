import { ButtonProps } from "./type";

function Button(props: Readonly<ButtonProps>) {
  const { onClick, children, className } = props;

  function getClassName() {
    return `yad-button yad-flex-1 yad-theme-1 ${className ?? ""}`;
  }

  const buttonClasses = getClassName();
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}

export { Button };
