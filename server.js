/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* Require Statements */
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
require("dotenv").config()
const path = require("path")
const app = express()

/* View Engine and Templates */
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout") // not at views root

/* Static files */
app.use(express.static(path.join(__dirname, "public")))

/* Routes */
const indexRoute = require("./routes/index")
app.use("/", indexRoute)

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`)
})
