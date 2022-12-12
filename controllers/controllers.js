const models = require("../model/model");

const getAllTasks = async (req, res) => {
  try {
        const Task = await models.find({});
        res.status(200).json({ data: Task, no_of_Tasks: Task.length });
  } catch (error) {
    res.json(404).json({ masg: error });
  }

//   res.send("all data will be here");
};
const getTask = async (req, res) => {
    const id=req.query.Id;
    try {
        const Task = await models.findById(id);
       res.status(200).json({ data: Task});
    } catch (error) {
        res.json(404).json({ masg: error });
    }
  
};

const createTask = async (req, res) => {
// console.log(req.query);
  try {
      const Task = await models.create(req.body);
      res.status(200).json({ data: Task });
  } catch (error) {
     res.json(404).json({ masg: error });
  }
    
 
};

const updateTask = async (req, res) => {
    const id=req.query.Id;
    const data=req.body;
    // const options={new:true};
    try {
       const Task = await models.findByIdAndUpdate(id, data);
       res.status(200).json({ data: Task });
    } catch (error) {
       res.json(404).json({ masg: error });
    }
   
//   res.send("upadted data here");
};

const deleteTask =async (req, res) => {
    const id=req.query.Id;
    try {
          const Task = await models.findByIdAndDelete(id);
          res.status(200).send(`Task with id ${id} is deleted `);
    } catch (error) {
       res.json(404).json({ masg: error });
    }

};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
