import profileImage from "../../Assets/prfile.jpg";
function Sidebarwithimage() {
  return (
    <div className="sidebar-container">
      <img
        src={profileImage}
        alt="profie"
        style={{
          marginBottom: "-4px",
          maxWidth: "280px",
          height: "100%",
          objectFit: "cover",
          boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)"
        }}
      />
    </div>
  );
}

export default Sidebarwithimage;
