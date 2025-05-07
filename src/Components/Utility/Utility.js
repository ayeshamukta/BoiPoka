import { toast } from 'react-toastify';


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
        toast.info('Already Exist')
        
    }
    else
    {
        readList.push(id);
        const readListStr = JSON.stringify(readList);
        localStorage.setItem('read-List',readListStr)
    }
}

const handleActive=()=>
{

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
        // console.log('this is already in wishlist');
        toast.info('Already in wishlist')
        
    }
    else
    {
        storedWishlist.push(id);
        const storedListStr = JSON.stringify(storedWishlist);
        localStorage.setItem('wish-list',storedListStr)
    }
}


export {addToReadList,addToWishList,getStoredWishList,getReadList}

