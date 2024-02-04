import React from 'react';

const PersonalDetailsPage = () => {
    // Definirane informacije o osobi
    const ime = "Anica";
    const prezime = "Ivanković";
    const dob = 30;

    return (
        <div>
            <h1>Informacije o osobi</h1>
            <p>Ime: {ime}</p>
            <p>Prezime: {prezime}</p>
            <p>Dob: {dob}</p>
        </div>
    );
}

export default PersonalDetailsPage;