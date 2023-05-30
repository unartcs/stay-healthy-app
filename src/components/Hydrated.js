import React, { useEffect, useState } from "react";
import "../styles/Hydrated.css";
import { IoWaterOutline, IoWaterSharp } from "react-icons/io5";
import uniqid from "uniqid";
function Hydrated(props) {
  const [waterAmount, setWaterAmount] = useState([]);
  const { useDefinedWaterAmount } = props;
  const addWaterAmount = () => {
    for (let i = 0; i < useDefinedWaterAmount; i++) {
      setWaterAmount((waterAmount) => [
        ...waterAmount,
        {
          name: "water",
          clicked: false,
          id: uniqid(),
        },
      ]);
    }
  };
  const toggleWater = (e) => {
    setWaterAmount(
      waterAmount.map((item) => {
        if (item.id === e.id) {
          return {
            ...item,
            clicked: !item.clicked,
          };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    addWaterAmount();
  }, []);
  return (
    <div className="hydrated-wrapper">
      <div className="hydrated-header">
        <h1>Stay Hydrated</h1>
      </div>
      <div className="hydrated-content">
        {waterAmount
          ? waterAmount.map((item) => {
              return (
                <div
                  className="dropplet-wrapper"
                  onClick={() => {
                    toggleWater(item);
                  }}
                >
                  {item.clicked ? (
                    <IoWaterSharp size={40} color="blue" />
                  ) : (
                    <IoWaterOutline size={40} />
                  )}
                  30 minutes
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Hydrated;
