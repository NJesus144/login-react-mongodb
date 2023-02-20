import { Button } from "react-bootstrap";

export const Btn = ({ children, ...props }) => {
  return (
    <Button className="w-100 p-2" {...props}>
      {children}
    </Button>
  );
};
