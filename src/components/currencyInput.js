import {Component} from 'react';

const currencyNames = {
    rub: 'Рублей',
    usd: 'Долларов'
}

class CurrencyInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onCurrencyChange(e.target.value);
    }

    render() {
        const amount = this.props.amount;
        const currency = this.props.currency;
        return(
            <fieldset>
                <legend>Количество {currencyNames[currency]}</legend>
                <input  value={amount}
                        onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default CurrencyInput;