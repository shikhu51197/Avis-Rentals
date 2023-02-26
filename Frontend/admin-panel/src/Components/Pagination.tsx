import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { TbPlayerTrackPrev } from "react-icons/tb";
import { TbPlayerTrackNext } from "react-icons/tb";
import { useSelector } from "react-redux";
import { carState } from "../Redux/Cars/cars.reducer";
import "../Styles/Pagination.css";

const Pagination = (
  current: number,
  count: number,
  handlePageChange: (n: number) => void
) => {
  return (
    <Flex padding={"20px"} justifyContent="center" alignItems={"baseline"}>
      <Button
        variant={"outline"}
        onClick={() => handlePageChange(current - 1)}
        margin="5px"
        isDisabled={current == 1}
        color={"red.600"}
      >
        <TbPlayerTrackPrev />
      </Button>
      <Button
        variant={"outline"}
        margin="5px"
        onClick={() => handlePageChange(1)}
        isDisabled={current == 1}
        color={"red.600"}
      >
        1
      </Button>
      <Button
        variant={"outline"}
        isDisabled
        margin="5px"
        bg="red.600"
        color={"white"}
      >
        {current}
      </Button>
      <Button
        variant={"outline"}
        margin="5px"
        onClick={() => handlePageChange(Math.ceil(count / 4))}
        isDisabled={current == Math.ceil(count / 4)}
        color={"red.600"}
      >
        {Math.ceil(count / 4)}
      </Button>
      <Button
        variant={"outline"}
        onClick={() => handlePageChange(current + 1)}
        margin="5px"
        isDisabled={current == Math.ceil(count / 4)}
        color={"red.600"}
      >
        <TbPlayerTrackNext />
      </Button>
    </Flex>
  );
};

export default Pagination;
