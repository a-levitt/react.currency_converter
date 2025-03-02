import {useEffect, useState} from "react";

function App() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('EUR');
    const [toCurrency, setToCurrency] = useState('USD');
    const [converted, setConverted] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function () {
        async function convert() {
            setIsLoading(true);
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
            const data = await res.json();
            setConverted(data.rates[toCurrency]);
            setIsLoading(false);
        }

        convert();
    }, [amount, fromCurrency, toCurrency])

    return (
        <div>
            <input
                type="text"
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}
                disabled={isLoading}
            />
            <select
                value={fromCurrency}
                onChange={event => setFromCurrency(event.target.value)}
                disabled={isLoading}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="ILS">ILS</option>
            </select>
            <select
                value={toCurrency}
                onChange={event => setToCurrency(event.target.value)}
                disabled={isLoading}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="ILS">ILS</option>
            </select>
            <p>{converted} {toCurrency}</p>
        </div>
    );
}

export default App
