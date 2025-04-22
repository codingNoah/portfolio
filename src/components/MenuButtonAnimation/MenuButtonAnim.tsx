import "./MenuButtonAnim.css";

interface Props {
  isOpen: boolean;
  toggleOpen: () => void;
}

const MenuButtonAnim = ({ isOpen, toggleOpen }: Props) => {
  return (
    <div id="nav-icon" className={isOpen ? "open" : ""} onClick={toggleOpen}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuButtonAnim;
