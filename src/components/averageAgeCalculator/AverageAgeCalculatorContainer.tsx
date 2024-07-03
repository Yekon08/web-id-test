import { useState } from "react";
import { usersValidation } from "../../types";
import { useFetch } from "../../utils/fetcher";
import AverageAgeCalculator from "./AverageAgeCalculator";
import AverageAgeCalculatorList from "./AverageAgeCalculatorList";

const AverageAgeCalculatorContainer = () => {
  const { data, isLoading, error } = useFetch("/users");
  const [checkedNames, setCheckedNames] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    setCheckedNames((prevCheckedNames) =>
      prevCheckedNames.includes(id)
        ? prevCheckedNames.filter((n) => n !== id)
        : [...prevCheckedNames, id]
    );
  };

  const handleRender = () => {
    if (isLoading) {
      return (
        <div className="text-center">
          <p>Loading...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center">
          <p>{error}</p>
        </div>
      );
    }

    if (usersValidation.Check(data)) {
      return (
        <div className="flex">
          <AverageAgeCalculatorList
            users={data}
            checkedNames={checkedNames}
            handleCheckboxChange={handleCheckboxChange}
          />
          <AverageAgeCalculator checkedNames={checkedNames} />
        </div>
      );
    }

    return (
      <div className="text-center">
        <p>Data fetched has the wrong data type.</p>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl uppercase my-32 text-center">
        average age calculator
      </h1>
      {handleRender()}
    </div>
  );
};

export default AverageAgeCalculatorContainer;
