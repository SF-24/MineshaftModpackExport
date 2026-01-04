// priority: 0

JEIEvents.hideFluids(event => {
  event.hide("supplementaries:lumisene")
})

const guidebook = Item.of("lavender:dynamic_book",'{BookId:"modpack:guidebook"}')


JEIEvents.addItems(event => {
  event.add(Item.of(guidebook))
})
