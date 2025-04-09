// File: types/index.ts
export interface Operator {
    id: string;
    name: string;
    logo: string;
    rating: number;
    customersCount: number;
    operatesIn: string[];
    flags: string[];
    vesselsNumber: number;
    ferryTypes: {
      normal: number;
      highSpeed: number;
    };
    popularVessels: {
      name: string;
      link: string;
    }[];
    description: string[];
  }