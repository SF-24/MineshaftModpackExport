ServerEvents.recipes(event=>{
    event.shaped(
        Item.of("minecraft:recovery_compass"),
        [
            'DDD',
            'DCD',
            'DDD'
        ],
        {
            D: "minecraft:diamond",
            C: "minecraft:compass"
        }
    )

    event.shapeless(
        Item.of("elementary-staffs:grenade/fire", 8),
        [
            "4x minecraft:blaze_powder",
            "minecraft:glass_bottle"
        ]
    )

    event.shaped(
        Item.of("elementary-staffs:staff/water"),
        [
            'DHD',
            ' S ',
            ' S '
        ], 
        {
            D: "minecraft:diamond",
            S: "minecraft:stick",
            H: "minecraft:heart_of_the_sea"
        }
    )

    event.shaped(
        Item.of("minecraft:conduit"),
        [
            'CDC',
            'DHD',
            'CDC'
        ],
        {
            C: "minecraft:prismarine_crystals",
            H: "minecraft:heart_of_the_sea",
            D: "minecraft:diamond"
        }
    )
})