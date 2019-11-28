import React from 'react';
import {Image, Jumbotron, Table} from "react-bootstrap";
import './clients.scss';

const Clients = (props) => {
  const  data  = Object.values(props.data);
    return (
        <div>
          <Jumbotron>
            {!data.length
              ?
              <div className="baby">
                <h1>There is nothing yet, please register someone</h1>
                <div className="baby__img">
                  <Image src="https://media.tenor.com/images/d0a758ec760138aa333920d25a16383b/tenor.gif"
                         thumbnail />
                </div>
              </div>
              :
              <Table striped bordered hover variant="light">
                <thead>
                <tr>
                  <th>#</th>
                  <th>Client</th>
                  <th>Gender</th>
                  <th>Loyalty</th>
                  <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {data.map((client, index) => {
                  const
                    { fName,
                      lName,
                      gender,
                      date,
                      loyalty,
                      creditCard } = client;
                  return(
                    <tr key={date}>
                      <th>{index + 1}</th>
                      <th>{fName+' '+lName}</th>
                      {gender === 'Male'?
                        <th>👨</th> :
                        <th>👩</th>
                      }
                      {loyalty === 'Unavailable'&&
                      <th className="text-danger">{loyalty}</th>
                      }
                      {loyalty === 'Credit Card'&&
                      <th className="text-warning">{loyalty + ' 💳 ' + creditCard}</th>
                      }
                      {loyalty === 'Mobile App'&&
                      <th className="text-primary">{loyalty}</th>
                      }
                      <th>{client.date}</th>
                    </tr>
                  )
                })}
                </tbody>
              </Table>
            }

          </Jumbotron>
        </div>
    );
};

export default Clients;
