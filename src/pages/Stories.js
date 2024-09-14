import React, { useEffect, useState } from 'react'
import '../style/Stories.css'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../Data/Firebase'
import { Link } from 'react-router-dom'
const Stories = () => {
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
    <div className='storiesContainer'>
    {loadStory ? (
        <h2 className="loading">Loading stories...</h2>
    ) : (
        <div className="storiesGrid">
            {getStory.map((story, index) => {
                const { title, imageFile, id, genre } = story;
                return (
                    <div className="storyCard" key={index}>
                        <Link to={`/readstory/${id}`}>
                            <img className="storyImage" src={imageFile} width={200} height={300} alt={title} />
                        </Link>
                        <h1 className="storyTitle">{title}</h1>
                        <h2 className="storyGenre">{genre}</h2>
                    </div>
                );
            })}
        </div>
    )}
</div>

  )
}

export default Stories