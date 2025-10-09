import React, { useState } from 'react';

const Calc = () => {
    const [value, setValue] = useState('');

    const calculate = () => {
        try {
            setValue(eval(value).toString());
        } catch {
            setValue('Error');
        }
    };

    return (
        <div>
            <form action="" style={{backgroundColor:"red"}}>
                <div>
                    <input 
                        type="text" 
                        value={value} 
                        onChange={e => setValue(e.target.value)} 
                        placeholder="0"
                    />
                </div>

                <div>
                    <input type="button" value="AC" onClick={e => setValue('')} /> &nbsp;
                    <input type="button" value="DEL" onClick={e => setValue(value.slice(0, -1))} /> &nbsp;
                    <input type="button" value="." onClick={e => setValue(value + e.target.value)} /> &nbsp;
                    <input type="button" value="/" onClick={e => setValue(value + e.target.value)} /> &nbsp;
                </div>

                <div>
                    <input type="button" value="7" onClick={e => setValue(value + e.target.value)} /> &nbsp;
                    <input type="button" value="8" onClick={e => setValue(value + e.target.value)} /> &nbsp;
                    <input type="button" value="9" onClick={e => setValue(value + e.target.value)} /> &nbsp;
                </div>

                <div>
                    <input type="button" value="4" onClick={e => setValue(value + e.target.value)} /> &nbsp;
                    <input type="button" value="5" onClick={e => setValue(value + e.target.value)} /> &nbsp;
                    <input type="button" value="6" onClick={e => setValue(value + e.target.value)} /> &nbsp;
                    <input type="button" value="-" onClick={e => setValue(value + e.target.value)} /> &nbsp;
                </div>

                <div>
                    <input type="button" value="1" onClick={e => setValue(value + e.target.value)} /> &nbsp;
                    <input type="button" value="2" onClick={e => setValue(value + e.target.value)} /> &nbsp;
                    <input type="button" value="3" onClick={e => setValue(value + e.target.value)} /> &nbsp;
                    <input type="button" value="+" onClick={e => setValue(value + e.target.value)} /> &nbsp;
                </div>

                <div>
                    <input type="button" value="0" onClick={e => setValue(value + e.target.value)} /> &nbsp;
                    <input type="button" value="=" onClick={calculate} /> &nbsp;
                </div>
            </form>
        </div>
    );
};

export default Calc;
