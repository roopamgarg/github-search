export async function githubSearch(searchQuery: string){
    try{
        if(searchQuery){
            const result = await fetch(`https://api.github.com/search/users?q=${searchQuery}&sort=followers&order=dec`);
            return result.json();
        } else {
            return null;
        }
    } catch (err) {
        return null;
    }

}