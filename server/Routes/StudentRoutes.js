const express = require('express');
const router = express.Router();
const { StudentModels } = require('../models');


router.get("/all", async (req, res) => {
    try {
        const student = await StudentModels.findAll();
        res.json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const student = await StudentModels.findByPk(id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});


router.post("/post", async (req, res) => {
    try {
        const { name, email } = req.body;
        const newStudent = await StudentModels.create({ name, email });
        res.status(201).json(newStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

router.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const updatedStudent = await StudentModels.update(
            { name, email },
            { where: { id } }
        );
        res.json(updatedStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await StudentModels.destroy({ where: { id } });
        res.json({ message: "Student deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

router.patch("/patch/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const updatedFields = {};
        if (name) updatedFields.name = name;
        if (email) updatedFields.email = email;

        const updatedStudent = await StudentModels.update(updatedFields, {
            where: { id }
        });
        res.json(updatedStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;


module.exports = router;

