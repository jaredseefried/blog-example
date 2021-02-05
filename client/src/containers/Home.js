import React, { useState, useEffect } from 'react'
import Post from '../components/Post'
import Cards from '../components/Cards'
import API from '../utils/API'

function Home() {
  const [postings, setPostings] = useState([])

  function loadPosts() {
    API.getPost()
      .then((response) => {
        const data = response.data
        console.log(data);
        data.reverse()
        setPostings(data)
      })
  }

  useEffect(() => {
    loadPosts()

  }, [])

  return (
    <div className="home-container container">
      <div className="row">
        <div className="col-3">
          <Post />
        </div>
        <div className="col-9">
          <div className="postings">
            {postings.map((posting) => (
              <Cards
                key={posting._id}
                {...posting}
                title={posting.title}
                description={posting.description}
                image={posting.image}
                link={posting.link}
              />
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home