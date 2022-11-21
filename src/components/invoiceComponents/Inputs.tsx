import React from "react";
import {
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

type Props = {
  inputRate: number;
  setInputRate: React.Dispatch<React.SetStateAction<number>>;
  inputCustomer: string; 
  setInputCustomer: React.Dispatch<React.SetStateAction<string>>;
};

const Inputs = ({ inputRate, setInputRate, inputCustomer, setInputCustomer }: Props) => {
  const handleInputRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputRate(parseFloat(e.target.value));
  };

  const handleInputCustomer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCustomer(e.target.value);
  };

  return (
    <FormControl isRequired>
      <FormLabel></FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children="$"
        />
        <Input
          type="number"
          placeholder="Enter hourly rate"
          onChange={handleInputRate}
          value={inputRate}
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
    </FormControl>
  );
};

export default Inputs;
