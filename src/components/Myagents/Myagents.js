import React, { useEffect, useState } from 'react';

const MyAgents = () => {
  const adminZones  = "Z123";
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        console.log("fetchData is working");
      try {
        console.log("this is console log inside try block")
        const response = await fetch("https://raddaf-be.onrender.com/admin/getAgentList", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ adminZones }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const dataFromServer = await response.json();
        setData(dataFromServer.result); // Assuming data structure has a "result" property
        console.log('this is data FromServer',dataFromServer);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [adminZones]);

  return (
    <div>
      <h1>Display your data as needed</h1>
      {data && (
        <ul>
          {data.map((agent) => (
            <li key={agent._id}>
              <div>
                <strong>Username:</strong> {agent.username}
              </div>
              <div>
               <p> <strong>Email:</strong> {agent.email}</p>
               <p> <strong>Title:</strong> {agent.title}</p>
               <p> <strong>Zone Number:</strong> {agent.zoneNumber}</p>
               <p><button>verifiied</button>:{agent.verified}</p>
               <div>
                <img src={agent.profileImage} width="50%" height="50%" />
               </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyAgents;
