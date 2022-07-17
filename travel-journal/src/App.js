import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card {...item} />;
  });

  return (
    <div>
      <Header />
      <section>{cards}</section>
    </div>
  );
}
