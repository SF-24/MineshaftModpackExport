// priority: 2

// Building blocks
StartupEvents.modifyCreativeTab("minecraft:building_blocks", event => {})

// Decoration blocks
StartupEvents.modifyCreativeTab("minecraft:colored_blocks", event => {
    event.addBefore(
        "minecraft:dragon_head",
        "supplementaries:enderman_head"
    )
    event.addAfter("minecraft:armor_stand",[
        "supplementaries:hat_stand","supplementaries:globe","supplementaries:hourglass"

    ])
    event.addBefore("minecraft:dragon_egg",[
        "supplementaries:clock_block", "supplementaries:notice_board","supplementaries:urn","supplementaries:bamboo_spikes"
    ])
})

// Redstone
StartupEvents.modifyCreativeTab("minecraft:redstone_blocks", event => {
    event.remove("supplementaries:dispenser_minecart")
})

// Transportation
StartupEvents.modifyCreativeTab("minecraft:functional_blocks", event => {
    event.remove([
        "#supplementaries:presents",
        "#supplementaries:flags",
        "supplementaries:globe",
        "supplementaries:hourglass",
        "supplementaries:hat_stand",
        "supplementaries:urn",
        "supplementaries:enderman_head",
        "supplementaries:bamboo_spikes",
        "supplementaries:clock_block",
        "supplementaries:notice_board"
    ])
    event.addAfter("minecraft:hopper_minecart", "supplementaries:dispenser_minecart")
})

// Misc
StartupEvents.modifyCreativeTab("minecraft:natural_blocks", event => {
    event.addAfter(
        "minecraft:music_disc_pigstep",
        "supplementaries:music_disc_heave_ho"
    )
    event.addAfter(
        "minecraft:piglin_banner_pattern",
        "supplementaries:dragon_banner_pattern"
    )
})

// Foodstuff

StartupEvents.modifyCreativeTab("minecraft:food_and_drinks", event => {})

// Tools

const guidebook = Item.of("lavender:dynamic_book",'{BookId:"modpack:guidebook"}')

StartupEvents.modifyCreativeTab("minecraft:tools_and_utilities", event => {
    event.remove([
        "supplementaries:music_disc_heave_ho"
    ])
    event.add(["minecraft:bundle",guidebook])
    event.addBefore("minecraft:flint_and_steel","kubejs:fire_drill")
})

// Combat
StartupEvents.modifyCreativeTab("minecraft:combat", event => {
	event.add([
        "elementary-staffs:grenade/fire",
        "elementary-staffs:staff/fire",
        "elementary-staffs:staff/water",
        "elementary-staffs:staff/wind",
        "elementary-staffs:staff/ice",
        "elementary-staffs:staff/poison",
        "elementary-staffs:staff/heal"
    ])
})

// Brewing
StartupEvents.modifyCreativeTab("minecraft:ingredients", event => {
    event.remove([
        "supplementaries:dragon_banner_pattern"
    ])}
)

// Modded tabs

StartupEvents.modifyCreativeTab("elementary-staffs:grenade", event => {
	event.remove("elementary-staffs:grenade/fire")
})

StartupEvents.modifyCreativeTab("elementary-staffs:staffs", event => {
    event.remove([
        "elementary-staffs:staff/fire",
        "elementary-staffs:staff/water",
        "elementary-staffs:staff/wind",
        "elementary-staffs:staff/ice",
        "elementary-staffs:staff/poison",
        "elementary-staffs:staff/heal"
    ])}
)

StartupEvents.modifyCreativeTab("kubejs:tab", event => {
    event.remove([
        "kubejs:fire_drill"
    ])
})
