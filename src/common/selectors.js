export const getFirstPageItems = (state) => {
    let selectedPage = state.firstPage.pageSelected;
    let pageSize = state.firstPage.pageSize;
    let items = [];
    for(let i=0; i<=state.firstPage.items.length; i++){
        if(i>=(selectedPage-1)*pageSize && i<=(pageSize*selectedPage)-1 && i<state.firstPage.items.length){
            items.push(state.firstPage.items[i])
        }
    }
    return items
};
export const getPageSelected = (state) => {
   return state.firstPage.pageSelected
}
export const getPagesCount = (state) => {
    let count = Math.ceil(state.firstPage.items.length / state.firstPage.pageSize);
    return count;
}
