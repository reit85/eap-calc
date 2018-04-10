import React from 'react';
import moment from 'moment';
import { username } from '../../firebase/user';

export default class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(username);

    this.state = {
      nameDe: props.article ? props.article.nameDe : '',
      nameEn: props.article ? props.article.nameEn : '',
      descriptionDe: props.article ? props.article.descriptionDe : '',
      descriptionEn: props.article ? props.article.descriptionEn : '',
      manufacturer: props.article ? props.article.manufacturer : '',
      price: props.article ? (props.article.price / 100).toString().replace('.', ',') : '',
      priceType: props.article ? props.article.priceType : '',
      createdAt: props.article ? props.article.createdAt : moment(),
      createdBy: props.article ? props.article.createdBy : username,
      editedAt: props.article ? props.article.editedAt : moment(),
      editedBy: props.article ? props.article.editedBy : username,
      action: props.article ? 'edit' : 'add',
      error: '',
    };
  }

  onNameDeChange = (e) => {
    const nameDe = e.target.value;
    this.setState(() => ({ nameDe }));
  }

  onNameEnChange = (e) => {
    const nameEn = e.target.value;
    this.setState(() => ({ nameEn }));
  }

  onDescriptionDeChange = (e) => {
    const descriptionDe = e.target.value;
    this.setState(() => ({ descriptionDe }));
  }

  onDescriptionEnChange = (e) => {
    const descriptionEn = e.target.value;
    this.setState(() => ({ descriptionEn }));
  }

  onManufacturerChange = (e) => {
    const manufacturer = e.target.value;
    this.setState(() => ({ manufacturer }));
  }

  onPriceChange = (e) => {
    const price = e.target.value;
    if (!price || price.match(/^\d{1,}(\,\d{0,2})?$/)) {
      this.setState(() => ({ price }));
      console.log(price);
    }
  }

  onPriceTypeChange = (e) => {
    const priceType = e.target.value;
    this.setState(() => ({ priceType }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.nameDe ||
       !this.state.nameEn ||
       !this.state.descriptionDe ||
       !this.state.descriptionEn ||
       !this.state.manufacturer ||
       !this.state.price ||
       !this.state.priceType) {
      this.setState(() => ({ error: 'Bitte alle Felder ausfüllen.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        nameDe: this.state.nameDe,
        nameEn: this.state.nameEn,
        descriptionDe: this.state.descriptionDe,
        descriptionEn: this.state.descriptionEn,
        manufacturer: this.state.manufacturer,
        price: parseFloat(this.state.price.replace(',', '.')) * 100,
        priceType: this.state.priceType,
        createdAt: this.state.createdAt.valueOf(),
        createdBy: this.state.createdBy,
        editedAt: moment().valueOf(),
        editedBy: username,
      });
    }
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.action === 'edit' &&
            <p className="form__message">{
              `Artikel erstellt am ${moment(this.state.createdAt).format('DD.MM.YYYY')} von ${this.state.createdBy}.`
            }
            </p>
          }
          {this.state.action === 'edit' &&
            <p className="form__message">{
              `Artikel zuletzt bearbeitet am ${moment(this.state.editedAt).format('DD.MM.YYYY')} von ${this.state.editedBy}.`
            }
            </p>
          }
          <input
            type="text"
            className="text-input"
            placeholder="Deutscher Artikelname ..."
            value={this.state.nameDe}
            onChange={this.onNameDeChange}
            autoFocus
          />
          <input
            type="text"
            className="text-input"
            placeholder="Englischer Artikelname ..."
            value={this.state.nameEn}
            onChange={this.onNameEnChange}
          />
          <textarea
            placeholder="Deutsche beschreibung (optional) ..."
            className="textarea"
            value={this.state.descriptionDe}
            onChange={this.onDescriptionDeChange}
          />
          <textarea
            placeholder="Englische beschreibung (optional) ..."
            className="textarea"
            value={this.state.descriptionEn}
            onChange={this.onDescriptionEnChange}
          />
          <select
            className="dropdown"
            // TODO: Herstellernamen mit ID abfragen und Liste füllem mit MAP funktion
            value={this.state.manufacturer}
            onChange={this.onManufacturerChange}
          >
            <option value="Siemens">Siemens</option>
            <option value="Festo">Festo</option>
          </select>
          <input
            type="text"
            className="text-input"
            placeholder="Preis in € ..."
            value={this.state.price}
            onChange={this.onPriceChange}
          />
          <select
            className="dropdown"
            value={this.state.priceType}
            onChange={this.onPriceTypeChange}
          >
            <option value="Verhandelt">Verhandelt</option>
            <option value="Unverhandelt">Unverhandelt</option>
            <option value="Kundenspezifisch">Kundenspezifisch</option>
          </select>
          <div>
            <button className="button">Artikel speichern</button>
          </div>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
        </form>
      </div>
    );
  }
}
