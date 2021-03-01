// import {EntityRepository, Repository} from "typeorm";
// import { Plstats } from "./plstats.entity";
// import { Game } from "./gameStats.entity";

// @EntityRepository(Game)
// export class PlStatsRepository extends Repository<Game> {

//    createpl(plstats){
//         let plst
//         for(let p of plstats.playerStats){
//             console.log(p);
            
//             const playerStats = new Plstats()
//             playerStats.made = p.made
//             playerStats.name = p.name
//             playerStats.missed = p.missed
//             playerStats.points = p.points
//             playerStats.percentage = p.percentage
//             playerStats.teamName = p.teamName
//             this.save(playerStats)
//         }
//          console.log(plst); 
//     }
    
// findAll() {
//     return this.find();
//   }
  
//   findOne(id): Promise<Plstats> {
//     return this.findOne({id});
//   }
//  async findByName(name): Promise<Plstats[]> {
//     return await this.find({name});
//   }

// }