import React from "react";
import PropTypes from 'prop-types';

export const Contact = ({ dataContact, onDelete }) => {
    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {dataContact.map(data => (
                    <li key={data.id}>
                        {data.name}: {data.number}
                        <button type="button"
                            onClick={() => {
                                onDelete(data.id);
                            }}
                        >X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Contact.propTypes = {
    dataContact: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
};