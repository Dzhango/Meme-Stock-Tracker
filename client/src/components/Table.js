import '../App.css';
import { useState, useEffect } from 'react';
import Rows from './Rows.js'; 
export default function Table(props) {

    return (
        <table className="Table">
            <tbody>
                <tr key="Header">
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>EPS</th>
                    <th>P/B Ratio</th>
                    <th>P/E Ratio</th>
                    <th>PEG Ratio</th>
                    <th>Short Ratio</th>
                </tr>
                {/* array of <tr> elements */}
                <Rows data={props.data}/> 
                {/* <tr>
                    <td>{props.data !== [] ? props.data[0].Symbol : ""}</td>
                    <td>{props.data !== [] ? props.data[0].Name : ""}</td>
                    <td>{props.data !== [] ? props.data.EPS : ""}</td>
                    <td>{props.data !== [] ? props.data.PriceToBookRatio : ""}</td>
                    <td>{props.data !== [] ? props.data.PERatio : ""}</td>
                    <td>{props.data !== [] ? props.data.PEGRatio : ""}</td>
                    <td>{props.data !== [] ? props.data.ShortRatio : ""}</td>
                </tr> */}
            </tbody>
        </table>
    )
}