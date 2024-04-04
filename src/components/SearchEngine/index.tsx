import { PRIMARY_GRADIENT } from "@/const";
import { Button, Center, Container, Flex } from "@mantine/core";
import classes from "./searchengine.module.css";
import { SelectRegion } from "../SelectRegion";
import { SelectCity } from "../SelectCity";
import { SelectCarMake } from "../SelectCarMake";
import { SelectDate } from "../SelectDate";
import { notifications } from "@mantine/notifications";

export const SearchEngine = () => {
  return (
    <Container className={classes.container}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "sm", sm: "lg" }}
        justify="center"
        align={{ base: "stretch", sm: "flex-end" }}
      >
        <SelectRegion />
        <SelectCity />
        <SelectCarMake />
        <SelectDate label="Pick Up Date" />
        <SelectDate label="Return Date" />
      </Flex>
      <Center mt="1rem">
        <Button
          variant="gradient"
          gradient={PRIMARY_GRADIENT}
          w={{ base: "200px", sm: "300px", md: "500px" }}
          onClick={() =>
            notifications.show({
              title: "Default notification",
              message: "Hey there, your code is awesome! 🤥",
            })
          }
        >
          Search Cars
        </Button>
      </Center>
    </Container>
  );
};
