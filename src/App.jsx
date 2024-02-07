import { useState } from "react";
import "./App.css";

const App = () => {
  const [buttonActive, setButtonActive] = useState(false);

  const handleButtonClick = () => {
    if (!buttonActive) {
      setButtonActive(!buttonActive);
      console.log("Button clicked");
      setTimeout(() => {
        setButtonActive(false);
      }, 4000);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#2a3439",
      }}
    >
      <div>
        <div className="button" onClick={() => handleButtonClick()}>
          <div
            className="button-text"
            style={{ animationName: buttonActive ? "outText" : "inText" }}
          >
            Ship Order
          </div>
          <div
            className="button-box"
            style={{ animationName: buttonActive ? "boxAnim" : "" }}
          >
            <div className="box-line"></div>
          </div>
          <div
            className="button-truck"
            style={{ animationName: buttonActive ? "truckAnim" : "" }}
          >
            <div className="truck-bed"></div>
            <div className="truck-mid"></div>
            <div className="truck-cabin">
              <div className="truck-windshield">
                <div className="windshield-line-1"></div>
                <div className="windshield-line-2"></div>
              </div>
              <div className="headlight-1"></div>
              <div className="headlight-2"></div>
            </div>
            <div
              className="headlight-glow-1"
              style={{ animationName: buttonActive ? "lightAnim" : "" }}
            ></div>
            <div
              className="headlight-glow-2"
              style={{ animationName: buttonActive ? "lightAnim" : "" }}
            ></div>
          </div>
          <div
            className="lines"
            style={{ animationName: buttonActive ? "moveLeft" : "" }}
          >
            <div
              className="left-lines"
              style={{ animationName: buttonActive ? "fadeIn" : "" }}
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div
              className="right-lines"
              style={{ animationName: buttonActive ? "fadeIn" : "" }}
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div
            className="order-text"
            style={{ animationName: buttonActive ? "fadeInOut" : "" }}
          >
            Order Shipped ✅
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
