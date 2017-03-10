import { Injectable } from "@angular/core";

import { Entity } from "./references";

let phrases = [
    new Entity(1, "Applicant"),
    new Entity(2, "Household"),
    new Entity(3, "Income"),
    new Entity(4, "Assets"),
    new Entity(5, "Eligibility"),
    new Entity(6, "Determination"),
];


let phrasesPromise = Promise.resolve(phrases);


@Injectable()
export class ReferencesService {


    getAll(): Promise<Entity[]> {
        return phrasesPromise;
    }

    getPhrase(entityName: string): Promise<Entity> {
        return phrasesPromise
            .then(phrases => phrases.find(x => x.value == entityName));
    }
}

