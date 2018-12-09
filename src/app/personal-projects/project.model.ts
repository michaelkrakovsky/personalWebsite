export class Project {
    name: String;
    languages: String[];
    description: String;
    purpose: String;

    constructor(name: String, languages: String[], description: String, purpose: String) {
        this.name = name;
        this.languages = languages;
        this.description = description;
        this.purpose = purpose;
      }
}