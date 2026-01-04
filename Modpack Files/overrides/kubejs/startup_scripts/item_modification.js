// priority: 1

// Item modification

const staffDurability = 64;

ItemEvents.modification(event => {
  // Nether tier
  event.modify("elementary-staffs:staff/fire", item => {
    item.setMaxDamage(staffDurability)
  })
  // Unknown tier? Maybe from ocean temples.
  event.modify("elementary-staffs:staff/water", item => {
    item.setMaxDamage(staffDurability)
  })
  // Aether tier
  event.modify("elementary-staffs:staff/wind", item => {
    item.setMaxDamage(staffDurability)
  })
  // Healing (Aether Tier)????
  event.modify("elementary-staffs:staff/life", item => {
    item.setMaxDamage(staffDurability)
  })
  // Ice tier (Overworld Tier)?????
  event.modify("elementary-staffs:staff/ice", item => {
    item.setMaxDamage(staffDurability)
  })
})