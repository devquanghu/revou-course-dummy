import { Button, Card } from '../../components';
import { useEffect, useState, useCallback, useRef } from 'react';
import Pokemon from './Pokemon';

interface PokemonData {
    name: string;
}

interface ResponseData {
    results: PokemonData[];
}

const HomeContainer = () => {

    const [pokemons, setPokemons] = useState<PokemonData[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const fetchingPokemon = useCallback(
        async () => {
            setPokemons([])
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const data: ResponseData = await response.json();
            const result = data.results
            setPokemons(result)
        },
        []
    );



    useEffect(
        () => {
            fetchingPokemon()
        },
        [fetchingPokemon]
    );



    return (
        <Card border={false} className={'flex flex-col gap-2.5'}>
            <Card border>
                <Pokemon pokemons={pokemons}/>
                <Button label={'Fetch Ulang'} onClick={() => fetchingPokemon()}/>
                <Button label={'Update Value'} onClick={() => {
                    inputRef.current!.value  = 'asd'
                }}/>
                <input type="text" value={'ini value'} ref={inputRef}/>
            </Card>
            
        </Card>
    )
}

export default HomeContainer