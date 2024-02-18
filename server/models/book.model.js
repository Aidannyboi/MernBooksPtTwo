import {model, Schema} from "mongoose";

const BookSchema = new Schema (
    {
        Title : {
            type: String,

            required: [true, "The book has to be called something"],

            minlength: [2, "Title must be at least two characters long!"],

            maxLength: [255, "Title must be less than 255 chracters long!"]
        },

        Author : {
            type: String,

            required: [true, "The books has to have an author!"],

            minlength: [2, "The authors name must have at least 5 characters!"],

            manlength: [255, "The authors name must be less than 255 characters!"]
        },

        Pages : {
            type: Number,

            required: [true, "A book obviously has to have pages!"],

            minlength: [1, "A book has to have at least one page!"]
        },

        isAvaliable : {
            type: Boolean,

            default : false
        }
    },
    {timestamps: true}
);

const Book = model("Book", BookSchema);

export default Book;