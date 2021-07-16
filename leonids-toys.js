
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

const toyToFind = 2

for (const toy of toys) {
    

        if (toy.id === toyToFind) {

            console.log(`The toy company, ${toy.maker}, makes a ${toy.name} that costs $${toy.price}. `)
        }
}