import React from "react";
import { useLoading, Audio } from "@agney/react-loading";

const Content = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="50" />,
  });

  return <section style={{ color: "#94a3b8" }}>{indicatorEl}</section>;
};

export default Content;
