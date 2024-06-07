
import { Container , Title } from "./styles"

import {getImages} from "../../utils/getImages"
function Credits({credits}){
    return(
        <>
        <Title>Créditos</Title>
        {credits &&  (
                <Container>
                    {credits.slice(0,7).map(artist => (
                        <div key={artist.id}   >
                            <img src={getImages(artist.profile_path)}   alt="artist-img"/>
                            <p>{artist.original_name}</p>
                        </div>
                    ))}

                <div></div>
        
        
                </Container>
                
            
        )}
    
        </>
    )
}


export default Credits