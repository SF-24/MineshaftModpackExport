# Summon start marker & tag player
execute as @s[tag=!old_achievements.ride_minecart] run function old_achievements:on_a_rail/summon_marker

# Run when distance condition is met
execute if entity @e[type=marker,tag=old_achievements.minecartRideStart,distance=1000..] run advancement grant @s only old_achievements:on_a_rail