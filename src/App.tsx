import "./App.scss";
import Layout from "./components/Layout";
import Note from "./components/right-comps/Note";
import { Split } from "@geoffcox/react-splitter";
import { RBottom } from "./components/right-comps/RBottom";
import { useDispatch } from "react-redux";
import { bottomVerticalValues, horizontalValues, topVerticalValues } from "./store/Actions";
import ShowDatas from "./components/left-comps/ShowDatas";
import AddData from "./components/left-comps/AddDatas";

function App() {
  const dispatch = useDispatch();

  const onHorizontalSplitChanged = (primarySize: string) => {
    if (primarySize && primarySize.length > 0) {
      let restSize = 100 - parseFloat(primarySize);
      let restPercSize = "%" + restSize.toString();
      primarySize = primarySize.substring(0, primarySize.length - 1);
      primarySize = "%" + primarySize;
      // for localStorage
      localStorage.setItem("horizontalValues", JSON.stringify({ topValue: primarySize, downValue: restPercSize }));
      dispatch(horizontalValues({ topValue: primarySize, downValue: restPercSize }));
    }
  };

  const onTopVerticalSplitChanged = (primarySize: string) => {
    if (primarySize && primarySize.length > 0) {
      let restSize = 100 - parseFloat(primarySize);
      let restPercSize = "%" + restSize.toString();
      primarySize = primarySize.substring(0, primarySize.length - 1);
      primarySize = "%" + primarySize;
      // for localStorage
      localStorage.setItem(
        "topVerticalValues",
        JSON.stringify({ top1VerticalValue: primarySize, top2VerticalValue: restPercSize })
      );
      dispatch(topVerticalValues({ top1VerticalValue: primarySize, top2VerticalValue: restPercSize }));
    }
  };

  const onBottomVerticalSplitChanged = (primarySize: string) => {
    if (primarySize && primarySize.length > 0) {
      let restSize = 100 - parseFloat(primarySize);
      let restPercSize = "%" + restSize.toString();
      primarySize = primarySize.substring(0, primarySize.length - 1);
      primarySize = "%" + primarySize;
      // for localStorage
      localStorage.setItem(
        "bottomVerticalValues",
        JSON.stringify({ donw1VerticalValue: primarySize, donw2VerticalValue: restPercSize })
      );
      dispatch(bottomVerticalValues({ donw1VerticalValue: primarySize, donw2VerticalValue: restPercSize }));
    }
  };

  return (
    <Layout>
      <Split horizontal initialPrimarySize="60%" onSplitChanged={onHorizontalSplitChanged}>
        <Split initialPrimarySize="60%" onSplitChanged={onTopVerticalSplitChanged}>
          <div>
            <ShowDatas />
          </div>
          <div>
            <Note />
          </div>
        </Split>
        <Split initialPrimarySize="60%" onSplitChanged={onBottomVerticalSplitChanged}>
          <div>
            <AddData />
          </div>
          <div>
            <RBottom />
          </div>
        </Split>
      </Split>
    </Layout>
  );
}

export default App;
