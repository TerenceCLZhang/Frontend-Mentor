import Extention from "./Extension";
import data from "../data.json";
import { useEffect, useState } from "react";

type DisplayIndex = 0 | 1 | 2;

export interface Extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

const Main = () => {
  const [currentDisplay, setCurrentDisplay] = useState<DisplayIndex>(0);
  const [allData, setAllData] = useState<Extension[]>(data);
  const [currentData, setCurrentData] = useState<Extension[]>(data);

  useEffect(() => {
    const filteredData: Extension[] = (() => {
      switch (currentDisplay) {
        case 1:
          return allData.filter((item) => item.isActive);
        case 2:
          return allData.filter((item) => !item.isActive);
        case 0:
        default:
          return allData;
      }
    })();

    setCurrentData(filteredData);
  }, [currentDisplay, allData]);

  const deleteExtension = (extensionToDeleteName: string) => {
    setAllData((prev) =>
      prev.filter((item) => item.name !== extensionToDeleteName)
    );
  };

  const changeIsActive = (nameToToggle: string) => {
    setAllData((prev) =>
      prev.map((item) =>
        item.name === nameToToggle
          ? { ...item, isActive: !item.isActive }
          : item
      )
    );
  };

  return (
    <main className="w-full">
      <div className="flex flex-col gap-5 items-center mb-8 lg:flex-row lg:justify-between">
        <h1 className="text-3xl font-bold">Extensions List</h1>
        <div className="flex justify-center gap-5">
          {["All", "Active", "Inactive"].map((val, index) => (
            <button
              key={index}
              type="button"
              value={index}
              onClick={(e) =>
                setCurrentDisplay(Number(e.currentTarget.value) as DisplayIndex)
              }
              className={`btns focus-red shadow border-neutral ${
                currentDisplay === index && "current-btn"
              }`}
              aria-label={`Click to see ${val} extensions`}
            >
              {val}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3 auto-rows-fr">
        {currentData && currentData.length > 0 ? (
          currentData.map((item, index) => (
            <Extention
              key={index}
              logo={item.logo}
              name={item.name}
              description={item.description}
              isActive={item.isActive}
              changeIsActive={changeIsActive}
              deleteExtension={deleteExtension}
            />
          ))
        ) : (
          <span>No extensions to show.</span>
        )}
      </div>
    </main>
  );
};

export default Main;
