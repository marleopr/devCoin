import { useState } from "react";
import styled from "styled-components";

const ModalCotacoes = ({ closeModal, dataCotacoes }) => {
    const [inputValue, setInputValue] = useState(""); // Valor em moeda de origem BRL
    const [toCurrency, setToCurrency] = useState("USD"); // Moeda de destino
    const [convertedValue, setConvertedValue] = useState(""); // Valor convertido

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setConvertedValue(convertCurrency(event.target.value, toCurrency));
    };

    const handleToCurrencyChange = (event) => {
        setToCurrency(event.target.value);
        setConvertedValue(convertCurrency(inputValue, event.target.value));
    };

    const convertCurrency = (amount, to) => {
        const fromCurrency = "BRL"; // Moeda de origem sempre BRL
        const fromRate = parseFloat(dataCotacoes.find(item => item.toCurrency === fromCurrency && item.fromCurrency === to)?.bidPrice) || 1;
        const toRate = parseFloat(dataCotacoes.find(item => item.toCurrency === to && item.fromCurrency === fromCurrency)?.bidPrice) || 1;
        return ((amount / fromRate) * toRate).toFixed(2);
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <ModalCloseButton onClick={closeModal}>x</ModalCloseButton>
                <ContainerModal>
                    <ModalTitle>
                        <p className="title">Conversor de cotações</p>
                        <div>
                            <InputStyle>
                                <span>R$ </span>
                                <input
                                    className="input"
                                    style={{ width: '125px', padding: '10px' }}
                                    type="number"
                                    placeholder={`Valor em Real (BRL)`}
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                                <select
                                    className="buttonAll"
                                    style={{ width: '120px' }}
                                    value={toCurrency}
                                    onChange={handleToCurrencyChange}>
                                    <option value="USD">Dólar (USD)</option>
                                    <option value="EUR">Euro (EUR)</option>
                                    <option value="GBP">Libra (GBP)</option>
                                </select>
                            </InputStyle>
                            <div>
                                {convertedValue && (
                                    <p>
                                        Valor convertido: {convertedValue} {toCurrency}
                                    </p>
                                )}
                            </div>
                        </div>
                    </ModalTitle>
                </ContainerModal>
            </ModalContent>
        </ModalOverlay >
    )
}
export default ModalCotacoes

const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ContainerModal = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
const ModalContent = styled.div`
  position: relative;
  width: 20rem;
  height: 15rem;
  border-radius: 10px;
  border-bottom: 10px solid var(--color-blue);
  background-color: #212121;
`;
const ModalCloseButton = styled.button`
  position: absolute;
  outline: none;
  font-size: 24px;
  top: 1px;
  right: 10px;
  border: none;
  color: var(--color-blue);
  background-color: transparent;
  cursor: pointer;
  &:hover {
      color: var(--color-blue-nav);
    }
  &:active {
      color: var(--color-purple);
    }
`;
const ModalTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  .title {
    margin-bottom: 20px;
    color: var(--color-blue);
  }
  p{
    color: whitesmoke;
  }
`;

const InputStyle = styled.div`
    display: inline;
    span {
        color: white;
    }
`