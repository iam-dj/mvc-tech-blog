const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const routes = require("./controllers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);


const app = express();
const PORT = process.env.PORT || 3005;

const hbs = exphbs.create({});

hbs.handlebars.registerHelper('isEqual', function (val1, val2, options) {
  return val1 === val2 ? options.fn(this) : options.inverse(this);
});

const sess = {
  secret: process.env.SESSION_SECRET, // random string used to create session id.
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on 3005"));
});
