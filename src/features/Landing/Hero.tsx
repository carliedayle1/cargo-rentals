import { Container } from "@mantine/core";
import { Slider } from "./Slider";
import classes from "./styles.module.css";
import { SearchEngine } from "@/components/SearchEngine";

export const Hero = () => {
  return (
    <Container fluid pb="4rem" className={classes.hero}>
      <Slider />
      <Container>
        <SearchEngine />
      </Container>
    </Container>
  );
};
