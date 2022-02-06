import React from "react";

import { StyledCard } from "./Card.style";

export const Card = ({item: {id, title, body, image}}) => {
    return(
        <StyledCard>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

            <div>
                <img src= {`./images/${image}`} alt = "image 1" />
            </div>
        </StyledCard>
    )
}
