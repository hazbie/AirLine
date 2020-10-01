import React from 'react';
import './Preview.scss';

const Parameters = ({ availableRoutes, ...other }) => (
    <table >
        {
            availableRoutes.map((route, key) => {
                return (
                    <tbody key={key}>
                        {Object.keys(other).map((item, key) => {
                            if (typeof item === 'undefined' || item === null) {
                                return null;
                            }
                            return (
                                <tr key={key} className='checkout-header'>
                                    <td key={item}>{item}</td>
                                    <td >{route[item]}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                );
            })
        }
    </table>
);

export default Parameters;
