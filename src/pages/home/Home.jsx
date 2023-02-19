import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Widget from "../../component/widget/Widget";
import Table from "../../component/table/Table";
import MeetingTable from "../../component/meetingTable/MeetingTable";
import Chart from "../../component/chart/Chart";
import Featured from "../../component/featured/Featured";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
        </div>
        <div className="charts">
          {/* <Featured /> */}
          <Chart title="Last 3 Months Meeting statistics" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Meetings</div>
          <MeetingTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
