require("dotenv").config();
const chalk = require("chalk");
const bcrypt = require("bcryptjs");
const { Sequelize } = require("sequelize");
const User = require("../models/user");
const { ROLES } = require("../constants");

const args = process.argv.slice(2);
const email = args[0];
const password = args[1];

const seedDB = async (sequelize) => {
  try {
    console.log(`${chalk.blue("✓")} ${chalk.blue("Seed db started")}`);

    if (!email || !password) throw new Error("Missing arguments");

    const existingUser = await User.findOne({ where: { email } });
    console.log("existingUser", existingUser);
    if (existingUser) throw new Error("User collection is already seeded!");

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({
      email,
      password: hash,
      firstName: "admin",
      lastName: "admin",
      role: ROLES.Admin,
    });

    console.log(`${chalk.green("✓")} ${chalk.green("Seed db finished")}`);
  } catch (error) {
    console.log(
      `${chalk.red("x")} ${chalk.red("Error while seeding database")}`
    );
    console.log(error);
    return null;
  }
};

(async () => {
  const sequelize = new Sequelize(process.env.DATABASE_URL);

  try {
    await sequelize.authenticate();
    console.log(
      `${chalk.green("✓")} ${chalk.green("Connection established with MySQL")}`
    );

    await seedDB(sequelize);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    await sequelize.close();
  }
})();
