CommonAddedEvents.playerChangeDimension(event => {
    if(!Utils.getServer().persistentData.getBoolean(nether_discovered)) Utils.getServer().persistentData.putBoolean("nether_discovered", true);

    if(event.getNewLevel().dimension != "minecraft:the_nether" || event.hasGameStage("stage_nether")) return;
    event.addGameStage("stage_nether")
})

// Listen for right-click on obsidian (when lighting portal with flint and steel)  
BlockEvents.rightClicked('minecraft:obsidian', event => {  
    // Check if player is holding flint and steel  
    if ((event.player.getMainHandItem().id === "minecraft:fire_charge" || event.player.getMainHandItem().id === 'minecraft:flint_and_steel' || event.player.getMainHandItem().id === "kubejs:fire_drill") && !Utils.getServer().persistentData.getBoolean("nether_discovered")) {
        Utils.getServer().persistentData.putBoolean("nether_discovered", true)
        Utils.getServer().tell(Component.json('{"text":"A hellish corruption has been unleashed","color":"red"}'))
    }  
})  
