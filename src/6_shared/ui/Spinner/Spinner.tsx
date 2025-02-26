import { SpinnerCircular } from "spinners-react";

export default function Spinner() {
  return (
    <SpinnerCircular
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      size={100}
      color="white"
    />
  );
}
