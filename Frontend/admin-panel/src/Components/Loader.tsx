import React from "react";
import { Spinner } from "@chakra-ui/react";

type Props = {};

function Loader() {
  return (
    <div style={{ margin: "auto" }}>
      <Spinner
        thickness="5px"
        speed="0.9s"
        emptyColor="gray.200"
        color="red.600"
        size="xl"
      />
    </div>
  );
}

export default Loader;
