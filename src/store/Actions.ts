import { HORIZONTAL_VALUES, TOP_VERTICAL_VALUES, BOTTOM_VERTICAL_VALUES } from "./Constants";

export interface IData {
  topValue: string;
  downValue: string;
}

export interface IData1 {
  top1VerticalValue: string;
  top2VerticalValue: string;
}

export interface IData2 {
  donw1VerticalValue: string;
  donw2VerticalValue: string;
}

export const horizontalValues = (data: IData) =>
  ({
    type: HORIZONTAL_VALUES,
    payload: data,
  } as const);

export const topVerticalValues = (data: IData1) =>
  ({
    type: TOP_VERTICAL_VALUES,
    payload: data,
  } as const);

export const bottomVerticalValues = (data: IData2) =>
  ({
    type: BOTTOM_VERTICAL_VALUES,
    payload: data,
  } as const);
