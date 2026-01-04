// Main general recipes

ServerEvents.recipes(event=>{
    // Copper stuff
    event.remove({ output: "minecraft:spyglass" })
    event.remove({ output: "minecraft:lightning_rod" })
    event.remove({ output: "minecraft:tinted_glass"})
    event.remove({ input: "#minecraft:mangrove_logs" })
    event.remove({ output: "minecraft:calibrated_sculk_sensor"})
    event.remove({ mod: "elementary-staffs" })
    event.remove({ output: "minecraft:composter"})
    event.remove({ output: "minecraft:lantern"})
    event.remove({ output: "minecraft:soul_lantern"})
    event.remove({ output: "minecraft:mossy_cobblestone"})

    event.remove({ output: "minecraft:lectern"})
    event.remove({ output: "minecraft:oak_button"})
    event.remove({ output: "minecraft:oak_trapdoor"})
    event.remove({ output: "minecraft:oak_boat"})
    event.remove({ output: "minecraft:oak_pressure_plate"})

    event.remove({ output: "minecraft:powered_rail"})
    event.remove({ output: "minecraft:activator_rail"})
    event.remove({ output: "minecraft:detector_rail"})

    event.remove({ output: "supplementaries:cannonball"})

    // Remove dyes
    // event.replaceInput({input: Ingredient.all}, "minecraft:brown_dye", "minecraft:cocoa_beans")
    // event.replaceInput({input: Ingredient.all}, "minecraft:blue_dye", "minecraft:lapis_lazuli")
    // event.replaceInput({input: Ingredient.all}, "minecraft:black_dye", "minecraft:ink_sac")

    event.remove({ type: "minecraft:smithing"})

    event.shaped(
        Item.of("supplementaries:flute"),
        [
            'XXX'
        ],
        {
            X: "minecraft:sugar_cane"
        }
    )

    event.shaped(
        Item.of("minecraft:bundle"),
        [
            ' S ',
            'X X',
            'XXX'
        ],
        {
            X: "minecraft:leather",
            S: "minecraft:string"
        }
    )

    event.shaped(
        Item.of("minecraft:lectern"),
        [
            'XXX',
            ' B ',
            ' X '
        ],
        {
            X: "#minecraft:planks",
            B: "minecraft:bookshelf"
        }
    )

    event.shaped(
        Item.of("minecraft:oak_boat"),
        [
            'X X',
            'XXX'
        ],
        {
            X: "#minecraft:planks"
        }
    )

    event.shaped(
        Item.of("minecraft:oak_pressure_plate"),
        [
            'XX'
        ],
        {
            X: "#minecraft:planks"
        }
    )

    event.shaped(
        Item.of("minecraft:oak_trapdoor"),
        [
            'XXX',
            'XXX'
        ],
        {
            X: "#minecraft:planks"
        }
    )

    event.shapeless(
        Item.of("minecraft:oak_button"),
        [
            "#minecraft:planks"
        ]
    )

    event.shaped(
        Item.of("minecraft:smooth_stone_slab"),
        [
            'XXX'
        ],
        {
            X: "minecraft:stone"
        }
    )

    event.shapeless(
        Item.of("minecraft:stone_button"),
        [
            "minecraft:blackstone"
        ]
    )

    event.shaped(
        Item.of("minecraft:scaffolding", 4),
        [
            'PPP',
            'S S',
            'S S'
        ],
        {
            P: "#minecraft:planks",
            S: "minecraft:stick"
        }
    )

    event.shaped(
        Item.of("minecraft:lantern", 4),
        [
            ' I ',
            'GTG',
            'GGG'
        ],
        {
            I: "minecraft:iron_ingot",
            T: "minecraft:glowstone_dust",
            G: "minecraft:glass"
        }
    )

    event.shaped(
        Item.of("minecraft:soul_lantern", 4),
        [
            ' I ',
            'GTG',
            'GSG'
        ],
        {
            I: "minecraft:iron_ingot",
            T: "minecraft:glowstone_dust",
            S: "#minecraft:soul_fire_base_blocks",
            G: "minecraft:glass"
        }
    )

    event.shaped(
        Item.of("supplementaries:cannonball", 8),
        [
            ' I ',
            'IBI',
            ' I '
        ],
        {
            I: "minecraft:iron_ingot",
            B: "minecraft:iron_block"
        }
    )

    event.shaped(
        Item.of("minecraft:powered_rail", 8),
        [
            'G G',
            'GSG',
            'GRG'
        ],
        {
            G: "minecraft:gold_ingot",
            S: "minecraft:stick",
            R: "minecraft:redstone_dust"
        }
    )

    event.shaped(
        Item.of("minecraft:activator_rail", 8),
        [
            'ISI',
            'IRI',
            'ISI'
        ],
        {
            I: "minecraft:iron_ingot",
            S: "minecraft:stick",
            R: "minecraft:redstone_torch"
        }
    )

    event.shaped(
        Item.of("minecraft:detector_rail", 8),
        [
            'I I',
            'IPI',
            'IRI'
        ],
        {
            I: "minecraft:iron_ingot",
            P: "minecraft:stone_pressure_plate",
            R: "minecraft:redstone_dust"
        }
    )
})