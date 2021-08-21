import serverCall from '../serverCall.js';

export default function SearchBar(props){
    
    async function handleSubmit(e){
        e.preventDefault();
        const params = {
            name: e.target[0].value,
        }
        if (e.target[0].value === ""){
            alert("Please Input a stock symbol");
            return;
        }
        const headers = {
            "stock": e.target[0].value,
        }
        // const url = "http://localhost:5000/"
        // // console.log(JSON.stringify(params));
        // const response = await fetch(url, {
        //     method: "POST", // *GET, POST, PUT, DELETE, etc.
        //     mode: "cors", // no-cors, *cors, same-origin
        //     // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //     // credentials: 'same-origin', // include, *same-origin, omit
        //     headers: headers,
        // })
        // const data = await response.json();
        // // const dataArr = props.data;
        // const dataArr = [...props.data];

        // dataArr.push(data);
        // props.setData(dataArr);


        serverCall("POST", headers).then(data => {
            // console.log(data);
            const dataArr = [...props.data];

            dataArr.push(data);
            props.setData(dataArr);
        })

        serverCall("GET", headers).then(data => {
            // console.log(data);
            props.setDisplay(data);
        })
    }


    function handleClick(e){
        e.preventDefault();
        props.setData([]);
    }
    return(
        <div className="SearchBar">
            <form onSubmit={handleSubmit}>
                <input id="Search" type="text" placeholder="Search.."/>
                <input id="Button" type="submit" value="Submit"/>
                {props.data.length !== 0 ? <button id="Clear" onClick={handleClick}>Clear</button> : ""}
            </form>
        </div>
    )
}