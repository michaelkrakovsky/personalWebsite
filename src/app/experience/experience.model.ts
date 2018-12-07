export class ExperienceTemplate {
    private name: string;
    private shortDescription: string;
    private longDescription: string[];

    constructor(name: string, shortDescription: string, longDescription: string[]) {
        this.name = name;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
    }
}