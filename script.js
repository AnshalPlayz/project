// Define questions and answers in a structured format
const questionsAnswers = [
    {
        category: "Gameplay",
        questions: [
            { question: "How do you play Minecraft?", answer: "In Minecraft, players start with nothing and must gather resources to survive. They can explore, mine blocks, craft tools and items, build structures, and battle various creatures." },
            { question: "What are the different game modes in Minecraft?", answer: "Minecraft has several game modes: Survival, Creative, Adventure, Spectator, and Hardcore. Each mode offers different gameplay experiences, from survival challenges to creative building." },
            { question: "How often does Minecraft receive updates?", answer: "Minecraft receives regular updates with new features, improvements, and bug fixes. Major updates are typically released annually, introducing significant changes to gameplay and content." },
            { question: "How can you quickly gather resources in Minecraft?", answer: "Use tools like pickaxes, shovels, and axes to efficiently gather resources. Enchanting tools with efficiency and fortune can increase resource yield." },
            { question: "What is the best way to find diamonds in Minecraft?", answer: "Diamonds are most commonly found in deep underground caves and ravines. Use techniques like branch mining at lower depths (below Y=16) to increase your chances of finding them." },
            { question: "What platforms can you play Minecraft on?", answer: "Minecraft is available on multiple platforms including PC (Windows, macOS, Linux), consoles (Xbox, PlayStation, Nintendo Switch), mobile devices (iOS, Android), and virtual reality (VR) platforms." },
            { question: "How has the Minecraft community influenced the game?", answer: "The Minecraft community plays a significant role in shaping the game's development through feedback, mods, maps, and community creations shared on platforms like Minecraft Marketplace and Minecraft Java Edition." },
            { question: "What are some popular mods in Minecraft?", answer: "Popular mods in Minecraft include Optifine (enhances performance and graphics), Tinker's Construct (adds new tools and weapons), and Biomes O' Plenty (introduces new biomes and landscapes)." },
            { question: "What is the best Minecraft server in kerala", answer: "Best Minecraft server in kerala is THALLIPOLI NETWORK more info in - https://thallipoli.netlify.app/" },
            { question: "WHAT IS MINECRAFT?", answer: "Minecraft is a game made up of blocks, creatures, and community. You can survive the night or build a work of art – the choice is all yours. But if the thought of exploring a vast new world all on your own feels overwhelming, then fear not! Let’s explore what Minecraft is all about!" },
            { question: "How do you mine ores in Minecraft?", answer: "You need a pickaxe to mine ores. Wooden pickaxes can mine stone, iron, gold, and diamonds." },
            { question: "What is the purpose of experience points in Minecraft?", answer: "Experience points are used to enchant items and repair tools at the grindstone or anvil." },
            { question: "How do you defeat the Ender Dragon?", answer: "To defeat the Ender Dragon, destroy the End crystals and attack the dragon when it perches on the bedrock pillars." },
            { question: "What is the best way to find diamonds?", answer: "Diamonds are most commonly found between levels 5-12 in the Overworld. Strip mining and branch mining are effective methods." },
            { question: "How can you heal in Minecraft?", answer: "You can heal by consuming food, using healing potions, or sleeping in a bed." },
            { question: "What happens if you die in Minecraft?", answer: "When you die in Minecraft, you drop all your items at the death location and respawn at your spawn point or last used bed." },
            { question: "What is the Nether in Minecraft?", answer: "The Nether is a dimension filled with dangerous terrain, mobs like Ghasts and Blazes, and resources like Nether Quartz and Glowstone." },
            { question: "How do you brew potions in Minecraft?", answer: "To brew potions, you need a Brewing Stand, Blaze Powder for fuel, and ingredients like Nether Wart and Spider Eyes." },
            { question: "What are Enchantments in Minecraft?", answer: "Enchantments are special bonuses that can be applied to tools, weapons, and armor to enhance their abilities, such as increased damage or durability." },
            { question: "What are the benefits of playing on Hardcore mode?", answer: "In Hardcore mode, the game is set to the hardest difficulty and you have only one life. It provides a more challenging and intense survival experience." },
            // Add more gameplay questions
        ]
    },
    {
        category: "Crafting",
        questions: [
            { question: "How do you craft a crafting table?", answer: "Place four wooden planks in a 2x2 grid in your inventory crafting menu." },
            { question: "How do you craft a wooden pickaxe?", answer: "Place three wooden planks across the top row and two sticks in the middle and bottom-center of the crafting table." },
            { question: "How do you craft a stone pickaxe?", answer: "Place three cobblestones across the top row and two sticks in the middle and bottom-center of the crafting table." },
            { question: "How do you craft an iron pickaxe?", answer: "Place three iron ingots across the top row and two sticks in the middle and bottom-center of the crafting table." },
            { question: "How do you craft a diamond pickaxe?", answer: "Place three diamonds across the top row and two sticks in the middle and bottom-center of the crafting table." },
            { question: "How do you craft a golden pickaxe?", answer: "Place three gold ingots across the top row and two sticks in the middle and bottom-center of the crafting table." },
            { question: "How do you craft a wooden sword?", answer: "Place one wooden plank on top of a stick in the middle column of the crafting table." },
            { question: "How do you craft a stone sword?", answer: "Place one cobblestone on top of a stick in the middle column of the crafting table." },
            { question: "How do you craft an iron sword?", answer: "Place one iron ingot on top of a stick in the middle column of the crafting table." },
            { question: "How do you craft a diamond sword?", answer: "Place one diamond on top of a stick in the middle column of the crafting table." },
            { question: "How do you craft a golden sword?", answer: "Place one gold ingot on top of a stick in the middle column of the crafting table." },
            { question: "How do you craft a wooden axe?", answer: "Place three wooden planks in an L shape and two sticks in the middle and bottom-center of the crafting table." },
            { question: "How do you craft a stone axe?", answer: "Place three cobblestones in an L shape and two sticks in the middle and bottom-center of the crafting table." },
            { question: "How do you craft an iron axe?", answer: "Place three iron ingots in an L shape and two sticks in the middle and bottom-center of the crafting table." },
            { question: "How do you craft a diamond axe?", answer: "Place three diamonds in an L shape and two sticks in the middle and bottom-center of the crafting table." },
            { question: "How do you craft a golden axe?", answer: "Place three gold ingots in an L shape and two sticks in the middle and bottom-center of the crafting table." },
            { question: "How do you craft a wooden shovel?", answer: "Place one wooden plank on top of two sticks in the middle column of the crafting table." },
            { question: "How do you craft a stone shovel?", answer: "Place one cobblestone on top of two sticks in the middle column of the crafting table." },
            { question: "How do you craft an iron shovel?", answer: "Place one iron ingot on top of two sticks in the middle column of the crafting table." },
            { question: "How do you craft a diamond shovel?", answer: "Place one diamond on top of two sticks in the middle column of the crafting table." },
            { question: "How do you craft a golden shovel?", answer: "Place one gold ingot on top of two sticks in the middle column of the crafting table." },
            { question: "How do you craft a wooden hoe?", answer: "Place two wooden planks diagonally and two sticks in the middle and bottom-center of the crafting table." },
            { question: "How do you craft a stone hoe?", answer: "Place two cobblestones diagonally and two sticks in the middle and bottom-center of the crafting table." },
            { question: "How do you craft an iron hoe?", answer: "Place two iron ingots diagonally and two sticks in the middle and bottom-center of the crafting table." },
            { question: "How do you craft a diamond hoe?", answer: "Place two diamonds diagonally and two sticks in the middle and bottom-center of the crafting table." },
            { question: "How do you craft a golden hoe?", answer: "Place two gold ingots diagonally and two sticks in the middle and bottom-center of the crafting table." },
            { question: "How do you craft a shield?", answer: "Place one iron ingot in the top-center and fill the rest with wooden planks in a Y shape." },
            { question: "How do you craft a bow?", answer: "Place three sticks in a diagonal line and three strings vertically next to the sticks in the crafting table." },
            { question: "How do you craft an arrow?", answer: "Place one flint on top of a stick, and a feather below the stick in the crafting table." },
            { question: "How do you craft a furnace?", answer: "Place eight cobblestones in a square shape, leaving the center empty in the crafting table." },
            { question: "How do you craft a chest?", answer: "Place eight wooden planks in a square shape, leaving the center empty in the crafting table." },
            { question: "How do you craft a bed?", answer: "Place three wool blocks horizontally on top of three wooden planks horizontally in the crafting table." },
            { question: "How do you craft a torch?", answer: "Place one coal on top of a stick in the crafting table." },
            { question: "How do you craft a ladder?", answer: "Place seven sticks in an H shape in the crafting table." },
            { question: "How do you craft a door?", answer: "Place six wooden planks in two vertical columns in the crafting table." },
            { question: "How do you craft a trapdoor?", answer: "Place six wooden planks in two horizontal rows in the crafting table." },
            { question: "How do you craft a sign?", answer: "Place six wooden planks in two horizontal rows on top of a stick in the middle column of the crafting table." },
            { question: "How do you craft a book?", answer: "Place three papers vertically in the left column, with a piece of leather in the bottom-left corner in the crafting table." },
            { question: "How do you craft a bookshelf?", answer: "Place six wooden planks in the top and bottom rows, with three books in the middle row in the crafting table." },
            { question: "How do you craft a cake?", answer: "Place three milk buckets in the top row, sugar on the left and right middle slots, an egg in the center, and three wheat in the bottom row in the crafting table." },
            { question: "How do you craft a cookie?", answer: "Place two wheat on either side of a cocoa bean in the middle row of the crafting table." },
            { question: "How do you craft a fishing rod?", answer: "Place three sticks diagonally with two strings vertically in the crafting table." },
            { question: "How do you craft a flint and steel?", answer: "Place one iron ingot and one flint diagonally in the crafting table." },
            { question: "How do you craft a compass?", answer: "Place one redstone in the center and four iron ingots around it in a plus shape in the crafting table." },
            { question: "How do you craft a clock?", answer: "Place one redstone in the center and four gold ingots around it in a plus shape in the crafting table." },
            { question: "How do you craft a map?", answer: "Place eight pieces of paper around a compass in the crafting table." },
            { question: "How do you craft paper?", answer: "Place three sugar canes horizontally in the crafting table." },
            { question: "How do you craft a boat?", answer: "Place five wooden planks in a U shape in the crafting table." },
            { question: "How do you craft a bucket?", answer: "Place three iron ingots in a V shape in the crafting table." },
            { question: "How do you craft shears?", answer: "Place two iron ingots diagonally in the crafting table." },
            { question: "How do you craft an item frame?", answer: "Place eight sticks in a square shape with leather in the center in the crafting table." },
            { question: "How do you craft a lead?", answer: "Place four strings in a diamond shape with a slimeball in the center in the crafting table." },
            { question: "How do you craft a saddle?", answer: "Saddles cannot be crafted. They can be found in dungeon chests, temples, or by fishing." },
            { question: "How do you craft an armor stand?", answer: "Place six sticks in the shape of a human body with a smooth stone slab at the bottom in the crafting table." },
            { question: "How do you craft a banner?", answer: "Place six wool blocks in two horizontal rows on top of a stick in the crafting table." },
            { question: "How do you craft an anvil?", answer: "Place three iron blocks in the top row and four iron ingots in a T shape below it in the crafting table." },
            { question: "How do you craft an ender chest?", answer: "Place eight obsidian in a square shape with an Eye of Ender in the center in the crafting table." },
            { question: "How do you craft an enchantment table?", answer: "Place a book in the top-center, two diamonds on either side of an obsidian block, and three obsidian blocks in the bottom row in the crafting table." },
            { question: "How do you craft a firework rocket?", answer: "Place one paper and one gunpowder in the crafting table. Additional gunpowder can be added for more flight duration." },
            { question: "How do you craft a firework star?", answer: "Place one gunpowder and one dye in the crafting table. Additional items can be added for effects." },
            { question: "How do you craft a hopper?", answer: "Place five iron ingots in a V shape with a chest in the center in the crafting table." },
            { question: "How do you craft a minecart?", answer: "Place five iron ingots in a U shape in the crafting table." },
            { question: "How do you craft a piston?", answer: "Place three wooden planks in the top row, an iron ingot in the center, a redstone below it, and cobblestones on the sides in the crafting table." },
            { question: "How do you craft a sticky piston?", answer: "Place a piston and a slimeball in the crafting table." },
            { question: "How do you craft a redstone torch?", answer: "Place a stick and a redstone vertically in the crafting table." },
            { question: "How do you craft a daylight sensor?", answer: "Place three glass blocks, three nether quartz, and three wooden slabs in the crafting table." },
            { question: "How do you craft a comparator?", answer: "Place three redstone torches, three stone blocks, and a nether quartz in the crafting table." },
            { question: "How do you craft a note block?", answer: "Place eight wooden planks around a redstone in the crafting table." },
            { question: "How do you craft a jukebox?", answer: "Place eight wooden planks around a diamond in the crafting table." },
            { question: "How do you craft a dispenser?", answer: "Place seven cobblestones in a U shape, a bow in the center, and a redstone at the bottom in the crafting table." },
            { question: "How do you craft a dropper?", answer: "Place seven cobblestones in a U shape and a redstone at the bottom in the crafting table." },
            { question: "How do you craft a brewing stand?", answer: "Place a blaze rod in the center with three cobblestones below it in the crafting table." },
            { question: "How do you craft a cauldron?", answer: "Place seven iron ingots in a U shape in the crafting table." },
            { question: "How do you craft blaze powder?", answer: "Place a blaze rod in the crafting table." },
            { question: "How do you craft magma cream?", answer: "Place a slimeball and blaze powder in the crafting table." },
            { question: "How do you craft a fermented spider eye?", answer: "Place a spider eye, a brown mushroom, and sugar in the crafting table." },
            { question: "How do you craft a potion of healing?", answer: "Brew a glistering melon slice with an awkward potion in the brewing stand." },
            { question: "How do you craft a potion of swiftness?", answer: "Brew sugar with an awkward potion in the brewing stand." },
            { question: "How do you craft a potion of strength?", answer: "Brew blaze powder with an awkward potion in the brewing stand." },
            { question: "How do you craft a potion of fire resistance?", answer: "Brew magma cream with an awkward potion in the brewing stand." },
            { question: "How do you craft a potion of water breathing?", answer: "Brew a pufferfish with an awkward potion in the brewing stand." },
            { question: "How do you craft a potion of invisibility?", answer: "Brew a fermented spider eye with a potion of night vision in the brewing stand." },
            { question: "How do you craft a splash potion?", answer: "Add gunpowder to any potion in the brewing stand." },
            { question: "How do you craft a lingering potion?", answer: "Add dragon's breath to a splash potion in the brewing stand." },
            { question: "How do you craft an Eye of Ender?", answer: "Place an ender pearl and blaze powder in the crafting table." },
            { question: "How do you craft an end crystal?", answer: "Place seven glass blocks, one ghast tear, and one Eye of Ender in the crafting table." },
            { question: "How do you craft a beacon?", answer: "Place five glass blocks, three obsidian, and a nether star in the crafting table." },
            { question: "How do you craft an iron golem?", answer: "Place four iron blocks in a T shape and a carved pumpkin or jack o'lantern on top." },
            { question: "How do you craft a snow golem?", answer: "Place two snow blocks on top of each other and a carved pumpkin or jack o'lantern on top." },
            { question: "How do you craft a conduit?", answer: "Place eight nautilus shells around a heart of the sea in the crafting table." },
            { question: "How do you craft a turtle shell?", answer: "Place five scutes in a helmet shape in the crafting table." },
            { question: "How do you craft a crossbow?", answer: "Place three sticks, two strings, an iron ingot, and a tripwire hook in the crafting table." },
            { question: "How do you craft a shield?", answer: "Place one iron ingot in the top-center and fill the rest with wooden planks in a Y shape in the crafting table." },
            { question: "How do you craft a campfire?", answer: "Place three sticks in an inverted V shape, three logs or wood blocks at the bottom, and a piece of coal in the center in the crafting table." },
            { question: "How do you craft a barrel?", answer: "Place six wooden planks in the sides and two wooden slabs in the top and bottom center in the crafting table." },
            { question: "How do you craft a smoker?", answer: "Place four logs or wood blocks around a furnace in the crafting table." },
            { question: "How do you craft a blast furnace?", answer: "Place five iron ingots, three smooth stones, and a furnace in the crafting table." },
            { question: "How do you craft a cartography table?", answer: "Place two paper and four wooden planks in the crafting table." },
            { question: "How do you craft a fletching table?", answer: "Place two flints and four wooden planks in the crafting table." },
            { question: "How do you craft a grindstone?", answer: "Place two sticks, one stone slab, and two wooden planks in the crafting table." },
            { question: "How do you craft a smithing table?", answer: "Place two iron ingots and four wooden planks in the crafting table." },
            { question: "How do you craft a stonecutter?", answer: "Place one iron ingot and three stones in the crafting table." },
            { question: "How do you craft a composter?", answer: "Place seven wooden slabs in a U shape in the crafting table." },
            { question: "How do you craft a lectern?", answer: "Place three wooden slabs on top, one bookshelf in the middle, and three wooden slabs below it in the crafting table." },
            { question: "How do you craft a loom?", answer: "Place two strings on top of two wooden planks in the crafting table." },
            { question: "How do you craft a respawn anchor?", answer: "Place six crying obsidian around three glowstone blocks in the crafting table." },
            { question: "How do you craft a lodestone?", answer: "Place eight chiseled stone bricks around a netherite ingot in the crafting table." },
            { question: "How do you craft netherite ingot?", answer: "Combine four gold ingots and four netherite scraps in the crafting table." },
            { question: "How do you craft netherite tools and armor?", answer: "Combine diamond tools/armor with netherite ingots in a smithing table." },
            { question: "How do you craft a turtle shell helmet?", answer: "Place five scutes in a helmet shape in the crafting table." },
            { question: "How do you craft fireworks?", answer: "Combine paper with gunpowder and optionally a firework star in the crafting table." }
        ]
    },
    {
        category: "Biomes and World Generation",
        questions: [
            { question: "What is the rarest biome in Minecraft?", answer: "The rarest biome is the Modified Jungle Edge biome." },
            { question: "What biome do you find pandas in?", answer: "Pandas can be found in the Bamboo Jungle biome." },
            { question: "Which biome is known for its large, floating islands?", answer: "The Shattered Savanna biome is known for its large, floating islands." },
            { question: "In which biome do you find coral reefs?", answer: "Coral reefs are found in the Warm Ocean biome." },
            { question: "What biome features towering mountains and deep valleys?", answer: "The Mountains biome features towering mountains and deep valleys." },
            { question: "Where can you find a lot of mushrooms growing?", answer: "A lot of mushrooms can be found in the Mushroom Fields biome." },
            { question: "Which biome has a distinctive red sand?", answer: "The Mesa biome has distinctive red sand." },
            { question: "What is unique about the Ice Spikes biome?", answer: "The Ice Spikes biome is unique for its large ice spikes formations." },
            { question: "Which biome is characterized by dark trees and giant mushrooms?", answer: "The Roofed Forest biome is characterized by dark trees and giant mushrooms." },
            { question: "Where can you find polar bears in Minecraft?", answer: "Polar bears can be found in the Frozen Ocean and Ice Plains biomes." },
            { question: "Which biome has the least amount of vegetation?", answer: "The Desert biome has the least amount of vegetation." },
            { question: "What biome is the End Portal most commonly found in?", answer: "The End Portal is most commonly found in the Stronghold, which generates in various Overworld biomes." },
            { question: "Where do you find the rare blue orchid flower?", answer: "The blue orchid flower is found in the Swamp biome." },
            { question: "Which biome is known for its tall birch trees?", answer: "The Tall Birch Forest biome is known for its tall birch trees." },
            { question: "What biome is home to the woodland mansion?", answer: "The Woodland Mansion is found in the Dark Forest biome." }
        ]
    },
    {
        category: "Mobs and Creatures",
        questions: [
            { question: "What is the rarest biome in Minecraft?", answer: "The rarest biome is the Modified Jungle Edge biome." },
            { question: "What is a Creeper?", answer: "A Creeper is a hostile mob that silently approaches players and explodes." },
            { question: "What do Endermen drop when killed?", answer: "Endermen drop Ender Pearls and sometimes blocks they are carrying." },
            { question: "How can you tame a Wolf?", answer: "You can tame a Wolf by feeding it bones until hearts appear." },
            { question: "What happens when a Pig is struck by lightning?", answer: "When a Pig is struck by lightning, it turns into a Zombie Pigman." },
            { question: "Where do Blazes spawn?", answer: "Blazes spawn in Nether Fortresses, usually near Blaze spawners." },
            { question: "What is the function of an Iron Golem?", answer: "Iron Golems protect villagers by attacking hostile mobs." },
            { question: "How can you summon the Ender Dragon?", answer: "You can summon the Ender Dragon by placing four End Crystals on the End Portal." },
            { question: "What do Zombies drop?", answer: "Zombies drop Rotten Flesh and occasionally carrots, potatoes, and iron ingots." },
            { question: "What is the behavior of a Spider during the day?", answer: "During the day, Spiders are neutral and will not attack unless provoked." }
        ]
    },
    {
        category: "Building and Redstone",
        questions: [
            { question: "How do you create a redstone clock?", answer: "Place two repeaters with a block in between, then activate one of them with redstone dust." },
            { question: "What is the best way to build a large structure?", answer: "Use templates or schematics, and plan your build in creative mode before constructing in survival." },
            { question: "How do you create a hidden door using redstone?", answer: "Build a piston door and hide the redstone circuitry behind walls or underground." },
            { question: "What is the purpose of a beacon in Minecraft?", answer: "Beacons provide status effects to nearby players, such as increased speed, strength, or regeneration." },
            { question: "How do you create a dispenser in Minecraft?", answer: "To craft a dispenser, place a bow in the center slot and surround it with cobblestone or smooth stone in a 'U' shape." },
            { question: "What are the uses of sticky pistons in Minecraft?", answer: "Sticky pistons can move blocks and retract them, allowing for more complex redstone mechanisms." },
            { question: "How do you create an automatic farm in Minecraft?", answer: "Build a farm with dispensers and water channels to automate planting, harvesting, and collection of crops." },
            { question: "What are the different types of redstone circuits?", answer: "Redstone circuits include repeaters, comparators, hoppers, and observers, used for creating automated systems and mechanisms." },
            // Add more building and redstone questions
        ]
    },
    {
        category: "Updates and Versions",
        questions: [
            { question: "What is the latest version of Minecraft?", answer: "As of the latest update, the newest version is 1.21." },
            { question: "What new features were introduced in Minecraft 1.21?", answer: "Minecraft 1.21 introduces two new armor trims (flow and bolt armor trims), two banner patterns (flow and guster banner patterns), and three new pottery sherds (scrape, guster, and flow pottery sherds). Four brand new potions have been added with the update, along with 20 new paintings in Minecraft." },
            { question: "When was Minecraft first released?", answer: "Minecraft was first released on May 17, 2009." },
            { question: "What is the significance of Minecraft Beta 1.8?", answer: "Beta 1.8, also known as the Adventure Update, introduced features like hunger, sprinting, villages, ravines, and strongholds." },
            { question: "How often does Minecraft receive updates?", answer: "Minecraft receives regular updates with new features, biomes, mobs, and improvements based on player feedback and developer plans." },
            { question: "How do you access experimental gameplay features in Minecraft?", answer: "Experimental gameplay features can be enabled in settings to test upcoming features and changes." },
            { question: "What is the most recent Minecraft Java Edition update?", answer: "The most recent update for Minecraft Java Edition is version 1.20." },
            { question: "What is the Caves & Cliffs update in Minecraft?", answer: "The Caves & Cliffs update introduced new cave generation, blocks, mobs like the Warden and Axolotl, and features like the Deep Dark biome." },
            // Add more updates and versions questions
        ]
    },
    {
        category: "Tips and Tricks",
        questions: [
            { question: "What is the rarest biome in Minecraft?", answer: "The rarest biome is the Modified Jungle Edge biome." },
            { question: "What is the best level to find diamonds?", answer: "The best level to find diamonds is Y level -30 to -58." },
            { question: "How can you stop Endermen from teleporting?", answer: "You can stop Endermen from teleporting by placing blocks such as water or leaves around them." },
            { question: "What is the use of a name tag in Minecraft?", answer: "A name tag is used to name mobs and prevent them from despawning." },
            { question: "How do you craft an Enchantment Table?", answer: "To craft an Enchantment Table, you need 4 obsidian, 2 diamonds, and 1 book." },
            { question: "What is the purpose of the beacon?", answer: "The beacon provides status effects such as speed, haste, resistance, jump boost, strength, and regeneration." },
            { question: "How do you get a skeleton horse?", answer: "A skeleton horse can be obtained during a thunderstorm when a skeleton horse trap is triggered by lightning." },
            { question: "What is the Nether roof used for?", answer: "The Nether roof can be used for safe travel and building farms that require a flat and large surface." },
            { question: "How do you breed turtles?", answer: "You breed turtles by feeding them seagrass." },
            { question: "What is the best tool to use for mining stone?", answer: "The best tool for mining stone is a pickaxe." }
        ]
    },
    {
        category: "Others",
        questions: [
            { question: "thank you", answer: "It was my pleasure." },
            { question: "who are you", answer: "I am a simple AI crated by appuzlota." },
            { question: "who is appuzlota", answer: "appuzlota is a minecraft player and a developer." },
            { question: "bigest noob in minecraft", answer: "scopyybro is the bigest noob in minecraft." },
            { question: "lol", answer: "that's funny" },
            
        ]
    },
    {
        category: "Story and Lore",
        questions: [
            { question: "What is the lore behind the creation of Minecraft?", answer: "Minecraft's creator, Markus Persson (Notch), began developing the game in May 2009 as a sandbox survival game influenced by games like Infiniminer and Dwarf Fortress." },
            { question: "Who are the main characters in Minecraft's story?", answer: "Minecraft's story revolves around Steve, the default player character, and Alex, another default player character introduced later." },
            { question: "What is the history of Minecraft's updates?", answer: "Minecraft has a history of updates that have added new features, biomes, mobs, and mechanics to enhance gameplay and exploration over time." },
            { question: "What is the backstory of the Ender Dragon in Minecraft?", answer: "The Ender Dragon is the final boss of Minecraft and resides in the End dimension, where players must defeat it to access the End gateway and exit portal." },
            { question: "How do you access Minecraft's lore and backstory?", answer: "Minecraft's lore and backstory can be discovered through in-game books, achievements, and exploration of different dimensions, biomes, and structures." },
            { question: "What is the significance of the End Poem in Minecraft?", answer: "The End Poem is a narrative conclusion to Minecraft's story, providing insight into the game's themes of creation, exploration, and discovery." },
            { question: "How has Minecraft's story evolved over time?", answer: "Minecraft's story has evolved through updates, expansions, and community creations that have expanded its lore, characters, and environments." },
            { question: "What is the importance of Minecraft's community in shaping its story?", answer: "Minecraft's community plays a vital role in creating mods, maps, and content that expand the game's story, characters, and gameplay experiences." },
            // Add more story and lore questions
        ]
    },
    // Add more categories with respective questions and answers
];

// Function to generate a response based on user input
function generateResponse(userInput) {
    const lowerMessage = userInput.toLowerCase().trim();
    
    // Search through all categories and questions for a match
    for (const category of questionsAnswers) {
        for (const qa of category.questions) {
            // Check for partial match or similarity in questions
            if (qa.question.toLowerCase().includes(lowerMessage) || levenshteinDistance(qa.question.toLowerCase(), lowerMessage) <= 3) {
                return qa.answer;
            }
        }
    }

    return "I'm sorry, I don't have an answer to that question.";
}

// Function to calculate Levenshtein distance between two strings
function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    // Initialize matrix
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Calculate Levenshtein distance
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j] + 1      // deletion
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

// Function to add user message to chat box
function addUserMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', 'user-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    // Scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to add AI message to chat box with typing animation
function addAIMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', 'ai-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    // Scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to handle user input and generate response
function handleUserInput() {
    const userInput = document.getElementById('user-input').value;
    
    if (userInput.trim() === '') return; // Don't process empty input
    
    // Add user message to chat box
    addUserMessage(userInput);

    // Clear user input field
    document.getElementById('user-input').value = '';

    // Simulate AI typing delay
    setTimeout(() => {
        const response = generateResponse(userInput);
        // Add AI response to chat box with typing animation
        addAIMessageWithTyping(response);
        // Speak response if voice is enabled
        if (isVoiceEnabled) {
            speakResponse(response);
        }
    }, 500); // Adjust delay as needed
}

// Function to add AI message to chat box with typing animation
function addAIMessageWithTyping(message) {
    const typingDelay = 50; // Delay between each character typing
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', 'ai-message');
    const chatBox = document.getElementById('chat-box');
    chatBox.appendChild(messageDiv);
    
    // Typing animation effect
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i <= message.length) {
            messageDiv.textContent = message.substring(0, i);
            i++;
        } else {
            clearInterval(typingInterval);
            // Display full message after typing animation
            messageDiv.textContent = message;
            // Scroll to bottom of chat box after message is fully typed
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }, typingDelay);
}

// Function to speak the response using Web Speech API
function speakResponse(response) {
    const utterance = new SpeechSynthesisUtterance(response);
    utterance.voice = selectedVoice;
    utterance.rate = speechRate;
    speechSynthesis.speak(utterance);
}

// Function to toggle voice on or off
function toggleVoice() {
    isVoiceEnabled = !isVoiceEnabled;
    document.getElementById('toggle-voice-btn').textContent = isVoiceEnabled ? 'Disable Voice' : 'Enable Voice';
}

// Function to populate voice options
function populateVoiceOptions() {
    const voices = speechSynthesis.getVoices();
    const voiceSelect = document.getElementById('voice-select');

    voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });

    // Set the selected voice
    voiceSelect.addEventListener('change', () => {
        selectedVoice = voices[voiceSelect.value];
    });

    // Set default voice
    selectedVoice = voices[0];
}

// Initial state for voice
let isVoiceEnabled = false;
let selectedVoice = null;
let speechRate = 1.0;

// Event listener for send button click
document.getElementById('send-btn').addEventListener('click', handleUserInput);

// Event listener for Enter key press in input field
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

// Event listener for toggle voice button click
document.getElementById('toggle-voice-btn').addEventListener('click', toggleVoice);

// Event listener for rate control change
document.getElementById('rate-control').addEventListener('input', (e) => {
    speechRate = e.target.value;
});

// Load voices and populate options when available
speechSynthesis.onvoiceschanged = populateVoiceOptions;

// Initial AI greeting message
const initialMessage = "Hello! Ask me anything about Minecraft and Thallipoli Network.";
addAIMessageWithTyping(initialMessage);
if (isVoiceEnabled) {
    speakResponse(initialMessage);
}