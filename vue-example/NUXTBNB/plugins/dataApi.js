export default  function(context,inject){
    const appId='9UB1TEU8HN'
    const apiKey='69cc02892b1c3344dcf619e3e63e4ee8'

    inject('dataApi',{
        getHome
    })
    async function getHome(homeId){
        console.log(homeId)
        const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`,{
            headers:{
                'X-Algolia-API-Key':apiKey,
                'X-Algolia-Application-Id':appId
            }
        })
        const json= (await response).json()
        return json
    }
}