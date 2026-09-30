import './Button.scss';
import ButtonArrowIcon from '../../assets/icons/buttonArrowRight.svg';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ text, onClick, className = '' }: ButtonProps) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {text}
      <img src={ButtonArrowIcon} alt="" />
    </button>
  );
};
