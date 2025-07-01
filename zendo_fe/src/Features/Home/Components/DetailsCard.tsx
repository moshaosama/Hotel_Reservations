import { CiFlag1 } from "react-icons/ci";
import Card from "../../../Components/Card";
import { cn } from "../../../libs/cn";
import Container from "../../../Styles";

const DetailsCard = () => {
  return (
    <>
      <div className={cn(Container, "flex justify-between gap-3 ")}>
        <Card
          Icon={<CiFlag1 />}
          Description="Find best travel services and book them instantly"
          Header="You'll never roam alone"
        />

        <Card
          Icon={<CiFlag1 />}
          Description="Find best travel services and book them instantly"
          Header="You'll never roam alone"
        />
        <Card
          Icon={<CiFlag1 />}
          Description="Find best travel services and book them instantly"
          Header="You'll never roam alone"
        />
      </div>
    </>
  );
};

export default DetailsCard;
