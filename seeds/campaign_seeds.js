const mongoose = require('mongoose');
const db = require("../config/keys.js").MONGO_URI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(`${err}: Cannot connect to MongoDB`));

const Campaign = require('../server/models/Campaign');
const User = require('../server/models/User');

const seedCampaigns = () => {
  Campaign.deleteMany({}, (err) => { console.log(err) });
  return new Promise((res, rej) => {
    User.findOne({ name: "Africa Wildlife Foundation" })
      .then(user => {
        let endDate = new Date();
        endDate.setDate(38);
        newCampaign = new Campaign({
          title: "Ruaha Carnivore Project",
          tagline: "Protecting Africa's Most Threatened Species",
          overview: "Creating common ground for communities and carnivores",
          story: "Across the continent, Africa’s large carnivores are facing an uncertain future. Lions, cheetahs and African wild dogs have all disappeared from 80 – 90 percent of their original range. Both the lion and the cheetah are now classified as Vulnerable by the IUCN, with as few as 23,000 and 10,000 individuals remaining in the wild respectively. While the African wild dog is Endangered, with merely 6,600 estimated adults remaining. Tanzania’s Ruaha National Park is a vital stronghold for these keystone species.The park holds over 10 percent of the world’s remaining lions, as well as the third largest population of African wild dogs.It’s also home to one of just four large cheetah populations remaining in East Africa.Ensuring these populations endure is critical to their species’ survival."+
                    "Having carnivores as neighbors isn’t easy. The animals living in Ruaha National Park rely heavily on the adjacent land—land they share with local villages.This frequently brings carnivores into contact with poor communities that rely on livestock for their livelihoods." + 
                    "Attacks on livestock by lions and leopards can cost these communities 18 percent of their annual income, a devastating blow for families struggling to survive.This has sparked intense human- wildlife conflict, leading to the highest recorded rate of lion killing in modern times." +
                    "To mitigate this conflict, the Ruaha Carnivore Project began predator - proofing livestock enclosures in 2012. Fortifying these enclosures with chain - link fencing has proven extremely effective in protecting precious livestock.In the core study area, Ruaha Carnivore Project has successfully reduced attacks on livestock by 60 percent, leading to an 80 percent decline in the killing of lions, cheetah, wild dogs and leopards by humans.The project is also working to provide livestock guarding dogs to the community as a means of amplifying this progress." +
                    "Incentivizing conservation and underscoring its importance." +
                    "Many villagers living near Ruaha National Park don’t understand the importance of conservation, or the value of the park for both conservation efforts and the local economy.To foster greater awareness of these issues, Ruaha Carnivore Project regularly brings villagers into the park on educational trips, letting them learn about the importance of protecting large carnivores first hand." +
                    "Additionally, this carnivore conservation project provides community benefits to villages that demonstrate success in living peacefully with top predators.This can include scholarships, medical care and access to veterinary services; communities vote to determine which benefits they receive.By pairing these incentives with education about conservation, Ruaha Carnivore Project is fostering a much - needed shift in the local opinion of carnivores.",
          faq: "The African Wildlife Foundation (AWF) is the oldest international conservation organization focused solely on Africa.Since our founding in 1961, AWF has recognized that Africa’s wildlife"+
               "resources and ecosystems are critical to the future prosperity of Africa and its people.Some key facts about AWF: With a geographic focus on the continent of Africa, AWF works with Africans at the local, regional and national levels to conserve the continent’s tremendous natural resources."+
               "We believe that development is good for Africa, as long as it is sustainable and balanced with biodiversity conservation. We focus on key African species, including elephants, rhinos, lions and other large carnivores, mountain gorillas and Africa’s other great apes. AWF is headquartered in Nairobi, Kenya, with offices"+
               "throughout Africa and in Europe and North America. For long - lasting impact, conservation in Africa must be done at a largelandscape level, together with local, national and regional partners. Conservation must also take into account the needs of not simply the wildlife living in the area but also the people.To that end: • AWF targets large areas of land that extend beyond single"+
               "parks, even national boundaries. We implement a variety of conservation initiatives, all of which are centered around three specific areas: land, wildlife and people(including education and enterprise). AWF incorporates climate change adaptation and mitigation"+
               "efforts into many of our projects. Because conservation does not always take effect without political will, we also work with governmental partners and regional bodies to effect policy change.",
          image_url: "https://indiedodo-dev.s3-us-west-1.amazonaws.com/Lion+Face.jpg",
          youtube_url: "https://www.youtube.com/embed/uADlg-4l8SQ",
          real_url: "https://www.awf.org/projects/ruaha-carnivore-project",
          category: "Mammal",
          goal: 500000,
          end_date: endDate,
          user: user._id,
        })
        newCampaign.save().then(campaign => {
          console.log(`Success: ${campaign.title} was created`);
        }, err => { console.log(`${campaign.title} was unable to save due to: ${err}`) })
      })
    User.findOne({ name: "Albus Dumbledore" })
      .then(user => {
        let endDate = new Date();
        endDate.setDate(38);
        newCampaign = new Campaign({
          title: "Lion brush initiative",
          tagline: "Lion mane",
          overview: "Kind brushes and combs for cuddly lions",
          story: "E pluribus. Out of many, one from latin.",
          faq: "E pluribus. Out of many, one from latin.",
          image_url: "https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_lions_0.jpg",
          youtube_url: "https://www.youtube.com/embed/IChRNbuHHWE",
          category: "Mammal",
          goal: 100000,
          end_date: endDate,
          user: user._id,
        })
        newCampaign.save().then(campaign => {
          console.log(`Success: ${campaign.title} was created`);
        }, err => { console.log(`${campaign.title} was unable to save due to: ${err}`) })
      })

    User.findOne({ name: "Stephen Curry" })
      .then(user => {
        let endDate = new Date();
        endDate.setDate(38);
        newCampaign = new Campaign({
          title: "They hunt crocodiles",
          tagline: "Black Panther",
          overview: "The animal known as a panther actually refers to 3 different types of big cats, leopards (Panthera pardus) or jaguars (Panthera onca) that have a black or white color mutation and a subspecies of the cougar (Puma concolor). ",
          story: "The animal known as a panther actually refers to 3 different types of big cats, leopards (Panthera pardus) or jaguars (Panthera onca) that have a black or white color mutation and a subspecies of the cougar (Puma concolor). ",
          faq: "The animal known as a panther actually refers to 3 different types of big cats, leopards (Panthera pardus) or jaguars (Panthera onca) that have a black or white color mutation and a subspecies of the cougar (Puma concolor). ",
          image_url: "https://media.londolozi.com/wp-content/uploads/2016/07/11013916/Panther1.jpg",
          category: "Mammal",
          goal: 5555,
          end_date: endDate,
          user: user._id,
        })
        newCampaign.save().then(campaign => {
          console.log(`Success: ${campaign.title} was created`);
        }, err => { console.log(`${campaign.title} was unable to save due to: ${err}`) })
      })

    User.findOne({ name: "Stephen Curry" })
      .then(user => {
        let endDate = new Date();
        endDate.setDate(38);
        newCampaign = new Campaign({
          title: "Zebra traingle offense",
          tagline: "3 heads are better than 2",
          overview: "Zebra are part of the equidae family along with horse and donkeys. Every zebra has a unique pattern of black and white stripes.",
          story: "There are a number of different theories which attempt to explain zebra's unique stripes with most relating to camouflage. Wild zebras live in Africa.",
          faq: "There are a number of different theories which attempt to explain zebra's unique stripes with most relating to camouflage. Wild zebras live in Africa.",
          image_url: "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1550684943/zebras-STRIPEPOWER0219.jpg?itok=zfKIXCep",
          category: "Mammal",
          goal: 12345,
          end_date: endDate,
          user: user._id,
        })
        newCampaign.save().then(campaign => {
          console.log(`Success: ${campaign.title} was created`);
        }, err => { console.log(`${campaign.title} was unable to save due to: ${err}`) })
      })

    User.findOne({ name: "Amphibian Surival Alliance" })
      .then(user => {
        let endDate = new Date();
        endDate.setDate(198);
        newCampaign = new Campaign({
          title: "Amphibian Survival Alliance",
          tagline: "Conserving amphibians has never been more important.",
          overview: "Amphibians are an intrinsic part of our lives, although they often go unnoticed and uncelebrated.",
          story: "Conserving amphibians has never been more important. Around half of all amphibian species are declining, and the proportion threatened with extinction is thought to be over 40%, making amphibians the most threatened vertebrate group. Once a sanctuary for over 8,000 species, we now live in a world that is increasingly unsafe for amphibians. A world that is unsafe for amphibians is unsafe for other species, not least humankind. The intensifying plight of amphibians mirrors our own struggle, as we try to protect natural resources and bring about a sustainable future for all life on our shared planet."+
                 "The needs of amphibians are no different from our own, so the issues they face ─ such as inadequate freshwater management, habitat destruction, climate change, pollution, unregulated use and trade of species, disease dynamics in a shifting world, invasive species, and the unsustainable exploitation of natural resources ─ are extremely pertinent to us, and to all species.These issues, both separately and together, demand the development of collaborative solutions to improve the management of our one and only Earth. The Amphibian Survival Alliance(ASA) officially launched in 2011, and has since built a committed global alliance of Partners, dedicated to developing a better world for amphibians through coordinated conservation action.ASA promotes and coordinates the implementation of conservation actions for amphibians through an active, growing, engaged, committed, and collaborative partnership around the world.The great need for this endeavour is reflected in the rate of loss of amphibian populations globally, and we face a challenging future as we strive to reverse these trajectories.",
          faq: "SA seeks to establish and drive forward important priorities in amphibian conservation among our Partners. Priorities are developed in close collaboration with the ASG and AArk secretariats to ensure that urgent conservation needs are addressed in the most efficient manner possible."+
                "Priorities chosen for 2017 - 2021 include: conservation resources(important information linked to the development of effective conservation actions); habitat protection; combating emerging infectious diseases; and communication and education.",
          image_url: "https://indiedodo-dev.s3-us-west-1.amazonaws.com/amphibian4.jpg",
          youtube_url: "https://www.youtube.com/embed/Jg6lJUNffV4",
          real_url:"https://www.amphibians.org/",
          category: "Amphibian",
          goal: 20000,
          end_date: endDate,
          user: user._id,
        })
        newCampaign.save().then(campaign => {
          console.log(`Success: ${campaign.title} was created`);
        }, err => { console.log(`${campaign.title} was unable to save due to: ${err}`) })
      })
    })
}

seedCampaigns().then((res) => { mongoose.connection.close() });