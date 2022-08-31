
export const setPagesArray = (totalPages) => {
    const bList = []
    for(let i = 1; i <= totalPages; i++){
        bList.push(i);
    }
    return bList;
}

export const SetPageCount = (total, limit) => {
    return Math.ceil(total/limit)
}