import React from 'react';

/* Generates a dropdown box from an Object. Expects data to be passed in via props (data). Object should be arranged as {'option value' : 'dropdown value'}. 
//Function expects dropdown id, name, value and onChange to be passed in via props. */
function Dropdown(props) {
    const { data, id, name, value, onChange } = props;
    const dataArray = Object.entries(data);

    return (
        <select id={id} name={name} value={value} onChange={onChange}>
            <option value="">Select</option>
            {dataArray.map(data => (
                <option key={data[0]} value={data[0]}>
                    {data[1]}
                </option>
            ))}
        </select>
    );
}

export default Dropdown;
