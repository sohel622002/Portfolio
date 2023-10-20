import Homemain from "../components/Homemain/Homemain";
import Sidebarwithimage from "../components/Sidebarwithimage/Sidebarwithimage";

function Home() {
  return (
    <>
      <div className="main">
        <Sidebarwithimage/>
        <Homemain/>
      </div>
    </>
  );
}

export default Home;
