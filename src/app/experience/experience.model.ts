export class ExperienceTemplate {
    name: string;
    shortDescription: string;
    longDescription: string[];

    constructor(name: string, shortDescription: string, longDescription: string[]) {
        this.name = name;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
    }
}