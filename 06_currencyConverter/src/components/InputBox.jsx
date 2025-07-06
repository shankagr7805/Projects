import React , {useId} from 'react'
/* 
^ useId ek React ka hook hai (React 18 se introduce hua), jo ki unique ID generate karta hai. 
^ Ye ID server aur client dono mein same rehti hai, isliye yeh accessibility ke liye 
^ kaafi useful hota hai — jaise ki jab hum kisi <label> ko <input> ke saath link karte hain.
^ Do not call useId to generate keys.
*/
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const InputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={InputId}        //& Linked label to input. 
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id = {InputId}               //& Input ka id vahi unique id hai.
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
