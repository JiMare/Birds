import React, { ReactElement } from "react";
import type { NextPage } from "next";
import FormFilter from "../components/filter/FormFilter";

const Filter: NextPage = (): ReactElement => {
  return (
    <div className="main">
      <h1 className="title">Filtruj: </h1>
      <FormFilter />
    </div>
  );
};

export default Filter;
