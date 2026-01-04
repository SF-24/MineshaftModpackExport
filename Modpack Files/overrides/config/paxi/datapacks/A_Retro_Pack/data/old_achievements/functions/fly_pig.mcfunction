# Reset Timer
scoreboard players reset #fly_pig old_achievements.time

# Store FallDistance
execute store result score @s old_achievements.fallDistance run data get entity @s FallDistance

# Result
execute if score @s old_achievements.fallDistance matches 5.. run advancement grant @p only old_achievements:fly_pig
execute if score @s old_achievements.fallDistance matches 0 run scoreboard players reset @s old_achievements.fallDistance