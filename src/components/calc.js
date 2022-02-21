import {Component} from 'react';
import CurrencyInput from './currencyInput';

// Из рублей в доллары
function toUSD(rub) {
    return rub/75.3;
}

// Из долларов в рубли
function toRUB(usd) {
    return usd*75.3;
}

// Попытка конвертировать
function tryConvert(currency, convert) {
    const input = parseFloat(currency);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output*1000)/1000
    return rounded.toString();
}

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.handleRubChange = this.handleRubChange.bind(this);
        this.handleUSDChange = this.handleUSDChange.bind(this);
        this.state = {amount:'', currency:'rub'};
    }

    handleRubChange(amount) {
        this.setState({amount, currency:'rub'});
    }

    handleUSDChange(amount) {
        this.setState({amount, currency:'usd'});
    }

    render() {
        const currency = this.state.currency;
        const amount = this.state.amount;
        const rub = currency === 'rub' ? tryConvert(amount, toRUB) : amount;
        const usd = currency === 'usd' ? tryConvert(amount, toUSD) : amount;
        return(
            <div>
                <CurrencyInput 
                    currency='rub'
                    amount={rub}
                    onCurrencyChange={this.handleUSDChange} />
                <CurrencyInput
                    currency='usd'
                    amount={usd}
                    onCurrencyChange={this.handleRubChange} />
            </div>
        );
    }
}

export default Calculator;