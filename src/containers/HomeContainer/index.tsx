import { Button, Card } from '../../components';
import { useRef } from 'react';
import Pokemon from './Pokemon';
import { useFetchingPokemon } from '../../hooks';

const HomeContainer = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const { data, fetchingPokemon } = useFetchingPokemon({
        enabled: false
    });

    return (
        <Card border={false} className={'flex flex-col gap-2.5'}>
            <Card border>
                <Pokemon pokemons={data}/>
                <Button label={'Fetch Ulang'} onClick={ () => fetchingPokemon()}/>
                <Button label={'Update Value'} onClick={() => {
                    inputRef.current!.value  = 'asd'
                }}/>
                <input type="text" value={'ini value'} ref={inputRef}/>
            </Card>
            
        </Card>
    )
}

export default HomeContainer