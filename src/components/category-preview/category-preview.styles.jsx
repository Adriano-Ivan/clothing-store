import styled from "styled-components";


export const  CategoryPreviewAllContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction:column;
    margin-bottom: 30px;

`; 

export const CategoryPreviewAllContainerTitle = styled.h2`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
`;

export const CategoryPreviewAllContainerPreview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
`;

