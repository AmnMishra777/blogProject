// const getUser = async function (req, res) {
//     //try {
//       //console.log(req.headers);
//       let userId = req.params.userId;
//       if (!ObjectId.isValid(userId)) {
//         return res
//           .status(400)
//           .send({ status: false, message: "UserId is not valid" });
//       }
  
//       let cachedUrlData = await GET_ASYNC(`${userId}`)
//       if (cachedUrlData) {
//         return res
//         .status(200)
//         .send({ status: true, message: "User profile details from cache", data: JSON.parse(cachedUrlData) });
//       }
//       else {
//           const findUserCode = await userModel.findById(userId)
//           if (findUserCode) {
//               await SET_ASYNC(`${userId}`,JSON.stringify(findUserCode))
//    return res.status(200).send({ status: true, message: "User profile details from DB", data: findUserCode })
//           } else {
//               return res.status(404).send({ status: false, message: "no data found" })
//           }
//       }
  
//       // const user = await userModel.findById(userId);
//       // if (!user) {
//       //   return res.status(400).send({ status: true, message: "User not found" }); 
//       // }
  
//   <<<<<<< HEAD
//       // // authorization
//       // if (req.headers.userId !== user._id.toString())
//       //   return res
//       //     .status(403)
//       //     .send({ status: false, msg: "You are not authorized...." });
  
     
//   //   } catch (error) {
//   //     return res.status(500).send({ status: false, message: error.message });
//   //   }
//   =======
//       return res
//         .status(200)
//         .send({ status: true, message: "User profile details", data: user });
//     } catch (error) {
//       return res.status(500).send({ status: false, message: error.message });
//     }
//   >>>>>>> 6201e2cf90d47994f5ea9513e4a90753205e07fe
//   };