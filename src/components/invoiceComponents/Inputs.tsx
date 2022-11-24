import React from "react";
import {
  Input,
  FormLabel,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

type Props = {
  setInputRate: React.Dispatch<React.SetStateAction<number>>;
  inputCustomer: string;
  setInputCustomer: React.Dispatch<React.SetStateAction<string>>;
};

const Inputs = ({ setInputRate, inputCustomer, setInputCustomer }: Props) => {
  const handleInputRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (isNaN(value)) return;
    setInputRate(value);
  };

  const handleInputCustomer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCustomer(e.target.value);
  };

  return (
    <>
      <FormLabel></FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children="Kr"
        />
        <Input
          type="number"
          placeholder="Enter hourly rate"
          onChange={handleInputRate}
        />
      </InputGroup>
      <br />
      <FormLabel></FormLabel>
      <Input
        type="text"
        placeholder="Customer name"
        onChange={handleInputCustomer}
        value={inputCustomer}
      />
    </>
  );
};

export default Inputs;
