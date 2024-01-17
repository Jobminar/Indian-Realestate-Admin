// import React, { useEffect, useState } from 'react';

// const MyAgents = () => {
//   const adminZones  = "Z1998";
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//         console.log("fetchData is working");
//       try {
//         console.log("this is console log inside try block")
//         const response = await fetch("https://raddaf-be.onrender.com/admin/getAgentList", {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ adminZones }),
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const dataFromServer = await response.json();
//         setData(dataFromServer.result); // Assuming data structure has a "result" property
//         console.log('this is data FromServer',dataFromServer);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [adminZones]);

//   return (
//     <div>
//       <h1>Display your data as needed</h1>
//       {data && (
//         <ul>
//           {data.map((agent) => (
//             <li key={agent._id}>
//               <div>
//                 <strong>Username:</strong> {agent.username}
//               </div>
//               <div>
//                <p> <strong>Email:</strong> {agent.email}</p>
//                <p> <strong>Title:</strong> {agent.title}</p>
//                <p> <strong>Zone Number:</strong> {agent.zoneNumber}</p>
//                <p><button>verifiied</button>:{agent.verified}</p>
//                <div>
//                 <img src={agent.profileImage} width="50%" height="50%" />
//                </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MyAgents;

import React, { useEffect, useState } from 'react';

const MyAgents = () => {
  const adminZones = ["Z1998"]; // Assuming you want to verify agents in Z1998 initially
  const [data, setData] = useState(null);

  const handleVerify = async (email) => {
    try {
      const response = await fetch("https://raddaf-be.onrender.com/admin/approveAgent", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          verifiedStatus: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedData = data.map(agent =>
        agent.email === email ? { ...agent, verified: true } : agent
      );

      setData(updatedData);
    } catch (error) {
      console.error('Error verifying agent:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
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
        setData(dataFromServer.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [adminZones]);

  return (
    <div>
      <h1>Agent List</h1>
      {data && (
        <ul>
          {data.map((agent) => (
            <li key={agent._id}>
              <div>
                <strong>Username:</strong> {agent.username}
              </div>
              <div>
                <p><strong>Email:</strong> {agent.email}</p>
                <p><strong>Title:</strong> {agent.title}</p>
                <p><strong>Zone Number:</strong> {agent.zoneNumber}</p>
                <p>
                  <button
                    onClick={() => handleVerify(agent.email)}
                    disabled={agent.verified}
                  >
                    {agent.verified ? 'Verified' : 'Verify'}
                  </button>
                </p>
                <div>
                  <img src={agent.profileImage} alt="Agent Profile" width="50%" height="50%" />
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