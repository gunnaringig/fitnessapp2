import {Exercises} from "src/app/models/Exercises"

export interface Programs {
    uid: string;
    name: string;
    exercises: Exercises[];
}