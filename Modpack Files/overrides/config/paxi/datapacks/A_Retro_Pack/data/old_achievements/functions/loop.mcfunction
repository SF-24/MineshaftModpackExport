# Fly Pig
scoreboard players add #ride_pig old_achievements.time 1
execute as @a at @s if predicate old_achievements:ride_pig as @e[type=pig,sort=nearest,limit=1] if score #ride_pig old_achievements.time matches 10.. run function old_achievements:fly_pig

# On A Rail
scoreboard players add #on_a_rail old_achievements.time 1
execute as @a at @s run function old_achievements:on_a_rail/main