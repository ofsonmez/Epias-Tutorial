import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";

const Note = () => {
  const horizontalStoreValues = useSelector((state: RootState) => state.horizontalValuesReducer);
  const topVerticalStoreValues = useSelector((state: RootState) => state.topVerticalValuesReducer);
  const bottomVerticalStoreValues = useSelector((state: RootState) => state.bottomVerticalValuesReducer);

  return (
    <>
      <div className="warning">
        <p style={{ marginLeft: 10 }}>
          <strong>Ayarlar</strong>
          <br />
          <br />
          <strong>Yatay Pencere Değerleri:</strong>
          <br />
          {horizontalStoreValues?.topValue} {horizontalStoreValues?.downValue}
          <br />
          <strong>Üst Dikey Pencere Değerleri:</strong>
          <br />
          {topVerticalStoreValues?.top1VerticalValue} {topVerticalStoreValues?.top2VerticalValue}
          <br />
          <strong>Alt Dikey Pencere Değerleri:</strong>
          <br />
          {bottomVerticalStoreValues?.donw1VerticalValue} {bottomVerticalStoreValues?.donw2VerticalValue}
          <br />
        </p>
      </div>
    </>
  );
};

export default Note;
