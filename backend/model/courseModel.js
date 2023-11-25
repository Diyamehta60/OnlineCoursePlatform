//schema{title,description,lectures[],poster,views ,rating,videos,category,teacher,date of updoded}
const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "enter title of course"]
    },
    description: {
        type: String,
        required: [true, "enter description about the course"]
    },
    // lectSchema{lect video(url),lecture title,lect description ,lect notes}
    lectures: [
        {
            title: {
                type: String,
                required: [true, "enter lecture title"],
            },
            description: {
                type: String,
                required: [true, "enter lecture description"]
            },
            video: {
                type: String,
                required: [true, "enter the url of lecture"]
            },
            notes: {
                type: string
            }


        }
    ],
    poster:{
        type:String,
        required:[true,"give some poster for course"]
    },
    views:{
        type:Number,
        default:0
    },
    rating:{
        type:Number,
        default:1
    },
    category:{
        type:String,
        required:[true,"enter the category of course"]
    },
    createrName:{
        type:String,
        required:[true,"enter the creaters name"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }


})