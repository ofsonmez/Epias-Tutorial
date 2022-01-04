import { HORIZONTAL_VALUES, TOP_VERTICAL_VALUES, BOTTOM_VERTICAL_VALUES } from "./Constants";
import { horizontalValues, topVerticalValues, bottomVerticalValues, IData, IData1, IData2 } from "./Actions";

type Actions =
  | ReturnType<typeof horizontalValues>
  | ReturnType<typeof topVerticalValues>
  | ReturnType<typeof bottomVerticalValues>;

export const horizontalValuesReducer = (state = { topValue: "", downValue: "" }, action: Actions) => {
  switch (action.type) {
    case HORIZONTAL_VALUES: {
      console.log(action.payload.downValue);
      return {
        ...state,
        topValue: action.payload.topValue,
        downValue: action.payload.downValue,
      };
    }
    default:
      return state;
  }
};

export const topVerticalValuesReducer = (state = { top1VerticalValue: "", top2VerticalValue: "" }, action: Actions) => {
  switch (action.type) {
    case TOP_VERTICAL_VALUES: {
      return {
        ...state,
        top1VerticalValue: action.payload.top1VerticalValue,
        top2VerticalValue: action.payload.top2VerticalValue,
      };
    }
    default:
      return state;
  }
};

export const bottomVerticalValuesReducer = (
  state = { donw1VerticalValue: "", donw2VerticalValue: "" },
  action: Actions
) => {
  switch (action.type) {
    case BOTTOM_VERTICAL_VALUES: {
      return {
        ...state,
        donw1VerticalValue: action.payload.donw1VerticalValue,
        donw2VerticalValue: action.payload.donw2VerticalValue,
      };
    }
    default:
      return state;
  }
};
