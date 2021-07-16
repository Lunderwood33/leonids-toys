
const toys = [
    {
        id: 1,
        name: "Barbie",
        maker: "Fischer-Price",
        price: 20,
        weight: 1.2
    },

    {
        id: 2,
        name: "Hotwheel",
        maker: "Hotwheels",
        price: 1,
        weight: .4
    },

    {
        id: 3,
        name: "Rescue Hero",
        maker: "Fischer-Price",
        price: 15,
        weight: 1.5
    }
]

const bicycle = {
    id: 4,
    name: "Bicycle",
    maker: "Schwinn",
    price: 150,
    weight: 20
}
toys.push(bicycle)

const skateboard = {
    id: 5,
    name: "Skateboard",
    maker: "Tony Hawk",
    price: 50,
    weight: 5
}
toys.push(skateboard)

const snowboard = {
    name: "Snowboard",
    maker: "Burton",
    price: 250,
    weight: 10
}

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}

addToyToInventory(snowboard)

for (const toy of toys) {
    console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars. It weighs ${toy.weight} grams.`)
    
}