import "./dog.css"
import DogCard from "./DogCard";
const DogsPage = (props) => {
    const {dogs} = props;
    return (
        <>  
            <section className="dogs-container">
            {dogs && dogs.length > 0 &&
                dogs.map((dog)=>{
                    return(
                        <div className="" key={dog.id}>
                           <DogCard id={dog.id}  name={dog.name} breed={dog.breed}  description={dog.description}
                                imageUrl={dog.imageUrl} price={dog.price}
                           />
                        </div>
                    )
                })
            }
            </section>
            
        </>
      );
}
 
export default DogsPage;