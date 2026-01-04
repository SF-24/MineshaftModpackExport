# Timer
scoreboard players reset #on_a_rail old_achievements.time

# Run if mounted
execute if predicate old_achievements:ride_minecart run function old_achievements:on_a_rail/active

# Run unless mounted
execute as @s[tag=old_achievements.ride_minecart] unless predicate old_achievements:ride_minecart run function old_achievements:on_a_rail/dismount