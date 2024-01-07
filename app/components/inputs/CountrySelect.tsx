"use client";

import React from "react";
import select from "react-select";
import { StringMappingType } from "typescript";

export type countrySelectValue = {
  flag: string;
  label: string;
  latlang: number[];
  reagion: string;
  value: string;
};

const CountrySelect = () => {
  return <div>CountrySelect</div>;
};

export default CountrySelect;
