import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { TbPlayerTrackPrev } from "react-icons/tb";
import { TbPlayerTrackNext } from "react-icons/tb";
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
        fontWeight="bold"
      >
        <TbPlayerTrackPrev />
      </Button>
      <Button
        variant={"outline"}
        margin="5px"
        onClick={() => handlePageChange(1)}
        isDisabled={current == 1}
        color={"red.600"}
        fontWeight="bold"
      >
        1
      </Button>
      <Button
        variant={"outline"}
        isDisabled
        margin="5px"
        bg="red.600"
        color={"white"}
        fontWeight="bold"
      >
        {current}
      </Button>
      <Button
        variant={"outline"}
        margin="5px"
        onClick={() => handlePageChange(Math.ceil(count / 4))}
        isDisabled={current >= Math.ceil(count / 4)}
        color={"red.600"}
        fontWeight="bold"
      >
        {Math.ceil(count / 4)}
      </Button>
      <Button
        variant={"outline"}
        onClick={() => handlePageChange(current + 1)}
        margin="5px"
        isDisabled={current >= Math.ceil(count / 4)}
        color={"red.600"}
        fontWeight="bold"
      >
        <TbPlayerTrackNext />
      </Button>
    </Flex>
  );
};

export default Pagination;
