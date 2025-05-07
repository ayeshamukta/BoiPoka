const getReadList=()=>
{
    const readListStr= localStorage.getItem('read-List');
    if(readListStr)
    {
        // console.log('exist');
        const readList = JSON.parse(readListStr);
        return readList;
    }
    else
    {
        return [];
    }
}
const addToReadList =(id)=>
{
    const readList = getReadList();
    if(readList.includes(id))
    {
        console.log('already exist');
        
    }
    else
    {
        readList.push(id);
        const readListStr = JSON.stringify(readList);
        localStorage.setItem('read-List',readListStr)
    }
}



// WishList

const getStoredWishList =()=>
{
    const wishListStr = localStorage.getItem('wish-list');
    if(wishListStr)
    {
        const wishListJson = JSON.parse(wishListStr);
        return wishListJson;
    }
    else
    {
        return [];
    }
}

const addToWishList=(id)=>
{
    const storedWishlist = getStoredWishList();
    if(storedWishlist.includes(id))
    {
        console.log('this is already in wishlist');
        
    }
    else
    {
        storedWishlist.push(id);
        const storedListStr = JSON.stringify(storedWishlist);
        localStorage.setItem('wish-list',storedListStr)
    }
}


export {addToReadList,addToWishList,getStoredWishList,getReadList}

