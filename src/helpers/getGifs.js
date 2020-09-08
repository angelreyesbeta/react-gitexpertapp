export const getGifs=async(category)=>{
        
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=aLxa6DuC0VoAA24qr6vxiUDNIplQnsIF`;
    const resp=await fetch(url);
    const {data}=await resp.json();

    const gifs=data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    //console.log(gifs);
    return gifs;
}