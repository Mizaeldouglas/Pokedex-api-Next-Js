import { useState, useEffect } from "react"
import api from "./api/api";


export default function Home() {
	const [pokemons,setPokemons] = useState(null)
	const [loading, setLoading] = useState(true);
	const [search, setSearch] = useState('');
	// useEffect(() => {
	// 	pokeList()
	// }, []);

	// const pokeList = async () => {
	// 	setLoading(true)
	//   const req = await fetch(`https://pokeapi.co/api/v2/pokemon`)
	//   const json =  await req.json()

	//   if (  json ){
	//   setPoke( json )
	// }
	// 	setLoading(false)
	
	// }
	const s = search && search.toLowerCase()
	
	const filtered = !pokemons  || !s 
		? pokemons
		: pokemons.filter(({name}) =>
		name.toLowerCase().includes(s)
	)

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon/1/')
		.then((r) => r.json())
		.then((json) => {
			setPokemons(json.results)
		})
	}, []);
	if(!pokemons){
		return null
	}

	
	return (
		<div>
		<ul>
			{ pokemons.map(({ name }) => (
				<li key={name}>
					{name}
					
				</li>
			)) }
			

		</ul>
    </div>
  )
}

		// useEffect(() => {
		// 	api
		// 		.get("pokemon")
		// 		.then((response) => setPoke(response.data))
		// 		.catch((err) => {
		// 			console.log('ops! ocorreu um erro'+ err)
		// 		}) 
		// }, []);