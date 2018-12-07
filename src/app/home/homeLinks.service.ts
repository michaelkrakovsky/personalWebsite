import { HomeLink } from "./homeLink.model";

export class HomeLinksService {

    homeLinks: HomeLink[] = [
        new HomeLink("Resume", "../resume", "Here is a look at my resume which details my profesional experience, extra-curricular activies, and education."),
        new HomeLink("Personal Projects", "../projects", "Here is a list of the coding projects I have completed or am currently developing."), 
        new HomeLink("Experience", "../experience", "Here is a further look into the contents outlined in my resume."),
        new HomeLink("Reading List", "../recommended_books", "Here is a list of recommended books that have changed my outlook on the world.")
    ];

    getProjects() {
        return this.homeLinks.slice();
    }
}