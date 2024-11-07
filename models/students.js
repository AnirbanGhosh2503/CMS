const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rollNo: {
        type: Number,
        required: true,
        unique: true
    },
    regNo: {
        type: Number,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    disabilities: {
        type: String,
        default: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contactNo: {
        type: String,
        required: true
    },
    addContactNo: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    hostel: {
        isHostelResident: { type: Boolean, default: false },
        roomNumber: { type: String }, // Only if isHostelResident is true
        hostelName: { type: String } // Only if isHostelResident is true
    },
    fees: {
        tuition: { type: Number, required: true },
        hostel: { type: Number, default: 0 },
        status: { type: String, enum: ['paid', 'unpaid', 'partial'], default: 'unpaid' }
    },
    foodChoice: { type: String, enum: ['vegetarian', 'non-vegetarian', 'vegan'], default: 'vegetarian' },
    foodService: {type: String, enum:['hostel', 'canteen', 'other']},
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
