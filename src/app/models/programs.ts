import {Exercises} from "src/app/models/Exercises"
import { ObjectUnsubscribedError } from 'rxjs';
import { AbstractFormGroupDirective } from '@angular/forms';

export interface Programs {
    id: string;
    name: string;
    exercises: Exercises[];
}