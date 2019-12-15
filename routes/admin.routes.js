const mongoose = require("mongoose");
const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const theme = require("admin-bro-theme-dark");

require("dotenv/config");

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: "/admin",
//   branding: {
//     theme,
//     logo: "https://drive.google.com/uc?id=1cet9VR9euTe1TjQWzVySTQhKDqdaleaI",
//     companyName: "Jeddah-Malls"
//   },
//   dashboard: {
//     handler: async () => {},
//     component: AdminBro.bundle("../ViralDashBoard.jsx")
//   }
});

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookiePassword: process.env.COOKIE_PASS,
  authenticate: async (email, password) => {
    let user = await User.findOne({ email: email });
    if (user) {
      let matched = await bcrypt.compareSync(password, user.password);
      if (matched && user.isAdmin) {
        return user;
      } else {
        return null;
      }
    }
  }
});

module.exports = router;
