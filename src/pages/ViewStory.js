import React, { useEffect, useState } from 'react';
import StoryFetchCollection from '../Components/StoryFetchCollection';
import { useParams } from 'react-router-dom';
import '../style/ViewStory.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Data/Firebase';

const ViewStory = () => {
  const { id } = useParams();
  const { data, isLoading } = StoryFetchCollection('stories', id);
  const [storyData, setStoryData] = useState(null);
 


  const [getStory, setStory] = useState([])
  const [loadStory, setLoadStory] = useState(true)
  useEffect(()=>{
    const getStoryData = async()=>{
      const getStoryRef = collection(db,"stories");
      const querySnapshot = await getDocs(getStoryRef)
      const storyDocs = querySnapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
      }))
      setStory(storyDocs)
      setLoadStory(false)
    }

    getStoryData()
  })


  return (
    <div className='storyContainer'>       
      <div className='storyContainer'>
          {getStory.map((viewStory, index)=>(
            <div className='storyContent' key={index}>
   
             <iframe
              src={viewStory.storyPDF}
              width="100%"
              height="800"
              title="Story PDF"
              style={{ border: 'none' }}
            ></iframe>
          </div>
      
         ))}
    </div>
    </div>
  );
};

export default ViewStory;
