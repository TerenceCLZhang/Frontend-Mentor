interface Props {
  isActive: boolean;
  changeIsActive?: () => void;
}

const Toggle = ({ isActive, changeIsActive }: Props) => {
  return (
    <button
      type="button"
      className={`w-11 h-6 rounded-full relative transition-colors duration-100 focus-red hover:opacity-75 dark:hover:opacity-90 ${
        isActive
          ? "bg-red-700 dark:bg-red-500"
          : "bg-neutral-300 dark:bg-neutral-600"
      }`}
      onClick={() => changeIsActive && changeIsActive()}
      title={
        isActive
          ? "Click to deactivate extension"
          : "Click to activate extension"
      }
      aria-label={
        isActive
          ? "Click to deactivate extension"
          : "Click to activate extension"
      }
    >
      <span
        className={`h-4 w-4 rounded-full absolute top-1/2 -translate-y-1/2 transition-all duration-100 ${
          isActive ? "left-6" : "left-1"
        } bg-neutral-0`}
      ></span>
    </button>
  );
};

export default Toggle;
