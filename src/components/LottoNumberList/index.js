import { useState } from "react";

import { LottoNumberControl } from "../LottoNumberControl";
import { LottoNumberItem } from "../LottoNumberItem";

import "./style.css";

export const LottoNumberList = ({ onSelect }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const saveNumbers = (newNum) => {
    setSelectedNumbers([...selectedNumbers, newNum]);
  };

  const removeNumbers = (newNum) => {
    const newNumbers = selectedNumbers.filter((item) => item !== newNum);
    setSelectedNumbers(newNumbers);
  };
  const onResetLottoItems = () => {
    const newItem = [...OriginalLottoItems];
    setSelectedNumbers([])
    setLottoItem(OriginalLottoItems)
  }
  const OriginalLottoItems = Array.from(new Array(45), (v, i) => (
    <LottoNumberItem
      key={i + 1}
      lottoNumber={i + 1}
      saveNumbers={saveNumbers}
      removeNumbers={removeNumbers}
      selectedNumbers={selectedNumbers}
    />
  ));
  const [LottoItem, setLottoItem] = useState([...OriginalLottoItems])

  return (
    <div className="LottoNumberList">
      <div className="LottoNumber">{LottoItem}</div>
      <LottoNumberControl
        selectedNumbers={selectedNumbers}
        onSelect={onSelect}
        onReset={onResetLottoItems}
      />
    </div>
  );
};
