# summon start marker
summon marker ~ ~ ~ {Tags:["old_achievements.minecartRideStart","old_achievements.new"]}

# add id
scoreboard players operation @e[type=marker,sort=nearest,limit=1,tag=old_achievements.new] old_achievements.id = #minecartStartID old_achievements.id
scoreboard players operation @s old_achievements.id = #minecartStartID old_achievements.id
scoreboard players add #minecartStartID old_achievements.id 1

# remove marker tag
tag @e[type=marker,sort=nearest,limit=1,tag=old_achievements.new] remove old_achievements.new

# add player tag
tag @s add old_achievements.ride_minecart