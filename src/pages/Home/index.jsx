import { useState, useEffect } from "react";
import api from '../../services/api'
import Header from "../../components/Header"
import { Container, ContainerItens } from "./style"
import Card from '../../components/Card'


function Home() {
    const [movies, setMovies] = useState()
    const [filteredMovies, setFilteredMovies] = useState()

    useEffect(() => {
        async function loadData() {
            const {
                data: { docs },
            } = await api.get('movie')

            setMovies(docs)
            setFilteredMovies(docs)
            console.log(docs)
        }

        loadData()

    }, [])

    return (
        <Container>
            <Header movies={movies} setFilteredMovies={setFilteredMovies} />

            <ContainerItens>
                {filteredMovies &&
                    filteredMovies.map(movie => (
                        <Card movieData={movie} key={movie._id} />
                    ))}
            </ContainerItens>
        </Container>
    )
}

export default Home