const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Student = require("./models/students.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/CMS";

main()
    .then(() => {
        console.log("connected to DB");
    }) .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}


app.get("/", (req, res) => {
    res.send("Welcome to CMS");
});

app.get("/testStudent", async (req, res) => {
    let sampleStudent = new Student({
        name: "John Doe",
        rollNo: 101,
        regNo: 20230001,
        department: "Computer Science",
        year: 3,
        disabilities: "None",
        email: "johndoe@example.com",
        contactNo: "1234567890",
        addContactNo: "0987654321",
        address: "123 Main St, Cityville",
        hostel: {
            isHostelResident: true,
            roomNumber: "A-204",
            hostelName: "Sunrise Hostel"
        },
        fees: {
            tuition: 50000,
            hostel: 20000,
            status: "paid"
        },
        foodChoice: "vegetarian",
        foodService: "hostel",
        isActive: true,
        createdAt: new Date("2023-08-15")
    });

    await sampleStudent.save();
    console.log("sample was saved");
    res.send("successful testing");
});


const port = 8080;

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});