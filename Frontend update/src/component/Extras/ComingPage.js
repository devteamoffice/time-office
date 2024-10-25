import React, { useEffect, useState } from "react";
import "../../styles/comingpage.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import comingimg from "../../assets/Image/comingpage.png";

const ComingPage = () => {
  const [days, setDays] = useState(0);
  const [hour, setHour] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSeconds] = useState(0);

  const deadline = "September, 20, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHour(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  const [text] = useTypewriter({
    words: ["Soon..."],
    loop: 0,
  });

  return (
    <>
      <section className="coming-section">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6 p-4">
              <div className="text-container">
                <h1>
                  {" "}
                  Coming&nbsp;
                  <span>{text}</span>
                  <Cursor />
                </h1>

                <p>
                  Our upcoming product line will feature enhanced facial
                  recognition capabilities, providing even more accurate and
                  secure attendance tracking.
                </p>
                <div className="notify-box">
                  <input
                    type="text"
                    placeholder="Please enter your email address"
                  />
                  <button>Notify Me</button>
                </div>

                {/* ****************************************CountDown******************** */}

                <section className="count-down">
                  <div className="containr-fluid">
                    <div className="row">
                      <div className="col-md-3 my-2 ">
                        <div className="countdown-inner">
                          <h3>{days < 10 ? "0" + days : days}</h3>
                          <span className="text"> Days </span>
                        </div>
                      </div>
                      <div className="col-md-3 my-2">
                        <div className="countdown-inner">
                          <h3>{hour < 10 ? "0" + hour : hour}</h3>
                          <span className="text"> hours </span>
                        </div>
                      </div>
                      <div className="col-md-3 my-2">
                        <div className="countdown-inner">
                          <h3>{mins < 10 ? "0" + mins : mins}</h3>
                          <span className="text"> Minutes </span>
                        </div>
                      </div>
                      <div className="col-md-3 my-2">
                        <div className="countdown-inner">
                          <h3>{secs < 10 ? "0" + secs : secs}</h3>
                          <span className="text"> Seconds </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="col-md-6 px-4">
              <div className="outer-coming2">
                <img src={comingimg} alt="" />
                <div className="inncer-comingsec-2">
                  <p>Computerized Time Attendance Device</p>
                  <button>View More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComingPage;
