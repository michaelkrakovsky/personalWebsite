import { ExperienceTemplate } from "./experience.model";


export class ExperienceService {

    allExperience = [
        new ExperienceTemplate('Occupational', 'A comment about the soft skills I have gained during my young career.', 
            [
                "My profession experience is categorized into three main roles: arbitrator, teacher and young professional. First, I was an arbitrator. Within this role, I maintained order by calling out intolerable actions. I glided across the surface directing young kids to their proper position and received unjust backlash for my judgements. I was a hockey referee. I learned to conduct firm decisions tethered to reason and to be confident even after making an error. In addition, I gained the ability to communicate with older adults in a respectable manner.",
                "Then, I was a teacher. I have both indirectly saved lives and helped young children feel confident at their next pool party. I was a swimming instructor. My role was not only to acquire clients but to teach young children swimming fundamentals. Not only did I develop the strong work ethic required to successfully run a business, but I also developed the patience to interact with children. Some young children took longer to teach than others; nonetheless, it was a glorious feeling when a child developed the confidence to swim into the deep end for the first time.",
                "Now, I am a young professional. Here is where I put away the hockey skates and swim trunks to begin a new chapter in my life. Within my third year, I moved to corporate office to tackle different and more complex responsibilities. It was here where I had my first effectual mentor. She provided priceless opportunities while making distinctive efforts to expand my network; furthermore, her assistance is a driving force for why I desire to return to RBC within the upcoming years."
            ]),
        new ExperienceTemplate('Education', 'A note about the knowledge I have aquired from university.', 
            [
                "Throughout the last four years of my Commerce education, I have become more mature, diligent, and astute. The Commerce program has taught me to thrive in highly competitive environments; however, I noticed a scarcity for people with a business and technical background. Therefore, I choose to pursue a Computing Degree for one additional year at Queen’s University.", 
                "Commerce has taught me the ought while Computing has taught me the what. For instance, consider the simple issue of predicting churn in an organization. When I approach this problem, I begin to ask a series of questions: Why is this study important? How can we apply the derived knowledge? Is the gained knowledge worth the expense? What are the significant attributes that contribute to churn? Where was the dataset collected and who collected it? What methods can I use to optimally predict churn? The first three questions dealing with the ‘ought’ illustrate the necessity for the study and my commerce side. The next three questions consider the details of the question and ‘what’ needs to be done to solve the problem. With this approach, I can identify a problem but also provide the details to a solution thus illustrating my computing side."
            ]),
        new ExperienceTemplate('Extra-Curricular', 'A snippet detailing my engagements with my peers.', 
            [
                `There are two extra-curricular activities that served as impactful experiences: Queen’s Golf and Midget Hockey. 
                First, Queen’s Golf was impactful to my development because it solidified my ability to become zealous in pursuit of a goal. 
                Although I enjoy interacting with other members of the golf team, I discovered the most about myself during the preparation 
                process and the try-out process. I have spent the previous three summers preparing to acquire the skills to play golf at a 
                competitive level. Within the preparation process I learned to value the preparation process while noticing the existence of 
                anxiety when thoughts about execution arise. In addition, the sport itself has taught one important lesson: the ability to 
                control one’s emotions to thrive. For instance, the environmental conditions can be cold and rainy thus unsettling my mind; 
                however, there is wisdom in knowing what cannot be controlled and applying your energy on what you can change.`,
                `Second, hockey played an important part of my life as it provided me with the ability to interact with others in a team 
                environment. Throughout my 14-year hockey career, I have played with players ranging everywhere from undisciplined to 
                unsportsmanlike; however, it is still one’s responsibility to improve the player to get the most out of there talent. 
                In fact, without an effort to help your teammate, you as a player will suffer. For example, one cannot be effective if 
                your teammates are constantly in the penalty box while the team must handle the penalty kill. There are quantifiable 
                costs when you fail to improve your own team members.`,  
            ]),
        new ExperienceTemplate('Craved Experience', 'An indication of where I want to move towards.', 
            [
                `I am uncertain about where I desire to apply my zealous work habit. Since computing is an expanding field, the choices 
                are abundant; however, new opportunities appear every year with the introduction of new technology. In addition, I would 
                like to find a role that mingles both business and computing aspects because I have spent the past five years developing 
                the tools to succeed within these areas. Having knowledge in both facets allows me to pivot between roles which facilitates 
                both excitement and engagement.`,
                `The computing streams that interest me include Cyber-Security and Blockchain. First, I desire to indulge in Security 
                since the field will continue to expand as technology continues to integrate into every facet of our lives. Since these 
                machines are typically connected to the network, they are exposed to attacks by malicious attackers. In addition, there 
                is a lack of talent within the field which only intensify the current scarcity of security talent; however, I lack experience 
                in the field and would love to expand my knowledge.`, 
                `Second, the allure of Blockchain has always attracted my interest; however, the industry is a bit riskier than entering 
                cyber-security because of the current uncertain in the industry’s future. Blockchain poses several interesting opportunities 
                from streamlining supply chains to decentralizing monetary systems. Although Blockchain does interest me, I found it difficult 
                to learn the appropriate technology because of the lack of quantity and quality. Nonetheless, if the opportunity presents itself 
                to engage in an occupation involving Blockchain, I will surely engage with it.`
            ])
    ]

    getXp() {
        return this.allExperience.slice();
  }

     getOneProject(index: number) {
        return this.allExperience[index];
    }   
} 