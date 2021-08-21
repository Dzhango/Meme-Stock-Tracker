import '../App.css';

export default function Rows(props) {
    // const data = props.data;
    console.log(props.data)

    return (
        // <div>
        // {
            !props.data.length
            ? null
            : props.data.map(row =>
                <tr key={row.Symbol}>
                    <td>{row.Symbol}</td>
                    <td>{row.Name}</td>
                    <td>{row.EPS}</td>
                    <td>{row.PriceToBookRatio}</td>
                    <td>{row.PERatio}</td>
                    <td>{row.PEGRatio}</td>
                    <td>{row.ShortRatio}</td>
                </tr>
            )
        // }
        // {/* </div> */}
        
    )

    // if (props.data.length !== 0){
    //     const stock = props.data.map(row => 
    //         // return (
    //             <tr key={row.Symbol}>
    //                 <td>{row.Symbol}</td>
    //                 <td>{row.Name}</td>
    //                 <td>{row.EPS}</td>
    //                 <td>{row.PriceToBookRatio}</td>
    //                 <td>{row.PERatio}</td>
    //                 <td>{row.PEGRatio}</td>
    //                 <td>{row.ShortRatio}</td>
    //             </tr>
    //         // );
    //     );
    //     return {stock}
    // } else {
    //     return null
    // }
}