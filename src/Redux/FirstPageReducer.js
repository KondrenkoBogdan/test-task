let SET_NEW_PAGE_SELECTED = "SET_NEW_PAGE_SELECTED";
let SET_NEW_PORTION = "SET_NEW_PORTION"
const sale = "Sale";
const buy = "Buy";
const deposit = "Deposit";
const done = "Done";
const cancel = "Cancel";
const error = "Error";


export const setNewPageSelected = (num) => {
    return {type: SET_NEW_PAGE_SELECTED, num}
};
export const setNewPortion = (e) => {
    return {type: SET_NEW_PORTION, e}
}

let initialState = {
    items: [
        {id: 1, dateTime: new Date(2021, 4, 27, 11, 44),info: "Buy in Fortnite the unique item, Golden Pickaxe",type: buy,cash: 2.25,status: done},
        {id: 2, dateTime: new Date(2020, 9, 26, 9, 51),info: "Buy in WOW BFA the unique item, Axe of Ice King",type: deposit,cash: 65.00,status: cancel},
        {id: 3, dateTime: new Date(2019, 11, 27, 14, 46),info: "Buy in Fortnite the unique user, Happy 8 ball",type: buy,cash: 43.00,status: error},
        {id: 4, dateTime: new Date(2018, 11, 14, 4, 52),info: " Make up deposit $ 5,000.00 to  your account.",type: sale,cash: 5000.25,status: done},
        {id: 5, dateTime: new Date(2017, 10, 27, 11, 44),info: "Buy in Fortnite the unique user, Golden fish of enemy",type: sale,cash: 2.25,status: done},
        {id: 6, dateTime: new Date(2016, 9, 27, 11, 44),info: "Buy in Fortnite the unique user, Death Unikorn ",type: sale,cash: 2.25,status: done},
        {id: 7, dateTime: new Date(2015, 8, 27, 11, 44),info: "Buy in WOW BFA the unique item, Axe of Fire",type: sale,cash: 2.25,status: done},
        {id: 8, dateTime: new Date(2014, 7, 27, 11, 44),info: "Buy in WOW Classic the unique game area, Dream of Life",type: sale,cash: 2.25,status: done},
        {id: 9, dateTime: new Date(2013, 6, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 10, dateTime: new Date(2012, 5, 27, 11, 44),info: " Make up deposit $ 1,500.00 to  your account.",type: sale,cash: 2.25,status: done},
        {id: 11, dateTime: new Date(2011, 4, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 12, dateTime: new Date(2010, 3, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 13, dateTime: new Date(2021, 4, 27, 11, 44),info: "Buy in Fortnite the unique item, Golden Pickaxe",type: buy,cash: 2.25,status: done},
        {id: 14, dateTime: new Date(2020, 9, 26, 9, 51),info: "Buy in WOW BFA the unique item, Axe of Ice King",type: deposit,cash: 65.00,status: cancel},
        {id: 15, dateTime: new Date(2019, 11, 27, 14, 46),info: "Buy in Fortnite the unique user, Happy 8 ball",type: buy,cash: 43.00,status: error},
        {id: 16, dateTime: new Date(2018, 11, 14, 4, 52),info: " Make up deposit $ 5,000.00 to  your account.",type: sale,cash: 5000.25,status: done},
        {id: 17, dateTime: new Date(2017, 10, 27, 11, 44),info: "Buy in Fortnite the unique user, Golden fish of enemy",type: sale,cash: 2.25,status: done},
        {id: 18, dateTime: new Date(2016, 9, 27, 11, 44),info: "Buy in Fortnite the unique user, Death Unikorn ",type: sale,cash: 2.25,status: done},
        {id: 19, dateTime: new Date(2015, 8, 27, 11, 44),info: "Buy in WOW BFA the unique item, Axe of Fire",type: sale,cash: 2.25,status: done},
        {id: 20, dateTime: new Date(2014, 7, 27, 11, 44),info: "Buy in WOW Classic the unique game area, Dream of Life",type: sale,cash: 2.25,status: done},
        {id: 21, dateTime: new Date(2013, 6, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 22, dateTime: new Date(2012, 5, 27, 11, 44),info: " Make up deposit $ 1,500.00 to  your account.",type: sale,cash: 2.25,status: done},
        {id: 24, dateTime: new Date(2011, 4, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 25, dateTime: new Date(2010, 3, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 26, dateTime: new Date(2021, 4, 27, 11, 44),info: "Buy in Fortnite the unique item, Golden Pickaxe",type: buy,cash: 2.25,status: done},
        {id: 27, dateTime: new Date(2020, 9, 26, 9, 51),info: "Buy in WOW BFA the unique item, Axe of Ice King",type: deposit,cash: 65.00,status: cancel},
        {id: 28, dateTime: new Date(2019, 11, 27, 14, 46),info: "Buy in Fortnite the unique user, Happy 8 ball",type: buy,cash: 43.00,status: error},
        {id: 29, dateTime: new Date(2018, 11, 14, 4, 52),info: " Make up deposit $ 5,000.00 to  your account.",type: sale,cash: 5000.25,status: done},
        {id: 30, dateTime: new Date(2017, 10, 27, 11, 44),info: "Buy in Fortnite the unique user, Golden fish of enemy",type: sale,cash: 2.25,status: done},
        {id: 31, dateTime: new Date(2016, 9, 27, 11, 44),info: "Buy in Fortnite the unique user, Death Unikorn ",type: sale,cash: 2.25,status: done},
        {id: 32, dateTime: new Date(2015, 8, 27, 11, 44),info: "Buy in WOW BFA the unique item, Axe of Fire",type: sale,cash: 2.25,status: done},
        {id: 33, dateTime: new Date(2014, 7, 27, 11, 44),info: "Buy in WOW Classic the unique game area, Dream of Life",type: sale,cash: 2.25,status: done},
        {id: 34, dateTime: new Date(2013, 6, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 35, dateTime: new Date(2012, 5, 27, 11, 44),info: " Make up deposit $ 1,500.00 to  your account.",type: sale,cash: 2.25,status: done},
        {id: 36, dateTime: new Date(2011, 4, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 37, dateTime: new Date(2010, 3, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 38, dateTime: new Date(2021, 4, 27, 11, 44),info: "Buy in Fortnite the unique item, Golden Pickaxe",type: buy,cash: 2.25,status: done},
        {id: 39, dateTime: new Date(2020, 9, 26, 9, 51),info: "Buy in WOW BFA the unique item, Axe of Ice King",type: deposit,cash: 65.00,status: cancel},
        {id: 40, dateTime: new Date(2019, 11, 27, 14, 46),info: "Buy in Fortnite the unique user, Happy 8 ball",type: buy,cash: 43.00,status: error},
        {id: 41, dateTime: new Date(2018, 11, 14, 4, 52),info: " Make up deposit $ 5,000.00 to  your account.",type: sale,cash: 5000.25,status: done},
        {id: 42, dateTime: new Date(2017, 10, 27, 11, 44),info: "Buy in Fortnite the unique user, Golden fish of enemy",type: sale,cash: 2.25,status: done},
        {id: 43, dateTime: new Date(2016, 9, 27, 11, 44),info: "Buy in Fortnite the unique user, Death Unikorn ",type: sale,cash: 2.25,status: done},
        {id: 44, dateTime: new Date(2015, 8, 27, 11, 44),info: "Buy in WOW BFA the unique item, Axe of Fire",type: sale,cash: 2.25,status: done},
        {id: 45, dateTime: new Date(2014, 7, 27, 11, 44),info: "Buy in WOW Classic the unique game area, Dream of Life",type: sale,cash: 2.25,status: done},
        {id: 46, dateTime: new Date(2013, 6, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 47, dateTime: new Date(2012, 5, 27, 11, 44),info: " Make up deposit $ 1,500.00 to  your account.",type: sale,cash: 2.25,status: done},
        {id: 48, dateTime: new Date(2011, 4, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 49, dateTime: new Date(2010, 3, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 50, dateTime: new Date(2021, 4, 27, 11, 44),info: "Buy in Fortnite the unique item, Golden Pickaxe",type: buy,cash: 2.25,status: done},
        {id: 51, dateTime: new Date(2020, 9, 26, 9, 51),info: "Buy in WOW BFA the unique item, Axe of Ice King",type: deposit,cash: 65.00,status: cancel},
        {id: 52, dateTime: new Date(2019, 11, 27, 14, 46),info: "Buy in Fortnite the unique user, Happy 8 ball",type: buy,cash: 43.00,status: error},
        {id: 53, dateTime: new Date(2018, 11, 14, 4, 52),info: " Make up deposit $ 5,000.00 to  your account.",type: sale,cash: 5000.25,status: done},
        {id: 54, dateTime: new Date(2017, 10, 27, 11, 44),info: "Buy in Fortnite the unique user, Golden fish of enemy",type: sale,cash: 2.25,status: done},
        {id: 55, dateTime: new Date(2016, 9, 27, 11, 44),info: "Buy in Fortnite the unique user, Death Unikorn ",type: sale,cash: 2.25,status: done},
        {id: 56, dateTime: new Date(2015, 8, 27, 11, 44),info: "Buy in WOW BFA the unique item, Axe of Fire",type: sale,cash: 2.25,status: done},
        {id: 57, dateTime: new Date(2014, 7, 27, 11, 44),info: "Buy in WOW Classic the unique game area, Dream of Life",type: sale,cash: 2.25,status: done},
        {id: 58, dateTime: new Date(2013, 6, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 59, dateTime: new Date(2012, 5, 27, 11, 44),info: " Make up deposit $ 1,500.00 to  your account.",type: sale,cash: 2.25,status: done},
        {id: 60, dateTime: new Date(2011, 4, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 61, dateTime: new Date(2010, 3, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 62, dateTime: new Date(2021, 4, 27, 11, 44),info: "Buy in Fortnite the unique item, Golden Pickaxe",type: buy,cash: 2.25,status: done},
        {id: 63, dateTime: new Date(2020, 9, 26, 9, 51),info: "Buy in WOW BFA the unique item, Axe of Ice King",type: deposit,cash: 65.00,status: cancel},
        {id: 64, dateTime: new Date(2019, 11, 27, 14, 46),info: "Buy in Fortnite the unique user, Happy 8 ball",type: buy,cash: 43.00,status: error},
        {id: 65, dateTime: new Date(2018, 11, 14, 4, 52),info: " Make up deposit $ 5,000.00 to  your account.",type: sale,cash: 5000.25,status: done},
        {id: 66, dateTime: new Date(2017, 10, 27, 11, 44),info: "Buy in Fortnite the unique user, Golden fish of enemy",type: sale,cash: 2.25,status: done},
        {id: 67, dateTime: new Date(2016, 9, 27, 11, 44),info: "Buy in Fortnite the unique user, Death Unikorn ",type: sale,cash: 2.25,status: done},
        {id: 68, dateTime: new Date(2015, 8, 27, 11, 44),info: "Buy in WOW BFA the unique item, Axe of Fire",type: sale,cash: 2.25,status: done},
        {id: 69, dateTime: new Date(2014, 7, 27, 11, 44),info: "Buy in WOW Classic the unique game area, Dream of Life",type: sale,cash: 2.25,status: done},
        {id: 70, dateTime: new Date(2013, 6, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 71, dateTime: new Date(2012, 5, 27, 11, 44),info: " Make up deposit $ 1,500.00 to  your account.",type: sale,cash: 2.25,status: done},
        {id: 72, dateTime: new Date(2011, 4, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 73, dateTime: new Date(2010, 3, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 74, dateTime: new Date(2021, 4, 27, 11, 44),info: "Buy in Fortnite the unique item, Golden Pickaxe",type: buy,cash: 2.25,status: done},
        {id: 75, dateTime: new Date(2020, 9, 26, 9, 51),info: "Buy in WOW BFA the unique item, Axe of Ice King",type: deposit,cash: 65.00,status: cancel},
        {id: 76, dateTime: new Date(2019, 11, 27, 14, 46),info: "Buy in Fortnite the unique user, Happy 8 ball",type: buy,cash: 43.00,status: error},
        {id: 77, dateTime: new Date(2018, 11, 14, 4, 52),info: " Make up deposit $ 5,000.00 to  your account.",type: sale,cash: 5000.25,status: done},
        {id: 78, dateTime: new Date(2017, 10, 27, 11, 44),info: "Buy in Fortnite the unique user, Golden fish of enemy",type: sale,cash: 2.25,status: done},
        {id: 79, dateTime: new Date(2016, 9, 27, 11, 44),info: "Buy in Fortnite the unique user, Death Unikorn ",type: sale,cash: 2.25,status: done},
        {id: 80, dateTime: new Date(2015, 8, 27, 11, 44),info: "Buy in WOW BFA the unique item, Axe of Fire",type: sale,cash: 2.25,status: done},
        {id: 81, dateTime: new Date(2014, 7, 27, 11, 44),info: "Buy in WOW Classic the unique game area, Dream of Life",type: sale,cash: 2.25,status: done},
        {id: 82, dateTime: new Date(2013, 6, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 83, dateTime: new Date(2012, 5, 27, 11, 44),info: " Make up deposit $ 1,500.00 to  your account.",type: sale,cash: 2.25,status: done},
        {id: 84, dateTime: new Date(2011, 4, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 85, dateTime: new Date(2010, 3, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 86, dateTime: new Date(2021, 4, 27, 11, 44),info: "Buy in Fortnite the unique item, Golden Pickaxe",type: buy,cash: 2.25,status: done},
        {id: 87, dateTime: new Date(2020, 9, 26, 9, 51),info: "Buy in WOW BFA the unique item, Axe of Ice King",type: deposit,cash: 65.00,status: cancel},
        {id: 88, dateTime: new Date(2019, 11, 27, 14, 46),info: "Buy in Fortnite the unique user, Happy 8 ball",type: buy,cash: 43.00,status: error},
        {id: 89, dateTime: new Date(2018, 11, 14, 4, 52),info: " Make up deposit $ 5,000.00 to  your account.",type: sale,cash: 5000.25,status: done},
        {id: 90, dateTime: new Date(2017, 10, 27, 11, 44),info: "Buy in Fortnite the unique user, Golden fish of enemy",type: sale,cash: 2.25,status: done},
        {id: 91, dateTime: new Date(2016, 9, 27, 11, 44),info: "Buy in Fortnite the unique user, Death Unikorn ",type: sale,cash: 2.25,status: done},
        {id: 92, dateTime: new Date(2015, 8, 27, 11, 44),info: "Buy in WOW BFA the unique item, Axe of Fire",type: sale,cash: 2.25,status: done},
        {id: 93, dateTime: new Date(2014, 7, 27, 11, 44),info: "Buy in WOW Classic the unique game area, Dream of Life",type: sale,cash: 2.25,status: done},
        {id: 94, dateTime: new Date(2013, 6, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 95, dateTime: new Date(2012, 5, 27, 11, 44),info: " Make up deposit $ 1,500.00 to  your account.",type: sale,cash: 2.25,status: done},
        {id: 96, dateTime: new Date(2011, 4, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 97, dateTime: new Date(2010, 3, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 98, dateTime: new Date(2021, 4, 27, 11, 44),info: "Buy in Fortnite the unique item, Golden Pickaxe",type: buy,cash: 2.25,status: done},
        {id: 99, dateTime: new Date(2020, 9, 26, 9, 51),info: "Buy in WOW BFA the unique item, Axe of Ice King",type: deposit,cash: 65.00,status: cancel},
        {id: 100, dateTime: new Date(2019, 11, 27, 14, 46),info: "Buy in Fortnite the unique user, Happy 8 ball",type: buy,cash: 43.00,status: error},
        {id: 101, dateTime: new Date(2018, 11, 14, 4, 52),info: " Make up deposit $ 5,000.00 to  your account.",type: sale,cash: 5000.25,status: done},
        {id: 102, dateTime: new Date(2017, 10, 27, 11, 44),info: "Buy in Fortnite the unique user, Golden fish of enemy",type: sale,cash: 2.25,status: done},
        {id: 103, dateTime: new Date(2016, 9, 27, 11, 44),info: "Buy in Fortnite the unique user, Death Unikorn ",type: sale,cash: 2.25,status: done},
        {id: 104, dateTime: new Date(2015, 8, 27, 11, 44),info: "Buy in WOW BFA the unique item, Axe of Fire",type: sale,cash: 2.25,status: done},
        {id: 105, dateTime: new Date(2014, 7, 27, 11, 44),info: "Buy in WOW Classic the unique game area, Dream of Life",type: sale,cash: 2.25,status: done},
        {id: 106, dateTime: new Date(2013, 6, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 107, dateTime: new Date(2012, 5, 27, 11, 44),info: " Make up deposit $ 1,500.00 to  your account.",type: sale,cash: 2.25,status: done},
        {id: 108, dateTime: new Date(2011, 4, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 109, dateTime: new Date(2010, 3, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 110, dateTime: new Date(2021, 4, 27, 11, 44),info: "Buy in Fortnite the unique item, Golden Pickaxe",type: buy,cash: 2.25,status: done},
        {id: 111, dateTime: new Date(2020, 9, 26, 9, 51),info: "Buy in WOW BFA the unique item, Axe of Ice King",type: deposit,cash: 65.00,status: cancel},
        {id: 112, dateTime: new Date(2019, 11, 27, 14, 46),info: "Buy in Fortnite the unique user, Happy 8 ball",type: buy,cash: 43.00,status: error},
        {id: 113, dateTime: new Date(2018, 11, 14, 4, 52),info: " Make up deposit $ 5,000.00 to  your account.",type: sale,cash: 5000.25,status: done},
        {id: 114, dateTime: new Date(2017, 10, 27, 11, 44),info: "Buy in Fortnite the unique user, Golden fish of enemy",type: sale,cash: 2.25,status: done},
        {id: 115, dateTime: new Date(2016, 9, 27, 11, 44),info: "Buy in Fortnite the unique user, Death Unikorn ",type: sale,cash: 2.25,status: done},
        {id: 116, dateTime: new Date(2015, 8, 27, 11, 44),info: "Buy in WOW BFA the unique item, Axe of Fire",type: sale,cash: 2.25,status: done},
        {id: 117, dateTime: new Date(2014, 7, 27, 11, 44),info: "Buy in WOW Classic the unique game area, Dream of Life",type: sale,cash: 2.25,status: done},
        {id: 118, dateTime: new Date(2013, 6, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 119, dateTime: new Date(2012, 5, 27, 11, 44),info: " Make up deposit $ 1,500.00 to  your account.",type: sale,cash: 2.25,status: done},
        {id: 120, dateTime: new Date(2011, 4, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 121, dateTime: new Date(2010, 3, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 122, dateTime: new Date(2021, 4, 27, 11, 44),info: "Buy in Fortnite the unique item, Golden Pickaxe",type: buy,cash: 2.25,status: done},
        {id: 123, dateTime: new Date(2020, 9, 26, 9, 51),info: "Buy in WOW BFA the unique item, Axe of Ice King",type: deposit,cash: 65.00,status: cancel},
        {id: 124, dateTime: new Date(2019, 11, 27, 14, 46),info: "Buy in Fortnite the unique user, Happy 8 ball",type: buy,cash: 43.00,status: error},
        {id: 125, dateTime: new Date(2018, 11, 14, 4, 52),info: " Make up deposit $ 5,000.00 to  your account.",type: sale,cash: 5000.25,status: done},
        {id: 126, dateTime: new Date(2017, 10, 27, 11, 44),info: "Buy in Fortnite the unique user, Golden fish of enemy",type: sale,cash: 2.25,status: done},
        {id: 127, dateTime: new Date(2016, 9, 27, 11, 44),info: "Buy in Fortnite the unique user, Death Unikorn ",type: sale,cash: 2.25,status: done},
        {id: 128, dateTime: new Date(2015, 8, 27, 11, 44),info: "Buy in WOW BFA the unique item, Axe of Fire",type: sale,cash: 2.25,status: done},
        {id: 129, dateTime: new Date(2014, 7, 27, 11, 44),info: "Buy in WOW Classic the unique game area, Dream of Life",type: sale,cash: 2.25,status: done},
        {id: 130, dateTime: new Date(2013, 6, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 131, dateTime: new Date(2012, 5, 27, 11, 44),info: " Make up deposit $ 1,500.00 to  your account.",type: sale,cash: 2.25,status: done},
        {id: 132, dateTime: new Date(2011, 4, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 133, dateTime: new Date(2010, 3, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 134, dateTime: new Date(2021, 4, 27, 11, 44),info: "Buy in Fortnite the unique item, Golden Pickaxe",type: buy,cash: 2.25,status: done},
        {id: 135, dateTime: new Date(2020, 9, 26, 9, 51),info: "Buy in WOW BFA the unique item, Axe of Ice King",type: deposit,cash: 65.00,status: cancel},
        {id: 136, dateTime: new Date(2019, 11, 27, 14, 46),info: "Buy in Fortnite the unique user, Happy 8 ball",type: buy,cash: 43.00,status: error},
        {id: 137, dateTime: new Date(2018, 11, 14, 4, 52),info: " Make up deposit $ 5,000.00 to  your account.",type: sale,cash: 5000.25,status: done},
        {id: 138, dateTime: new Date(2017, 10, 27, 11, 44),info: "Buy in Fortnite the unique user, Golden fish of enemy",type: sale,cash: 2.25,status: done},
        {id: 139, dateTime: new Date(2016, 9, 27, 11, 44),info: "Buy in Fortnite the unique user, Death Unikorn ",type: sale,cash: 2.25,status: done},
        {id: 140, dateTime: new Date(2015, 8, 27, 11, 44),info: "Buy in WOW BFA the unique item, Axe of Fire",type: sale,cash: 2.25,status: done},
        {id: 141, dateTime: new Date(2014, 7, 27, 11, 44),info: "Buy in WOW Classic the unique game area, Dream of Life",type: sale,cash: 2.25,status: done},
        {id: 142, dateTime: new Date(2013, 6, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 143, dateTime: new Date(2012, 5, 27, 11, 44),info: " Make up deposit $ 1,500.00 to  your account.",type: sale,cash: 2.25,status: done},
        {id: 144, dateTime: new Date(2011, 4, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done},
        {id: 145, dateTime: new Date(2010, 3, 27, 11, 44),info: "Buy in WOW Classic the unique item, Axe of Ice King",type: sale,cash: 2.25,status: done}
    ],
    pagePortion: 1,
    pagePortionCount: 5,
    pageSelected: 1,
    pageSize: 12
};

const FirstPageReducer = (state = initialState, action) => {
    let stateCopy = {...state};

    switch(action.type) {
        case SET_NEW_PORTION:
            if(action.e === "plus"){
                stateCopy.pagePortion = stateCopy.pagePortion+1;
            } else {
                stateCopy.pagePortion = stateCopy.pagePortion-1;
            }
            return stateCopy;
        case SET_NEW_PAGE_SELECTED:
            stateCopy.pageSelected = action.num;
            return stateCopy;
        default:
            return stateCopy;
    }
};

export default FirstPageReducer;