import React from 'react';
import { IPill } from '../types/pill';
import "../styles/Pill.css";

const Pill = ({ text, backgroundColor, color }: IPill) => {
    return (
        <span className="pill" style={{ backgroundColor: backgroundColor, color: color }}>{text}</span>
    );
};

export default Pill;