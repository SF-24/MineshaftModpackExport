tag @s remove old_achievements.ride_minecart
execute as @e[type=marker,tag=old_achievements.minecartRideStart] if score @s old_achievements.id = @p old_achievements.id run kill @s
scoreboard players reset @s old_achievements.id