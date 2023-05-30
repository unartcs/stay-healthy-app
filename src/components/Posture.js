import React, { useEffect, useState } from "react";
import "../styles/Posture.css";
import { MdElderly, MdMan2 } from "react-icons/md";

import uniqid from "uniqid";
function Posture(props) {
  const [postureAmount, setPostureAmount] = useState([]);
  const { userDefinedAmount } = props;
  const addAmount = () => {
    for (let i = 0; i < userDefinedAmount; i++) {
      setPostureAmount((postureAmount) => [
        ...postureAmount,
        {
          name: "posture",
          clicked: false,
          id: uniqid(),
        },
      ]);
    }
  };
  const toggle = (e) => {
    setPostureAmount(
      postureAmount.map((item) => {
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
    addAmount();
  }, []);
  return (
    <div className="posture-wrapper">
      <div className="posture-header">
        <h1>Fix your posture</h1>
      </div>
      <div className="posture-content">
      {postureAmount
          ? postureAmount.map((item) => {
              return (
                <div
                  className="posture-icon-wrapper"
                  onClick={() => {
                    toggle(item);
                  }}
                >
                  {item.clicked ? (
                    <MdMan2 size={40} color="blue" />
                  ) : (
                    <MdElderly size={40} />
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

export default Posture;
