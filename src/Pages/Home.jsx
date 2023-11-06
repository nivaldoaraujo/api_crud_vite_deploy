import './Home.css'
import { useState } from 'react'


function Home(){
    //Códigos da api
    const [randonDog, setRandonDog] = useState()

    function Add()
    {
        const url = "https://dog.ceo/api/breeds/image/random"
            fetch(url)
            .then(function(response){
                return response.json()
                console.log(response)
            })
            .then((data) =>{
                setRandonDog(data.message)
                console.log(data.message)
            })
            .catch(function(error){
                console.log("Erro :" +error)
            })

    }

    
    return(
        <>
        <div className='teste'>
            <img src={randonDog} alt="" />
        </div>
        <button className='button' onClick={Add}>Clicar</button>
        </>
    )
}

export default Home