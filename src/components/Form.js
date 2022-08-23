import React from 'react';
import Input from './Input';
import Textarea from './Textarea';

class Form extends React.Component {
  render() {
    return (
      <form>
        <Input label="Nome" dataTestid="name-input" type="text" name="name" />
        <Textarea
          label="Descrição"
          dataTestid="description-input"
          type="textarea"
          name="description"
        />
        <Input label="Atributo 1" dataTestid="attr1-input" type="number" name="attr1" />
        <Input label="Atributo 2" dataTestid="attr2-input" type="number" name="attr2" />
        <Input label="Atributo 3" dataTestid="attr3-input" type="number" name="attr3" />
        <Input label="Imagem" dataTestid="image-input" type="text" name="image" />

        <label htmlFor="select">
          Raridade da Carta
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <Input
          label="SuperTrunfo"
          dataTestid="trunfo-input"
          type="checkbox"
          name="trunfo"
        />

        <button type="button" data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;
