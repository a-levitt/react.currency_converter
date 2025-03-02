import {useEffect, useState} from "react";

function App() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('EUR');
    const [toCurrency, setToCurrency] = useState('USD');

    useEffect(function () {
        async function convert() {
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
        const data = await res.json();
        console.log(data);
        }

        convert();
    }, [])

    return (
        <div>
            <input
                type="text"
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}
            />
            <select
                value={fromCurrency}
                onChange={event => setFromCurrency(event.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="ILS">ILS</option>
            </select>
            <select
                value={toCurrency}
                onChange={event => setToCurrency(event.target.value)}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="ILS">ILS</option>
            </select>
            <p>OUTPUT</p>
        </div>
    );
}

export default App
