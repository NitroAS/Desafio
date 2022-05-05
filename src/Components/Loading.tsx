import React from "react";
import loading from '../Assets/img/Loading.svg';
import '../Assets/CSS/modalLoading.css';

export const LoadingModal = () => {
    return (
        <div className="Opacidade">
            <div className="container">
                <img src={loading} alt="Loading..." />
            </div>
        </div>
    );
}