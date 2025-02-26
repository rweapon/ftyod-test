import { useGetMatchesMutation } from "@entities/matches";
import { LayoutHeader } from "@widgets/header";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  const [getMatches, { isLoading, isError }] = useGetMatchesMutation();

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <>
      <LayoutHeader
        isLoading={isLoading}
        isError={isError}
        handleRefresh={getMatches}
      />
      <Outlet context={{ isLoading }} />
    </>
  );
}
