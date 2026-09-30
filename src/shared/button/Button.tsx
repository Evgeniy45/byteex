import './Button.scss';
import ButtonArrowIcon from '../../assets/icons/buttonArrowRight.svg';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  hasArrow?: boolean;
}

export const Button = ({
  text,
  onClick,
  className = '',
  hasArrow = true,
}: ButtonProps) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      <span>{text}</span>
      {hasArrow && (
        <img
          src={ButtonArrowIcon}
          alt=""
          aria-hidden="true"
          className="button__arrow"
        />
      )}
    </button>
  );
};
