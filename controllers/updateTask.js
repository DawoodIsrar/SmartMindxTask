// const User = require("../models/user");
// const mongoose = require("mongoose");

// const updateInfo = async (req, res) => {
//   const { fname, lname, email, password } = req.body;

//   const userExist = await User.findById(req.body.id);
//   console.log(fname, lname, email, password);
//   console.log(userExist);

//   if (userExist !== null) {
//     const updateUser = await User.findByIdAndUpdate(
//       req.body.id,
//       {
//         email: email,
//         fname: fname,
//         lname: lname,
//         password: password,
//         repassword: password,
//       },
//       { new: true }
//     );

//     return res.status(200).json({
//       data: updateUser,
//       message: "User info updated successfully.",
//     });
//   } else {
//     return res.status(200).json({ message: "User does not exist." });
//   }
// };

// module.exports = updateInfo;
