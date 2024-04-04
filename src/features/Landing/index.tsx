"use client";
import { Container } from "@mantine/core";
import { Hero } from "./Hero";
import dynamic from "next/dynamic";
// import { Map } from "@/components/Map";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export const Landing = () => {
  return (
    <>
      <Hero />
      <Container mt="-3rem" px="1rem" mb="2rem">
        <Map />
      </Container>
    </>
  );
};
