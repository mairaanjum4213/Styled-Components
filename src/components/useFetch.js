import {useState, useEffect} from 'react';
   
const useFetch = (url) =>{
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setTimeout(() =>{
            fetch(url)
            .then(res =>{
                if(!res.ok)
                { throw Error("could not fetch data");
                }
                else{
                    return res.json();
                }

            })

            .then (data =>{
                setData(data);
                setIsPending(false);
                setError(null);

            })

            .catch(err=>{
                setIsPending(false);
                setError(`Something went wrong: ${err}`);
            })
            

            
        }
        ,1000)

    },[url]);
    return{data, isPending, error}
}

export default useFetch;


//import useFetch from "./useFetch";
//const {data,isPending,error} = useFetch('http://localhost:8000/blogs');




