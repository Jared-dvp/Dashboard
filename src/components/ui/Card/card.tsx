import { Card as MuiCard } from "@mui/material";

interface CardProps {
  title: string;
  children?: React.ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <>
      <MuiCard title={title}>{children}</MuiCard>
    </>
  );
}
export default Card;
