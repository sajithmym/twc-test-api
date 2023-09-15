const Data_Model = require('../models/Contact_Model');

// Create a New Record
exports.create = async (req, res) => {
    const { email, name, mobile, id, gender} = req.body;

    try {
        const newRecord = new Data_Model({
            email : email,
            name : name,
            mobile : mobile,
            gender : gender,
            creator: id,
        });

        await newRecord.save();

        res.send("Success");
    } catch (error) {
        console.error("Error creating record:", error);
        res.send('Error');
    }
};

// Edit a Record
exports.edit = async (req, res) => {
    const { email, name, phone, id, gender} = req.body;

    try {
        const record = await Data_Model.findById(id);

        if (!record) {
            return res.status(404).json({ msg: "Record not found" });
        }

        record.email = email;
        record.name = name;
        record.mobile = phone;
        record.gender = gender;

        await record.save();

        res.json({ msg: "Done" });
    } catch (error) {
        console.error("Error editing record:", error);
        res.send('Error');
    }
};

// Delete a record
exports.delete = async (req, res) => {
    const id = req.body.id;

    try {
        const result = await Data_Model.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            return res.status(404).send(`No record with ID ${id} found.`);
        }

        res.send(`Record with ID ${id} deleted successfully.`);
    } catch (error) {
        console.error("Error deleting record:", error);
        res.send('Error');
    }
};

// Get records for a user
exports.get = async (req, res) => {
    const userId = req.params.id;

    try {
        const records = await Data_Model.find({ creator : userId });

        res.json({ rec: records });
    } catch (error) {
        console.error("Error fetching records:", error);
        res.send('Error');
    }
};
