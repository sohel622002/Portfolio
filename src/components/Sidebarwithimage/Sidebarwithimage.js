import profileImage from "../../Assets/prfile.jpg";
function Sidebarwithimage() {
  return (
    <div className="sidebar-container">
      <img
        src={profileImage}
        style={{
          marginBottom: "-4px",
          maxWidth: "280px",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default Sidebarwithimage;
