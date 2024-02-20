import "./AddProject.css";

export default function AddProject() {
  async function handleProjectAddListner(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProject = {};
    for (let [key, value] of formData) {
      newProject[key] = value;
    }
    newProject.techs = newProject.techs.split(" ");
    const res = await fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newProject),
    });
    if(!res.ok) throw new Error("There is some Error Posting Project")
  }
  return (
    <form onSubmit={handleProjectAddListner}>
      <div className="Addproject-container">
        <div className="project-name-input">
          <h3>Project Name :</h3>
          <input type="text" name="project_name" />
        </div>
        <div className="project-name-input">
          <h3>Project Desc :</h3>
          <input type="text" name="desc" />
        </div>
        <div className="project-name-input">
          <h3>Project Image URL :</h3>
          <input type="url" name="project_image" />
        </div>
        <div className="project-name-input">
          <h3>Project Techs :</h3>
          <input type="text" name="techs" />
        </div>
        <div className="project-name-input">
          <h3>Live At URL :</h3>
          <input type="url" name="liveAt" />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
}
