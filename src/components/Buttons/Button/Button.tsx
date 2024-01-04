import styles from './Button.module.css'

type ButtonType = {
  buttonText: string;
  className: string;
  buttonType: "submit" | "button";
  disabled?: boolean;
  onClick?: () => void;
  blogId?: string;
}

const Button = ({ buttonText , className, buttonType,  onClick, blogId }: ButtonType) => {

  return (
      <button type={buttonType} className={styles[className]} onClick={onClick}> {buttonText} </button> 
  );
 
}

export default Button;