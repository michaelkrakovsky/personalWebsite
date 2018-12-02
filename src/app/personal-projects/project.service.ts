import { Project } from "./project.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ProjectService {
    
    projectsList: Project[] = [
        new Project(
            "Analysis Of Baseball Strategy", 
            ["Python", 
            "SQL", 
            "Gretl", 
            "C"], 
            "A Thesis About Aligning Team Hitting Composition With Baseball Park Dimensions",
            "The project was a fianl assignment within the course Advanced Business Decision Modelling."
        ),
        new Project(
            "Analysis Of ICO Success", 
            ["Python", 
            "C", 
            "Reddit API (pushshift.io)"], 
            "A Project Detailing The Elements To A Successful ICO",
            "The project was a final assignment within the course Data Analytics within Business."
        ), 
        new Project(
            "Personal Website", 
            ["TypeScript", 
            "CSS", 
            "Bootstrap", 
            "HTML"], 
            "A Website Illustrating My Talents, Interests, and Goals", 
            "The project was created to highlight my interest in website development and to bolster existing coding skills."
        )
    ];

    getProjects() {
        return this.projectsList.slice();
    }

    getOneProject(index: number) {
        return this.projectsList[index];
    }
}