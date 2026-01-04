// priority: 0
// Loot

LootJS.modifiers((event) => {
    // Stones drop cobblestone unless mined with silk touch
    const deepslate = LootEntry.of("minecraft:deepslate").when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
    const granite = LootEntry.of("minecraft:granite").when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
    const andesite = LootEntry.of("minecraft:andesite").when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
    const driorite = LootEntry.of("minecraft:driorite").when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")));
    
    const cobblestone = "minecraft:cobblestone"

    event.addBlockLootModifier("minecraft:deepslate").removeLoot(Ingredient.all).addAlternativesLoot(deepslate, cobblestone)
    event.addBlockLootModifier("minecraft:granite").removeLoot(Ingredient.all).addAlternativesLoot(granite, cobblestone)
    event.addBlockLootModifier("minecraft:driorite").removeLoot(Ingredient.all).addAlternativesLoot(driorite, cobblestone)
    event.addBlockLootModifier("minecraft:andesite").removeLoot(Ingredient.all).addAlternativesLoot(andesite, cobblestone)
    
    event.addEntityLootModifier("minecraft:elder_guardian").addSequenceLoot(LootEntry.of("minecraft:heart_of_the_sea").when(c => c.randomChance(0.70)))
    event.addEntityLootModifier("minecraft:guardian").addSequenceLoot(LootEntry.of("minecraft:heart_of_the_sea").when(c => c.randomChance(0.05)))
});
