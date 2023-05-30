import React, { useEffect, useState } from "react";
import "../styles/Stretch.css";
import { TbStretching } from "react-icons/tb";
import uniqid from "uniqid";
function Stretch(props) {
  const [stretchAmount, setStretchAmount] = useState([
  ]);
  const { userStretchAmount } = props;
  const addStretchAmount = () => {
    for (let i = 0; i < userStretchAmount; i++) {
      setStretchAmount((stretchAmount) => [
        ...stretchAmount,
        {
          name: "stretch",
          clicked: false,
          id: uniqid(),
        },
      ]);
    }
  };
  const toggle = (e) => {
    setStretchAmount(
      stretchAmount.map((item) => {
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
    addStretchAmount();
  }, []);
  return (
    <div className="stretch-wrapper">
      <div className="stretch-header">
        <h1>Get up and Stretch</h1>
      </div>
      <div className="stretch-content">
        {stretchAmount
          ? stretchAmount.map((item) => {
              return (
                <div
                  className="stretch-icon-wrapper"
                  onClick={() => {
                    toggle(item);
                  }}
                >
                  {item.clicked ? (
                    <TbStretching size={40} color='orange'/>
                  ) : (
                    <TbStretching size={40} />
                  )}
                  60 minutes
                </div>
              );
            })
          : "a"}
      </div>
    </div>
  );
}

export default Stretch;
