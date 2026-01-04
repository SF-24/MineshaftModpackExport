ServerEvents.tags('item',event => {
    event.add("minecraft:stone_tool_materials","minecraft:flint")
    event.remove("minecraft:oak_logs", "minecraft:oak_wood")
    event.remove("minecraft:oak_logs", "minecraft:stripped_oak_wood")
    event.remove("minecraft:oak_logs", "minecraft:stripped_oak_log")
    event.remove("minecraft:planks", [
        "minecraft:mangrove_planks",
        "minecraft:warped_planks",
        "minecraft:bamboo_planks",
        "minecraft:cherry_planks"
    ])
})