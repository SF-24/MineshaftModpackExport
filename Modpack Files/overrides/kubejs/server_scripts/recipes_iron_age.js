ServerEvents.recipes(event=>{
    event.shaped(
        Item.of("minecraft:lodestone"),
        [
            'CCC',
            'CIC',
            'CCC'
        ],
        {
            C: "minecraft:cobblestone",
            I: "minecraft:iron_ingot"
        }
    )

    event.shaped(
        Item.of("minecraft:spyglass"), 
        [
            'O',
            'G',
            'G'
        ],
        {
            O: "minecraft:glass",
            G: "minecraft:gold_ingot"
        }
    )
})