import useIcon from "../hooks/useIcon";

const Icon = ({ fileName }) => {
  const icon = useIcon(fileName);
  return <span className="mr-2">{icon}</span>;
};

export default Icon;
