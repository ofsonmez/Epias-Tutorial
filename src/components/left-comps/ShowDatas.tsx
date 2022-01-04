import React, { useEffect, useState } from "react";
import { Button, OverlayTrigger, Popover, Table } from "react-bootstrap";
import showTableDatas from "../../data/showTableDatas.json";

type Datas = {
  Id: number;
  Kontrat: string;
  Teklif: number;
  Data: string;
};

const ShowDatas = () => {
  const [selectedKontrat, setSelectedKontrat] = useState<string>("Kontrat");
  const [id, setId] = useState<boolean>(true);
  const [kontrat, setKontrat] = useState<boolean>(true);
  const [teklif, setTeklif] = useState<boolean>(true);
  const [data, setData] = useState<boolean>(true);
  const [tableDatas, setTableDatas] = useState<Datas[]>(JSON.parse(JSON.stringify(showTableDatas)));
  let tableDataList: Datas[] = JSON.parse(JSON.stringify(showTableDatas));

  useEffect(() => {
    if (selectedKontrat == "Kontrat") {
      setTableDatas(tableDataList);
    } else {
      setTableDatas(tableDataList.filter((x) => x.Kontrat == selectedKontrat));
    }
  }, [selectedKontrat]);

  const handleChecked = () => {
    if (!id) {
      setTableDatas(tableDataList.filter((x) => x.Id));
    } else if (!kontrat) {
      setTableDatas(tableDataList.filter((x) => x.Kontrat));
    } else if (!teklif) {
      setTableDatas(tableDataList.filter((x) => x.Teklif));
    } else if (!data) {
      setTableDatas(tableDataList.filter((x) => !x.Data));
    }
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={id}
            id="flexCheckDefault"
            onChange={() => {
              setId(!id);
              handleChecked();
            }}
          />
          <label className="form-check-label">id</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={kontrat}
            id="flexCheckDefault1"
            onChange={() => {
              setKontrat(!kontrat);
              handleChecked();
            }}
          />
          <label className="form-check-label">kontrat</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={teklif}
            id="flexCheckDefault2"
            onChange={() => {
              setTeklif(!teklif);
              handleChecked();
            }}
          />
          <label className="form-check-label">teklif</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={data}
            id="flexCheckDefault3"
            onChange={() => {
              setData(!data);
              handleChecked();
            }}
          />
          <label className="form-check-label">data</label>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div className="col-4">
          <select className="form-select" onChange={(e) => setSelectedKontrat(e.target.value)}>
            <option selected>Kontrat</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div className="col-2 text-center">
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button variant="success">Settings</Button>
          </OverlayTrigger>
        </div>
      </div>

      <Table hover>
        <thead>
          <tr>
            {id && <th>Id</th>}
            {kontrat && <th>Kontrat</th>}
            {teklif && <th>Teklif</th>}
            {data && <th>Data</th>}
          </tr>
        </thead>
        <tbody>
          {tableDatas.map((x: Datas) => {
            return (
              <tr key={x.Id}>
                {id && <td>{x.Id}</td>}
                {kontrat && <td>{x.Kontrat}</td>}
                {teklif && <td>{x.Teklif}</td>}
                {data && <td>{x.Data}</td>}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ShowDatas;
