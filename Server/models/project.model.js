const mongoose = require("mongoose");

const ProjectScheme = mongoose.Schema(
  {
    project_name: {
      type: String,
      required: true,
    },
    project_image: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    techs: {
      type: Array,
    },
    liveAt: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", ProjectScheme);

module.exports = Project;

// {
//   "project_name" : "Sample Project",
//   "project_image":"https://github.com/sohel622002/my-project-screenshots/blob/master/Over%20View.png",
//   "desc":"Zyklo React App Where user can login & signup and share posts, like posts, comment on other's posts",
//   "techs":["react","css","firebase"],
//   "liveAt":"https://zyklo-react-app.web.app/"
// }

// {
//     "_id":{"$oid":"65d1cdb67e3913d487d175b4"},
//     "project_name":"Zyklo React App",
//     "project_image":"https://github.com/sohel622002/my-project-screenshots/blob/master/Over%20View.png",
//     "desc":"Zyklo React App Where user can login & signup and share posts, like posts, comment on other's posts",
//     "techs":["react","css","firebase"],
//     "liveAt":"https://zyklo-react-app.web.app/"
// }
