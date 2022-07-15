import { Card } from "react-bootstrap";
import { ObjectType } from "typescript";

interface Props {
  id: Number;
  price: Number;
  category: String;
  image: string;
}
const StoreItem = ({ id, image, price, category, }: Props) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src = {image}
        height="300px"
        width="200"
        style={{
        objectFit : "cover",
        }}
      />
    </Card>
  );
};

export default StoreItem;
