const sellMaxUses=8;
const sellSpecialMaxUses=1;
const sellRareMaxUses=2;
const buySpecialMaxUses=1;
const buyMaxUses=2;
const butStockMaxUses=4;

const monumentTrade = VillagerUtils.createStructureMapTrade("10x minecraft:emerald", "minecraft:monument").maxUses(1);
const mineshaftTrade = VillagerUtils.createStructureMapTrade("8x minecraft:emerald", "#minecraft:mineshaft").maxUses(1);
const structureTrade = VillagerUtils.createStructureMapTrade("10x minecraft:emerald", [
    "#minecraft:on_ocean_explorer_maps", "moderner_beta:ocean_shrine", "minecraft:desert_pyramid", "minecraft:jungle_pyramid", "legacy:desert_pyramid"
])

MoreJSEvents.wandererTrades(event=>{
    event.removeVanillaTrades(1);
    event.removeVanillaTrades(2);

    // Wandering trader gives emeralds:
    event.addCustomTrade(1, (offer)=>{
        offer.setFirstInput("4x minecraft:hay_block");
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(buyMaxUses);
    })
    event.addCustomTrade(1, (offer)=>{
        offer.setFirstInput("minecraft:water_bucket");
        offer.setOutput("2x minecraft:emerald");
        offer.setMaxUses(buyMaxUses);
    })
    event.addCustomTrade(1, (offer)=>{
        offer.setFirstInput("minecraft:milk_bucket");
        offer.setOutput("2x minecraft:emerald");
        offer.setMaxUses(buyMaxUses);
    })
    event.addCustomTrade(1, (offer)=>{
        offer.setFirstInput("minecraft:golden_carrot");
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(buyMaxUses);
    })
    event.addCustomTrade(1, offer=>{
        offer.setFirstInput("minecraft:heart_of_the_sea")
        offer.setOutput("8x minecraft:emerald");
        offer.setMaxUses(buySpecialMaxUses);
    })
    event.addCustomTrade(1, offer=>{
        offer.setFirstInput("12x minecraft:redstone_block")
        offer.setOutput("2x minecraft:emerald");
        offer.setMaxUses(buySpecialMaxUses);
    })

    // Rare stuff
    event.addCustomTrade(2, (offer)=>{
        offer.setFirstInput("3x minecraft:emerald");
        offer.setOutput("8x minecraft:crimson_stem");
        offer.setMaxUses(sellRareMaxUses);
    })
    event.addCustomTrade(2, (offer)=>{
        offer.setFirstInput("2x minecraft:emerald");
        offer.setOutput("minecraft:bundle");
        offer.setMaxUses(sellSpecialMaxUses);
    })
    event.addCustomTrade(2, (offer)=>{
        offer.setFirstInput("2x minecraft:emerald");
        offer.setOutput("minecraft:glowstone");
        offer.setMaxUses(sellMaxUses);
    })
    event.addCustomTrade(2, (offer)=>{
        offer.setFirstInput("5x minecraft:emerald");
        offer.setOutput("4x minecraft:prismarine_crystals");
        offer.setMaxUses(sellRareMaxUses);
    })
    event.addCustomTrade(2, (offer)=>{
        offer.setFirstInput("3x minecraft:emerald");
        offer.setOutput("8x minecraft:netherrack");
        offer.setMaxUses(sellRareMaxUses);
    })

    event.addCustomTrade(2, (offer)=>{
        offer.setFirstInput("12x minecraft:emerald");
        offer.setOutput("supplementaries:globe");
        offer.setMaxUses(sellSpecialMaxUses);
    })

    event.addTrade(2, monumentTrade)
    event.addTrade(2, mineshaftTrade)
    event.addTrade(2, structureTrade)

    // Saplings
    event.addCustomTrade(1, (offer)=>{
        offer.setFirstInput("5x minecraft:emerald");
        offer.setOutput("minecraft:oak_sapling");
        offer.setMaxUses(sellMaxUses)
    })
    event.addCustomTrade(1, (offer)=>{
        offer.setFirstInput("5x minecraft:emerald");
        offer.setOutput("minecraft:birch_sapling");
        offer.setMaxUses(sellMaxUses)
    })
    event.addCustomTrade(1, (offer)=>{
        offer.setFirstInput("5x minecraft:emerald");
        offer.setOutput("minecraft:spruce_sapling");
        offer.setMaxUses(sellMaxUses)
    })
    event.addCustomTrade(1, (offer)=>{
        offer.setFirstInput("5x minecraft:emerald");
        offer.setOutput("minecraft:jungle_sapling");
        offer.setMaxUses(sellMaxUses)
    })
    event.addCustomTrade(1, (offer)=>{
        offer.setFirstInput("5x minecraft:emerald");
        offer.setOutput("minecraft:acacia_sapling");
        offer.setMaxUses(sellMaxUses)
    })
    event.addCustomTrade(1, (offer)=>{
        offer.setFirstInput("5x minecraft:emerald");
        offer.setOutput("minecraft:dark_oak_sapling");
        offer.setMaxUses(sellMaxUses)
    })
    event.addCustomTrade(1, (offer)=>{
        offer.setFirstInput("3x minecraft:emerald");
        offer.setOutput("minecraft:cactus");
        offer.setMaxUses(sellMaxUses)
    })
    event.addCustomTrade(1, (offer)=>{
        offer.setFirstInput("minecraft:emerald");
        offer.setOutput("8x minecraft:sand");
        offer.setMaxUses(sellMaxUses)
    })
    event.addCustomTrade(1, (offer)=>{
        offer.setFirstInput("minecraft:emerald");
        offer.setOutput("4x minecraft:red_sand");
        offer.setMaxUses(sellMaxUses)
    })
})


MoreJSEvents.updateWandererOffers(event=>{    
    let hasMap=false;

    if(event.getOffers().length<6) {
        for(let i=event.getOffers().length; i<6; i++) {
            event.addRandomOffer(event.getWandererTrades())
        }
    }
})