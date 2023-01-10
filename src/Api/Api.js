import  React,{ useEffect,useState} from 'react';
// import { useParams } from 'react-router-dom';
// import Loading from "../Loader/Loader";
// import coverImg from "../../images/cover_not_found.jpg";
// import "./BookDetails.css";
// import {FaArrowLeft} from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function(){

    const [data,setData] = useState([]);

// const URL = "https://openlibrary.org/works/";
// const {id} = useParams();
useEffect(() => {
   
         axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=3qEe95XXQXI6pgGxI8C6qGy0uRmJvDxD`)
        .then(data=>setData(data.data.results.books))
        .catch(
            console.log("invalidApi")
        )   
},[])

// console.log(data.map((alt)=>alt.book_image))


return(
    <div>
        {
            data.map((alt)=>{
                return(
                    <div>
                        <div>
                            <p>{alt.title}</p>
                        </div>
                        <div>
                        <img src={alt.book_image} />
                        </div>
                        <div>
                            <p>{alt.author}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
)





}



// export default BookDetails;