import Spinner from "@shared/ui/Spinner/Spinner";

type Props = {
  isLoading: boolean;
  children: React.ReactNode;
};

export default function SpinnerWrapper({ isLoading, children }: Props) {
  return isLoading ? (
    <>
      {children}
      <Spinner />
      <div className="absolute top-0 left-0 w-full h-full z-[1] bg-background/50" />
    </>
  ) : (
    <>{children}</>
  );
}
