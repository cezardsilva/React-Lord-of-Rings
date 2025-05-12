import styled from "styled-components";

export const TopHeader = styled.div`
background: #4c16c9;
height: 56px;
width: 100vw;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 10px;

p {
    color: #fff;
}
`
export const Container = styled.div`
    width: 100%;
    max-width: 1008px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 40px 0;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 32px;

    .ave-values {
        display: flex;
        justify-content: space-between;

        input {
            height: 40px;
            width: 200px;
            border-radius: 5px;
            border: 2px solid #f0f0f0;
            border-color: #C5D2E0;
            padding-left: 5px;
            margin-right: 10px;
        }


        select {
            width: 200px;
            height: 40px;
            padding: 11px 7px 11px 11px;
            background-color: #F5F7FA;
            border: 1px solid #C5D2E0; /* Corrigido - faltava 'solid' */
            border-radius: 2px;
            font-size: 14px;
            font-weight: 400;
            appearance: none; /* Remove estilos padrão do navegador */
            -webkit-appearance: none;
            -moz-appearance: none;
            
            /* Estilo para a seta personalizada */
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 10px center;
            background-size: 15px;
        }

        /* Estilo para quando o select está em foco */
        select:focus {
            outline: none;
            border-color: #4c16c9;
        }
    }

`