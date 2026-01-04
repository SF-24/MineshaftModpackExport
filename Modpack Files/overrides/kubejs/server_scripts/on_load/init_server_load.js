global.reloaded_startup = false

ServerEvents.loaded(event => {
    if(global.reloaded_startup) { return; }
    console.log("Kubejs: Reloaded startup scripts to fix creative tabs not fully loading.")
    Utils.getServer().runCommand("kubejs reload startup_scripts")
    console.log("Kubejs: Running /reload command to bypass bugs.")
    Utils.getServer().runCommand("reload")
    global.reloaded_startup = true
})