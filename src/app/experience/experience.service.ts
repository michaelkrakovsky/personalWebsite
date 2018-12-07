import { ExperienceTemplate } from "./experience.model";


export class ExperienceService {

    allExperience = [
        new ExperienceTemplate('Occupational', 'A comment about the soft skills I have gained during my young career.', 
            [
                "Occupational", 
                `My profession experience is categorized into three main roles: arbitrator, teacher and young professional. 
                First, I was an arbitrator. Within this role, I maintained order by calling out intolerable actions. I glided 
                across the surface directing young kids to their proper position and received backlash for my judgements. I was
                a hockey referee. Although hockey referee was a modest position, I still learned invaluable lessons as a 16-year-old. 
                Most notably, I learned how to be a competent and wise authoritarian. This entails making firm decisions tethered to 
                reason and rule and not on the annoyance caused by loud coaches. The occupation also allowed me to communicate with 
                older adults in a respectable but confident manner.`, 
                `Then, I was a teacher. I have both indirectly saved lives and helped young children feel confident at their next pool party. 
                I was a swimming instructor. My role was not only to acquire clients but to teach young children swimming fundamentals. 
                Although the business itself was modest, the experience was fruitful. Not only did I develop the strong work ethic required 
                to successfully run a business, but I also developed the patience to interact with children. Nothing will ever prepare you 
                to deal with a screaming child until you have done so, thankfully, I can now handle (somewhat) screaming children.`,
                `Now, I am a young professional. I started at RBC three years ago without the slightest conception about corporate culture. 
                Here is where I put away the hockey skates and swim trunks to begin a new chapter in my life. Within my third year, 
                I moved to corporate office to tackle different and more complex responsibilities. Although I parted ways from my friends, 
                it was here where I had my first real mentor. She provided priceless opportunities while making distinctive efforts to 
                expand my network; furthermore, her assistance is a driving force for why I desire to return to RBC within the upcoming years.`
            ]),
        new ExperienceTemplate('Education', 'A note about the knowledge I have aquired from university.', 
            [
                "Iwork"
            ]),
        new ExperienceTemplate('Extra-Curricular', 'A snippet detailing my engagements with my peers.', 
            [
                "Iwork"
            ]),
        new ExperienceTemplate('Craved Experience', 'An indication of where I want to move towards.', 
            [
                "Iwork"
            ])
    ]

    getXp() {
        return this.allExperience.slice();
  }

     getOneProject(index: number) {
        return this.allExperience[index];
    }   
} 