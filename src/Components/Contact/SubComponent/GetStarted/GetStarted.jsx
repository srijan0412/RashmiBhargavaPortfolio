import "./GetStarted.css";

const GetStarted = ({ data }) => {
  return (
    <div className="get_started_section">
      <div className="get_started_data_container">
        <h1>{data.title}</h1>
        <h3>{data.subtitle}</h3>
        <p>{data.desc}</p>
        <div className="get_started_btns">
          <a href="">
            <p>BOOK APPOINTMENT</p>
            <ion-icon name="calendar-clear-outline"></ion-icon>
          </a>
          <a href="">
            <p>RASHMI's PROFILE</p>
            <ion-icon name="document-outline"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
