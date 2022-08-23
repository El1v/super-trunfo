import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
    hasTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;

      // Valida se os inputs estão vazios
      const validateEmptyInput = (cardName && cardDescription && cardImage && cardRare)
        ? 'true' : 'false';
      // Valida se o atributo é <= 90 e >= 0
      const maxCartAttr = 90;
      const validateCorrectAttr = (
        cardAttr1 >= 0 && cardAttr1 <= maxCartAttr
        && cardAttr2 >= 0 && cardAttr2 <= maxCartAttr
        && cardAttr3 >= 0 && cardAttr3 <= maxCartAttr
      ) ? 'true' : 'false';
      // Valida se a soma dos atributos é <= 210
      const maxAllCardAttr = 210;
      const validateMaxAttr = (
        (parseInt(cardAttr1, 10)
        + parseInt(cardAttr2, 10)
        + parseInt(cardAttr3, 10)) <= maxAllCardAttr
      ) ? 'true' : 'false';

      // Verifica se todas as validações são true, se for ele altera o estado do botão
      if
      (validateMaxAttr === 'true'
      && validateCorrectAttr === 'true'
      && validateEmptyInput === 'true') {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

  onSaveButtonClick = (newObj) => {
    if (newObj.cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }

    this.setState((prevState) => ({
      data: [...prevState.data, newObj],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  };

  removeCard = (index) => {
    // console.log(target.parentNode);
    const { data } = this.state;
    const trunfoData = [...data];
    trunfoData.splice(index, 1);
    this.setState({ data: trunfoData, hasTrunfo: false });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      data,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <hr />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <hr />

        {
          data.map((e, index) => (
            <div key={ index }>
              <Card
                key={ index }
                cardName={ e.cardName }
                cardDescription={ e.cardDescription }
                cardAttr1={ e.cardAttr1 }
                cardAttr2={ e.cardAttr2 }
                cardAttr3={ e.cardAttr3 }
                cardImage={ e.cardImage }
                cardRare={ e.cardRare }
                cardTrunfo={ e.cardTrunfo }
              />
              <button
                data-testid="delete-button"
                type="button"
                onClick={ () => this.removeCard(index) }
              >
                Excluir
              </button>
            </div>
          ))
        }
        {/* {
          data.map((e, index) => (<Card
            key={ index }
            cardName={ e.cardName }
            cardDescription={ e.cardDescription }
            cardAttr1={ e.cardAttr1 }
            cardAttr2={ e.cardAttr2 }
            cardAttr3={ e.cardAttr3 }
            cardImage={ e.cardImage }
            cardRare={ e.cardRare }
            cardTrunfo={ e.cardTrunfo }
          />))
        } */}
      </div>
    );
  }
}

export default App;
