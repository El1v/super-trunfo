import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Textarea from './Textarea';
import '../index.css';
import '../select.css';
import '../checkbox.css';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    let hasTrunfoLet = '';

    if (hasTrunfo === false) {
      hasTrunfoLet = (
        <label className="control control-checkbox" htmlFor="trunfo-input">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            id="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          <div className="control_indicator" />
        </label>
      );
    } else {
      hasTrunfoLet = <span>Você já tem um Super Trunfo em seu baralho</span>;
    }

    return (
      <form className="form">
        <Input
          label="Nome"
          dataTestid="name-input"
          type="text"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
        />
        <Textarea
          label="Descrição"
          dataTestid="description-input"
          type="textarea"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <Input
          label="Atributo 1"
          dataTestid="attr1-input"
          type="number"
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          label="Atributo 2"
          dataTestid="attr2-input"
          type="number"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          label="Atributo 3"
          dataTestid="attr3-input"
          type="number"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          label="Imagem"
          dataTestid="image-input"
          type="text"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <label htmlFor="rare-input">
          Raridade da Carta
          <div className="select">
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              name="cardRare"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
            <div className="select_arrow" />
          </div>
        </label>

        {hasTrunfoLet}
        {/* <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            id="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label> */}

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ () => onSaveButtonClick({ cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          }) }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
