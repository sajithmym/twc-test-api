// import models
const Data_Model = require('../models/Contact_Model')
const User = require('../models/User_Model')

// Create a New Record
exports.create = async (req, res) => {
    // --------------------- // 
    const email = req.body.email;
    const name = req.body.name;
    const phone = req.body.mobile;
    const Id = req.body.id;

    let user = await User.findByPk(Id)

    await user.createRecord({
        email: email,
        name: name,
        mobile: phone,
    })

    res.send("Success")
}

// Edit a Record
exports.edit = async (req, res) => {
    // --------------------- // 
    const email = req.body.email;
    const name = req.body.name;
    const phone = req.body.phone;
    const age = req.body.age;
    const Id = req.body.id;

    Data_Model.findByPk(Id)
    .then((rec) => {
        rec.name = name,
        rec.email = email,
        rec.name = name,
        rec.phone = phone,
        rec.age = age
        rec.save().then(() => {
            res.json({
                msg : "Done"
            })
        })
    })

}

// Delete a record
exports.delete = async (req, res) => {
    // --------------------- // 
    const id = req.body.id

    try {
        const deletedRowCount = await Data_Model.destroy({
            where: { id: id },
        });

        if (deletedRowCount === 0) {
            res.send(`No record with ID ${id} found.`);
        } else {
            res.send(`Record with ID ${id} deleted successfully.`);
        }
    } catch (error) {
        console.error("Error deleting record:", error);
        res.send('Error')
    }

}

// get a record
exports.get = async (req, res) => {
    // --------------------- // 
    const userId = req.params.id;
    Data_Model.findAll({where : {ownerid : userId}})
    .then(records => {
      res.json({
        rec : records
      })
    }) 
    .catch(err => {
      const error = new Error(err);
    });
}