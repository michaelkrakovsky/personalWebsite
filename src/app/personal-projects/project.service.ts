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
            "Aligning Team Hitting Composition With Ball Park Dimensions",
            "The project was a fianl assignment within the course Advanced Business Decision Modelling.", 
            [
                `Baseball is a sport played by two types of individuals: the players and the statisticians. After the publication of Michael Lewis’s Moneyball, the sport has evolved into a game oriented in statistical analysis and evidence-based decision making. Players are no longer selected solely on one’s intuition. Today’s game now requires an extensive look into a player’s past performance. Individuals who were overlooked by conventional scouting methods are no longer overlooked by a robust analysis based in math.`, 
                `The project looked to examine the basic statistical measures that dictate the outcome of a baseball game. Furthermore, it analysed other indicators that may not be as obvious. First, a baseline model was created to determine the best predictors of a winning team. Second, there was an attempt to show the impact of the team payroll and fan attendance on winning percentage. Finally, there was an attempt to identify the impact of ‘Slugging’ strategies on a team’s ability to win games. The knowledge acquired from the models yielded valuable information indicating the likelihood of a team to win.`
            ], 
            "https://m.media-amazon.com/images/M/MV5BODM1NDMxMTI3M15BMl5BanBnXkFtZTcwMDAzODY1Ng@@._V1_CR0,53,560,315_AL_UX477_CR0,0,477,268_AL_.jpg", 
            "https://github.com/michaelkrakovsky/BaseballAnalytics"
        ),
        new Project(
            "Analysis Of ICO Success", 
            ["Python", 
            "C", 
            "Reddit API (pushshift.io)"], 
            "A Project Detailing The Elements To A Successful ICO",
            "The project was a final assignment within the course Data Analytics within Business.", 
            [
                `Accurately predicting if a given ICO will successfully reach its funding goal would be extremely valuable for both potential 
                investors and the organizers of the ICO itself, as noted in the “Business Implications” section.  However, unlike for traditional 
                financial securities or even more established cryptocurrencies, there is relatively minimal quantitative data available for ICO 
                tokens on which to base investment decisions due to the premature nature of the firms raising funds and of the cryptocurrency 
                market in and of itself. Due to this financial ambiguity, ICO tokens, perhaps unlike larger established coins, are heavily influenced 
                by attention and marketing surrounding the ICO. But, without any proven measures to track a coin’s popularity, pre-ICO investors 
                must rely on accumulated knowledge and domain expertise to decipher probable ICO success and relative success as compared to other offerings.`,
                `With this in mind, the goal of this project was to create a model predicting whether an ICO will hit its funding goal or not, based 
                on online sentiment towards the ICO, and characteristics of the ICO itself. The outcome of the model for a given ICO would thus be a 
                binary classification of whether or not an ICO will hit its goal. An important distinction must be made here between an ICO’s “hard cap” 
                and “soft cap.” A hard cap is the maximum target amount of funds an ICO will receive (above which funds will be returned to investors) 
                while a soft cap is a far lower target which if not achieved results in all contributed funds being returned to investors and the 
                cancellation of the project (Coinist, 2018). As a result soft caps are typically set extremely low by ICOs, and investors generally 
                view a project's ability to hit its hard cap as a better signal of future success. Hence, this model defines ICO success as hitting 
                the hard cap, not soft cap.`, 
                `Data from the online forum Reddit was used as a proxy for overall sentiment facing a token, due to the platform’s immense 
                popularity within the cryptocurrency community. While other sources such as Twitter or private forums may also influence 
                sentiment, these have the potential to have a more biased outlook due to their individual-based nature. The organization of 
                Reddit content is also conducive to sentiment analysis: user posts and comments about the same topic are grouped into “sub-reddits” 
                which can easily be scraped (most notable tokens would have their own subreddit). Further, comments are “up-voted” and 
                “down-voted” by users to create an aggregate proxy for popularity within the community. Characteristics of each ICO were 
                obtained directly from their respective white papers.`
            ], 
            "https://cdn-images-1.medium.com/max/1200/0*4aC_Yysv4AolAY3Q.png", 
            "https://github.com/michaelkrakovsky/CommentScrubbing"
        ), 
        new Project(
            "Personal Website", 
            ["TypeScript", 
            "CSS", 
            "HTML", 
            "Angular"], 
            "A Website Illustrating My Talents, Interests, and Goals", 
            "The project was created to highlight my interest in website development and to bolster existing coding skills.", 
            [
                `My personal website serves two purposes: applying knowledge and talent marketing. To build proficiency in web development, I began my journey by taking a University Web Development course. The course failed to satisfy my interest in web development because the it was outdated and rushed. Therefore, I began to complete online tutorials and to apply my knowledge by developing my own website.`, 
                `Furthermore, I needed another way to garner attention from employers. Platforms like LinkedIn fail to differentiate yourself from others who use these platforms. However, through my own website, I can customize my own presentation and further establish a salient image amongst recruiters.` 
            ], 
            "https://amp.businessinsider.com/images/51e956c4ecad04804c000011-750-375.jpg", 
            "https://github.com/michaelkrakovsky/personalWebsite"
        ), 
        new Project(
            "IP Connectivity", 
            ["Python", "BASH"], 
            "An attempt to map the internet connection speeds of any major city picked by the user.", 
            "The project was created during a QHacks Hackathon on February 2019.",
            [
                `The project was created in 36 hours during the 2019 Queen’s Hackathon. The project’s goal was to create a heat map detailing the connectivity of a city’s network. Once the data was collected, the data was mapped onto a heat map providing the reader with a friendly graphic of the best internet spots in the city. The program was automated from the time the user inputs the city name until the heatmap is written to memory. The data enables ISPs to tend to poorly affected areas and possibly steal competitors’ clients who are provided with poor Internet service.`
            ], 
            "https://www.netscan.co/blog/assets/post-images/connectivity.png",
            "https://github.com/michaelkrakovsky/IP_Connectivity"
        ),
    ];

    getProjects() {
        return this.projectsList.slice();
    }

    getOneProject(index: number) {
        return this.projectsList[index];
    }
}