import { useState, useEffect } from 'react'
import axios from "axios"
import Profile from '../profile';
function App() {
  
  const [challenges, setChallenges] = useState([])

  useEffect(() => {
    const fetchChallenges = async () => {
      const response = await axios.get('http://localhost:3000/data');
      setChallenges(response.data);
    };

    fetchChallenges();
  }, []);

    const updateChallenges = async (id) => {
      const updatedChallenges = challenges.map(challenge => {
        if(challenge.id === id){
          challenge.completed = !challenge.completed;
        }
        return challenge;
      })

      setChallenges(updatedChallenges);
      //also change the data.json file locally
      await axios.post('http://localhost:3000/update', { data: updatedChallenges })
      .then(response => {
        console.log('Data updated successfully:', response.data);
      })
      .catch(error => {
        console.error('Error while updating data:', error);
      });
    }

    const displayChallenges = challenges.map(challenge => 
      {
        return (
          <div
        key={challenge.id}
        className="flex items-center justify-between p-4 bg-gray-100 shadow-lg rounded-lg mb-4"
      >
        <a href={challenge.link}target='_blank' className="flex-grow">
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              {challenge.title}
            </h2>
            <h3 className="text-sm text-gray-600">{challenge.description}</h3>
          </div>
        </a>
        <button
          onClick={() => {
            updateChallenges(challenge.id);
          }}
          className={`ml-4 px-4 py-2 font-semibold rounded-lg ${
            challenge.completed
              ? "bg-green-500 text-white"
              : "bg-blue-500 text-white"
          }`}
        >
          {challenge.completed ? "Done" : "Mark as Done"}
        </button>
      </div>
        );
      }
    );

  return (
   
   <div className='w-[60vw] m-auto mt-10 mb-10'>
    <Profile/>
     
    {displayChallenges}
   </div>
  )
}



export default App
