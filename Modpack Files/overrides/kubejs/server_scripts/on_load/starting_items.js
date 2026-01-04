const guidebook = Item.of("lavender:dynamic_book",'{BookId:"modpack:guidebook"}')

PlayerEvents.loggedIn(event=>{
    if(!event.hasGameStage("starting_items")) {
        event.addGameStage("starting_items")
        event.player.give("minecraft:bundle")
        event.player.give("minecraft:bread")
        event.player.give(guidebook)
    }
})

ServerEvents.recipes(event=>{
    event.shapeless(guidebook,["3x minecraft:paper"]).id('modpack:guidebook')
})
