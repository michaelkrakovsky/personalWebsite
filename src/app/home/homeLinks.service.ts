import { HomeLink } from "./homeLink.model";

export class HomeLinksService {

    homeLinks: HomeLink[] = [
        new HomeLink("Resume", "../resume", "Here is a look at my resume."),
        new HomeLink("Personal Projects", "../projects", "Here is a list of the coding projects I have completed."), 
        new HomeLink("Experience", "../experience", "Here is a further look into my experiences."),
        new HomeLink("Reading List", "../recommended_books", "Here is a list of recommended books I have enjoyed.")
    ];

    getProjects() {
        return this.homeLinks.slice();
    }
}