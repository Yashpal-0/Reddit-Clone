const Workout=require('../models/workoutModel');
const mongoose=require('mongoose')

//get all workouts
const getWorkouts = async (req, res) => {
    const workouts= await Workout.find({});
    res.status(200).json(workouts) 
}

//get a single workout
const getWorkout = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No workout with that id'})}
    const workout = await Workout.findById(id);
    res.status(200).json(workout)
    if(!workout){
        res.status(404).json({error: "Workout not found"})
    }
    res.status(200).json(workout)
}

//create new workout

const createWorkout = async (req, res) => {
    const {Fname, Lname, username, age, number, email, password}=req.body;
    
    try{
        const workout= await Workout.create({Fname, Lname, username, age, number, email, password});
        res.status(200).json({workout})    
    }
        catch(error){
            res.status(400).json({error: error.message})
        }
}

//delete a workout

const deleteWorkout = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No workout with that id'})}
        const workout = await Workout.findByIdAndDelete({_id:id});
    if(!workout){
        res.status(404).json({error: "Workout not found"})
    }
    res.status(200).json({mssg: "Workout deleted"})

}

//update a workout
const updateWorkout = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No workout with that id'})}
        const workout = await Workout.findOneAndUpdate({_id: id},{
            ...req.body
        })
        if(!workout){
            res.status(404).json({error: "Workout not found"})
        }
        res.status(200).json({mssg: "Workout updated"})
}

module.exports={
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}