import Hero from "@/components/Hero";
import List from "@/components/List";
import React from "react";

function index() {
  const fetchbackend = () => {
    fetch("/api/handler")
  }
  return (
    <>
      <Hero />
      <List />
    </>
  );
}

export default index;
