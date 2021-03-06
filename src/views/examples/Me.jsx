import React from 'react';
import { useParams } from 'react-router-dom';

const Me = props => {
    const { id } = useParams();
    let user = {
        name: 'Unknow',
        years: null,
        country: 'Unknow'
    };

    if (parseInt(id) === 1) {
        user = {
            name: 'Wesley Lima',
            years: 28,
            country: 'Brazil'
        };
    }

    return (
        <div className="Me">
            <h1>Me</h1>
            <p>My name is <strong>{user.name}</strong>, and I'm <strong>{user.years}</strong> years old.</p>
            <p>I was born in <strong>{user.country}</strong></p>
        </div>
    );
};

export default Me;