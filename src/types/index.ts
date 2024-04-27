import * as yup from "yup";

export interface FilterObject {
  biggestPrice: boolean;
  byDistance: boolean;
  lowestPrice: boolean;
  mostRecent: boolean;
  thirtyDaysAgo: boolean;
}

export const filterValidation = yup.object().shape({
  byDistance: yup.boolean(),
  biggestPrice: yup.boolean(),
  lowestPrice: yup.boolean(),
  mostRecent: yup.boolean(),
  thirtyDaysAgo: yup.boolean(),
});

export interface Student {
  cell: string;
  dob: {
    age: number;
    date: string;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: string;
  };
  location: {
    city: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    country: string;
    postcode: number;
    state: string;
    street: {
      name: string;
      number: number;
    };
    timezone: {
      description: string;
      offset: string;
    };
  };
  login: {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: {
    age: number;
    date: string;
  };
}

export interface User {
  id: string;
  name: string;
  age: string;
  surName: string;
  email: string;
}