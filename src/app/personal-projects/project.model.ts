export class Project {
    name: String;
    languages: String[];
    description: String;
    purpose: String;
    abstract: String[];
    imageURL: String;
    gitLink: String;

    constructor(name: String, languages: String[], description: String,
                purpose: String, abstract: String[], imageURL: String, gitLink: String) {
        this.name = name;
        this.languages = languages;
        this.description = description;
        this.purpose = purpose;
        this.abstract = abstract;
        this.imageURL = imageURL;
        this.gitLink = gitLink;
      }
}