import React, { ReactElement } from "react";
import type { NextPage } from "next";
import FormFilter from "../components/filter/FormFilter";

const Filter: NextPage = (): ReactElement => {
  return (
    <div>
      <h2>Filtruj: </h2>
      <FormFilter />
    </div>
  );
};

export default Filter;
