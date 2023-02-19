import { Button } from "react-bootstrap";

export const Btn = ({ children, ...props }) => {
  return (
    <Button className="w-100" {...props}>
      {children}
    </Button>
  );
};
