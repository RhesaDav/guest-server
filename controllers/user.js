const Users = require('../models/Users')

// class usersController {
//     static findAllUsers = async (req,res,next) => {
//         Users.find()
//         .then((data) => {
//             res.send(data)
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: "data not found"
//             })
//         })
//     }

//     static createUser = async (req,res,next ) => {
//         const result = await Users.create({
//             name: req.body.name,
//             address: req.body.address,
//             email: req.body.email,
//             phone: req.body.phone,
//             queueNumber: req.body.queueNumber
//         });
//         result
//         .save()
//         .then((data) => {
//             res.send(data)
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: err
//             })
//         })
        
//     }

//     static deleteUser = async (req,res,next) =>  {
//         Users.findByIdAndRemove(req.params.id)
//         .then((data) => {
//             if(!data) {
//                 return res.status(404).send({
//                     message: "user not found"
//                 })
//             }
//             res.send({message: "user deleted" + req.params.id})
//         })
//     }

//     static findUser = async (req,res,next) => {
//         Users.findById(req.params.id)
//         .then((data) => {
//             if(!data) {
//                 return res.status(404).send({
//                     message:'user not found'
//                 }) 
//             }
//             res.send({message: 'user found', data})
//         })
//     }
// }

// module.exports = usersController

exports.create = (req,res) => {
    if (!req.body.name) {
        res.status(400).send({message: "kurang lengkap bang"})
        return
    }
    const user = new Users ({
        name: req.body.name,
        address: req.body.address,
        // blom slesai, ke find all dl
    })
}

exports.findAll = (req,res) => {
    const name = req.query.name
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
    Tutorial.find(condition)
    then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


exports.findOne = (req,res) => {
    
}

exports.delete = (req,res) => {
    
}