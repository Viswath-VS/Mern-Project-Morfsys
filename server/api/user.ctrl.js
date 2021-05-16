import { User } from "../model/userSchema.js";
import bcrypt from "bcrypt";
import { validateUser, validateAuth } from "../middleware/validation.js";

export default class UsersDAO {
  //   function to add new user to database
  static async addUser(req, res) {
    try {
      let { error } = await validateUser(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      let user = await User.findOne({ email: req.body.email });
      if (user) return res.status(400).send("User already registered.");
      user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      await user.save();

      const token = user.getToken();
      res.send(token);
    } catch (error) {
      res.send(error.message);
    }
  }

  //   function to login existing user.
  static async loginUser(req, res) {
    try {
      const { error } = await validateAuth(req.body);
      if (error) return res.status(400).send(error.details[0].message);
      let user = await User.findOne({ email: req.body.email });
      if (!user) return res.status(400).send("Invalid email or Password.");

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!validPassword) return res.status(400).send("Invalid Password.");
      const token = user.getToken();
      res.send(token);
      
    } catch (error) {
      res.send(error.message);
    }
  }

  //   function to check authorization of user;
  static async authUser(req, res) {
    console.log("user is verified");
    res.status(200).send("is authorized");
  }
}
