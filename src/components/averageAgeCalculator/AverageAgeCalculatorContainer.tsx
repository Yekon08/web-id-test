import { usersValidation } from "../../types";
import { useFetch } from "../../utils/fetcher";
import AverageAgeCalculator from "./AverageAgeCalculator";
import AverageAgeCalculatorList from "./AverageAgeCalculatorList";

const AverageAgeCalculatorContainer = () => {
  const url =
    "https://infallible-tereshkova-717266.netlify.app/.netlify/functions/server/users";
  const { data, isLoading, error } = useFetch(url, usersValidation);

  console.log({ data });

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

    return (
      <div className="flex">
        <AverageAgeCalculatorList />
        <AverageAgeCalculator />
      </div>
    );
  };

  return (
    <>
      <h1 className="text-2xl uppercase text-lightBlack my-32 text-center">
        average age calculator
      </h1>
      {handleRender()}
    </>
  );
};

export default AverageAgeCalculatorContainer;
