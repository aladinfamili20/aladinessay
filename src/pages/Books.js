import React from 'react'
import '../style/Books.css'
const Books = () => {
  return (
    <div className='booksContainer'>
         <div>
            <div>
            <div className='bookHomeContents'>
            
            <div className='bookHome'>
            <img src={require('../images/bookHomeBac.png')}  alt='Art-Hub Logo' className='homeImg' />
            <div className='newBookRealse'>
            <h2>New Release</h2>
            <h3>Modern Society: The Sixties Attack</h3>
            <p>Descover a story about a young college lost his family in a car accident while he was texting and driving. So, he embarked on a journey to hack into every database in the world. In an attempt to end the influence of technology and social media.</p>
            <a href='https://a.co/d/e637AdR' target='blank'><h4>View on Amazon</h4></a>
            </div>
            </div>
            </div>

            <div>
                <h1>The Modern Society series</h1>
             </div>

            <div className='booksCoversContainer'>
             <div className='booksCoversConent'>
            <a href='https://a.co/d/2LWI32q' target='blank'>
            <img src={require('../images/Book Cover 5.png')}  alt='Art-Hub Logo' className='bookCoverImg' />
            </a>

            <a href="https://a.co/d/fP1z3kS" target="blank">
              <img src={require('../images/RiseofRobots.png')} alt="Rise of Robots" className="bookCoverImg" />
            </a>            </div>
            </div>
            </div>
     </div>
    </div>
  )
}

export default Books