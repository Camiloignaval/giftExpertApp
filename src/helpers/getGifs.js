export const gif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9YEXObWZvbzuHlAIyBLP7YKY10FVAJQv&q=${encodeURI(category)}&limit=6`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}
