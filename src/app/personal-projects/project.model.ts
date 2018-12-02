export class Project {
    private name: String;
    private languages: String[];
    private description: String;
    private purpose: String;

    constructor(name: String, languages: String[], description: String, purpose: String) {
        this.name = name;
        this.languages = languages;
        this.description = description;
        this.purpose = purpose;
      }
}