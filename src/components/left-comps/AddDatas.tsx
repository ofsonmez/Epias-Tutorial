import React, { useState } from "react";
import { Table } from "react-bootstrap";
import addTableDatas from "../../data/addTableDatas.json";

type Datas = {
  Id: number;
  Kontrat: string;
  Teklif: number;
  Data: string;
};

const AddData = () => {
  const [addKontrat, setAddKontrat] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const [kontrat, setKontrat] = useState<string>("");
  const [teklif, setTeklif] = useState<number>(0);
  const [data, setData] = useState<string>("");
  const [tableDatas, setTableDatas] = useState<Array<Datas>>(JSON.parse(JSON.stringify(addTableDatas)));

  const addNewKontrat = () => {
    setTableDatas([...tableDatas, { Id: id, Kontrat: kontrat, Teklif: teklif, Data: data }]);
    setAddKontrat(false);
  };

  return (
    <>
      <Table hover>
        <tbody>
          {tableDatas.map((x: Datas) => {
            return (
              <>
                <tr key={x.Id}>
                  <td>{x.Kontrat}</td>
                  <td>{x.Teklif}</td>
                  <td>{x.Data}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      {addKontrat && (
        <div className="row">
          <div className="col">
            <input type="number" placeholder="no giriniz." onChange={(e) => setId(+e.target.value)} />
            <input type="text" placeholder="kontrat giriniz." onChange={(e) => setKontrat(e.target.value)} />
            <input type="number" placeholder="teklif giriniz." onChange={(e) => setTeklif(+e.target.value)} />
            <input type="text" placeholder="data giriniz." onChange={(e) => setData(e.target.value)} />
            <button onClick={addNewKontrat}>Kaydet</button>
          </div>
        </div>
      )}
      <button onClick={() => setAddKontrat(true)}>Yeni Ekle</button>
    </>
  );
};

export default AddData;
