const List = () => {


    const fetchData = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character/")
        const data = await response.json()
        setData(data)
    }
}
console.log('data', data)