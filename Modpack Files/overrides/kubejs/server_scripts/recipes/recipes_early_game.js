ServerEvents.recipes(event=>{
    event.shaped(
        Item.of("supplementaries:bamboo_spikes"),
        [
            'S S',
            'XXX'
        ],
        {
            X: "#minecraft:planks",
            S: "minecraft:stick"
        }
    )

    event.shapeless(
        Item.of("kubejs:fire_drill"),
        [
            "2x minecraft:stick",
            "minecraft:string"
        ]
    ).id("kubejs:fire_drill")

    event.shapeless(
        Item.of("kubejs:fire_drill"),
        [
            "2x minecraft:stick",
            "#minecraft:leaves"
        ]
    )
})