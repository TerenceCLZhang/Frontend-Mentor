import Toggle from "./Toggle";
import type { Extension } from "./Main";

interface Props extends Extension {
  changeIsActive: (nameToToggle: string) => void;
  deleteExtension: (extenstionToDeleteName: string) => void;
}

const Extention = ({
  logo,
  name,
  description,
  isActive,
  changeIsActive,
  deleteExtension,
}: Props) => {
  return (
    <section className="bg-neutral-0 dark:bg-neutral-800 border-neutral shadow rounded-3xl p-5 flex flex-col justify-between">
      <div className="flex items-start gap-4 mb-7">
        <img src={logo} alt={`${name} logo`} />
        <div>
          <h2 className="text-xl font-bold mb-1">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={() => deleteExtension(name)}
          className="border-neutral btns focus-red focus-visible:bg-neutral-100 dark:focus-visible:bg-neutral-600 hover:bg-red-700 hover:opacity-100 hover:text-neutral-0 dark:hover:text-neutral-900 dark:hover:bg-red-500"
        >
          Remove
        </button>
        <Toggle
          isActive={isActive}
          changeIsActive={() => changeIsActive && changeIsActive(name)}
        />
      </div>
    </section>
  );
};

export default Extention;
