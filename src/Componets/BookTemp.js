import React from 'react';
import '../BookTemp.css';
import data from '../data/data.json'
class BookTemp extends React.Component {

    

    render() {

       

        var rows = []
        
        

        for (var i = 0; i < data.length; i++) {

            rows.push(

                <div id="inner">
                    <div className="BookTemp">
                        <div id="books">
                            <h4 className="bookHead">Book Id : <span>{data[i].book_id}</span></h4>
                            <img className="bookImg" src={data[i].img} />
                            <h4 className="bookHead">Title : <span>{data[i].title}</span></h4>
                            <h4 className="bookHead">Author : <span>{data[i].author}</span></h4>
                            <h4 className="bookHead">Genre : <span>{data[i].genre}</span></h4>
                            <h4 className="bookHead">Location : <span>{data[i].location}</span></h4>
                            <h3 className="bookHead">Quantity : <span>{data[i].quantity}</span></h3>
                            <div><button>Issue Book</button> <button>Return Book</button></div>

                        </div>
                    </div>
                </div>
            );

        }
        return <div id="outer">{rows}</div>

    }

}

export default BookTemp;


