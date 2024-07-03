import BirthdayCake from "../../assets/birthdayCake.svg";
import { averageValidation } from "../../types";
import { useFetch } from "../../utils/fetcher";
import { calculateAge } from "../../utils/utils";

interface Props {
  checkedNames: number[];
}

const AverageAgeCalculator = ({ checkedNames }: Props) => {
  console.log(checkedNames);
  const { data, isLoading, error } = useFetch(`/average?ids=[${checkedNames}]`);
  console.log("data: ", data);
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

    if (averageValidation.Check(data)) {
      return (
        <>
          <p className="text-3xl font-bold">
            {checkedNames.length === 0
              ? "Veuillez selectionner des utilisateurs"
              : `${calculateAge(data.average)} ans`}
          </p>
        </>
      );
    }

    return (
      <div className="text-center">
        <p>Data fetched has the wrong data type.</p>
      </div>
    );
  };

  return (
    <div className="flex flex-1 justify-center items-center flex-col text-center">
      <img src={BirthdayCake} alt="birthday cake" className="w-24 h-24" />
      <p className="text-xl my-6 max-w-60">
        Âge moyen des personnes sélectionnées
      </p>
      {handleRender()}
    </div>
  );
};

export default AverageAgeCalculator;
