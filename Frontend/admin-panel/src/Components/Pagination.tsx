import React from "react";
import { Button } from "@chakra-ui/react";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";
import { useSelector } from "react-redux";
import { carState } from "../Redux/Cars/cars.reducer";

type PropType = {
  current: number;
  handlePageChange: (n: number) => void;
};

const Pagination = (current: number, handlePageChange: (n: number) => void) => {
  return (
    <div>
      <Button variant={"outline"} onClick={() => handlePageChange(current - 1)}>
        <GrCaretPrevious />
      </Button>
      <Button variant={"outline"} isDisabled>
        {current}
      </Button>
      <Button variant={"outline"} onClick={() => handlePageChange(current + 1)}>
        <GrCaretNext />
      </Button>
    </div>
  );
};

export default Pagination;
