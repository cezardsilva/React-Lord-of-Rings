import { useEffect, useRef, useState } from 'react'
import ConvIcon from '../../assets/conv-icon.png'
import { Container, TopHeader } from './style'

function Header({ movies, setFilteredMovies }) {
    const [aveValues, setAveValues] = useState({
        runtime: 0,
        budget: 0,
    })

    const [budgets, setBudgets] = useState([]); // Estado para armazenar a lista de budgets
    
    const input = useRef()



    function aveMovies(movies) {
        const runtime =
            movies.reduce((acc, cur) => cur.runtimeInMinutes + acc, 0,) / movies.length

        const budget =
            movies.reduce((acc, cur) => cur.budgetInMillions + acc, 0,) / movies.length

        setAveValues({
            runtime,
            budget,
        })
    }

    useEffect(() => {
        if (movies && movies.length > 0) {
            aveMovies(movies);
            const uniqueBudgets = [...new Set(movies.map(movie => movie.budgetInMillions))];
            setBudgets(uniqueBudgets);
        }
    }, [movies])


    function inputChange() {
        const newMovies = movies.filter(movie => movie.name.toLowerCase().includes(input.current.value.toLowerCase()))

        aveMovies(newMovies)
        setFilteredMovies(newMovies)
    }

    // Função para filtrar por budget
    function handleBudgetChange(event) {
        const selectedBudget = parseFloat(event.target.value);
        if (selectedBudget) {
            const newMovies = movies.filter(movie => 
                movie.budgetInMillions === selectedBudget
            );
            setFilteredMovies(newMovies);
        } else {
            setFilteredMovies(movies); // Se selecionar "Todos", mostra todos os filmes
        }
    }    

    return (
        <>
            <TopHeader>
                <img src={ConvIcon} alt='conv icon' />
                <p>Senior Front End Test</p>
            </TopHeader>
            <Container>
                <h1>Lord of the Rings Movies</h1>
                <div className='ave-values'>
                    <div>
                        <p>Ave. movie runtime: {aveValues.runtime} min</p>
                        <p>Ave. movie budget: ${aveValues.budget}</p>
                    </div>
                    <div>
                        <input placeholder='Filter movies by name' ref={input} onChange={inputChange} />
                        <select onChange={handleBudgetChange}>
                            <option value="">Sort by budget</option>
                            {budgets.map(budget => (
                                <option key={budget} value={budget}>
                                    ${budget}M
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Header