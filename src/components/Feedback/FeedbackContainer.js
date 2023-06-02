import React from "react";
import { ColorCode } from "../../utils/palette";
import styled from "styled-components";

const Container = styled.div`
    width : 90%;
    background-color: white;
    font-size :20px;
`;

const FeedbackContainer = (props) =>{
    return (
        <Container>
            {/* 임시로 넣어두었습니담 */}
            <p>Feedback</p>
            {/* 더미데이터 만들어서 넣어보는 것 = 다음주  */}
            <p>
            I can tell you about a popular and widely loved dish that many people enjoy, pizza. Pizza is a versatile and delicious food that originated in Italy but has become popular worldwide. It typically consists of a round, flat dough topped with tomato sauce, cheese, and various toppings such as vegetables, meats, and herbs. It is often baked in an oven until the crust is crispy and the cheese is melted and bubbly. Pizza offers a combination of flavors, textures, and toppings, making it a satisfying and enjoyable meal for many.
            {children}
            </p>

        </Container>

    );
}
