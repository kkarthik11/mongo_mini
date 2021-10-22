const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://kknew:kknew@cluster0.vgbbl.mongodb.net/mongo_mini?retryWrites=true&w=majority", () => {
//     console.log("db connected");
// });


const ModelSchema = new mongoose.Schema({
    Description: {
        type: String,
        required: true,
    },
    Completed: {
        type: Boolean,
        required: true,
    },
});

const task = mongoose.model("Task", ModelSchema);


const Task = new task({
    Description: "Time for Dinner",
    Completed: false
});

//Create();

async function Create() {

    try {
        mongoose.connect("mongodb+srv://kknew:kknew@cluster0.vgbbl.mongodb.net/mongo_mini?retryWrites=true&w=majority").then(() => {
            console.log("db connected");
        });


        await Task.save();
        console.log("Task added");

    } catch (error) {
        console.log(error);

    } finally {
        mongoose.connection.close().then(console.log("Connection Closed"));
    }

}

//Update();

async function Update() {

    try {
        mongoose.connect("mongodb+srv://kknew:kknew@cluster0.vgbbl.mongodb.net/mongo_mini?retryWrites=true&w=majority").then(() => {
            console.log("db connected");
        });

        const filter = { Description: 'Chef menu' };
        const update = { Completed: false };
        await task.findOneAndUpdate(filter, update, { new: true });
        console.log("Task Updated");

    } catch (error) {
        console.log(error);
    } finally {
        mongoose.connection.close().then(console.log("Connection Closed"));
    }
}

//Delete();

async function Delete() {

    try {
        mongoose.connect("mongodb+srv://kknew:kknew@cluster0.vgbbl.mongodb.net/mongo_mini?retryWrites=true&w=majority").then(() => {
            console.log("db connected");
        });


        await task.deleteOne({ _id: "613e0d606aa9111e6b635f37" });
        console.log("DOC DELETED");


    } catch (error) {
        console.log("UNO?");
    } finally {
        mongoose.connection.close().then(() => {
            console.log("Connection Closed");
        })
    }
}



Read();

async function Read() {
    try {
        mongoose.connect("mongodb+srv://kknew:kknew@cluster0.vgbbl.mongodb.net/mongo_mini?retryWrites=true&w=majority").then(() => {
            console.log("db connected");
        });



        const OUT = await task.find({ Completed: false })
        console.log(OUT);





    } catch (error) {
        console.log("UNO?");
    } finally {
        mongoose.connection.close().then(() => {
            console.log("Connection Closed");
        })
    }
}