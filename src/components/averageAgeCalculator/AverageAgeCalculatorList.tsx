import { UsersSchemaType } from "../../types";

interface Props {
  users: UsersSchemaType;
  checkedNames: number[];
  handleCheckboxChange: (id: number) => void;
}

const AverageAgeCalculatorList = ({
  users,
  checkedNames,
  handleCheckboxChange,
}: Props) => {
  return (
    <div className="flex flex-1 justify-center">
      <ul className="max-h-[31.25rem] min-w-64 overflow-scroll border border-black p-4 flex flex-col gap-2">
        {users.map((user) => (
          <label
            key={user.id}
            htmlFor={`checkbox-${user.id}`}
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id={`checkbox-${user.id}`}
              checked={checkedNames.includes(user.id)}
              onChange={() => handleCheckboxChange(user.id)}
              className="mr-2"
            />
            <li className="text-sm">{user.name}</li>
          </label>
        ))}
      </ul>
    </div>
  );
};

export default AverageAgeCalculatorList;
