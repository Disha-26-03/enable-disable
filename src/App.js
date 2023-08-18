import React, { useState, useEffect } from 'react';
import "./App.css";

function App() {

    
    const [initialData, setInitialData] = useState([
        { attribute1: 'Value 1', attribute2: 'Value 2', attribute3: 'Value 3' },
        { attribute1: 'Value 1', attribute2: 'Value 2', attribute3: 'Value 3' },
        { attribute1: 'Value 1', attribute2: 'Value 2', attribute3: 'Value 3' },
        { attribute1: 'Value 1', attribute2: 'Value 2', attribute3: 'Value 3' },
        
    ]);
    
    const [enable,setenable] = useState(false);    
    function checkEnable()
    {
        setenable(true)
        
    }
    function checkDisable()
    {
        setenable(false)
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Attribute 1</th>
                        <th>Attribute 2</th>
                        <th>Attribute 3</th>
                        {/* Add more table headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {initialData.map((data, index) => (
                        <tr className="table-row" key={index}>
                            <td>
                                <input type="text" value={data.attribute1} readOnly disabled={!enable} />
                            </td>
                            <td>
                                <input type="text" value={data.attribute2} readOnly disabled={!enable}/>
                            </td>
                            <td>
                                <input type="text" value={data.attribute3} readOnly disabled={!enable}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="button-container">
                <button onClick={checkDisable} disabled={!enable}>
                    Disable
                </button>
                <button onClick={checkEnable} disabled={enable}>
                    Enable
                </button>
            </div>
        </div>
    );
}

export default App;


