const potteryCollection = [
    {
        Id: 1,
        Shape: "Egyptian Pottery",
        Weight: 10,
        Height: 3,
        Cracked: false,
        Tempreature: 2000,
        Price: 40
    },
    {
        Id: 2,
        Shape: "Modern",
        Weight: 5,
        Height: 2,
        Cracked: false,
        Tempreature: 2050,
        Price: 40
    },
    {
        Id: 3,
        Shape: "Greek",
        Weight: 2,
        Height: 2,
        Cracked: false,
        Tempreature: 1500,
        Price: 20
    },
    {
        Id: 4,
        Shape: "Ceramic",
        Weight: 1,
        Height: 3,
        Cracked: true,
        Tempreature: 2250,
        Price: 20
    },
    {
        Id: 5,
        Shape: "Ancient",
        Weight: 4,
        Height: 4,
        Cracked: true,
        Tempreature: 2300,
        Price: 40
    }

]
export const usePottery = () => {
    return potteryCollection.slice()
}

const potteryToSell = []
    for (const pottery of potteryCollection) {
        if (pottery.Cracked === false) {
            potteryToSell.push(pottery)
        }
    }

    return potteryToSell



// Define your functions


// Create 5 pieces of pottery, some cracked and some not.
// Non-cracked pottery should be added to the collection
// of pottery to sell at the craft show.

