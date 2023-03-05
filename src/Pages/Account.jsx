import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <div>
      <div>
        <img
          className=" lg:block md:block sm:hidden absolute w-full h-[300px] object-cover"
          src={
            "https://assets.nflxext.com/ffe/siteui/vlv3/d54727b4-2ad9-4e71-bb48-0899f55f103a/28f1134c-c804-4cbe-be0b-b5d5281deba1/NP-en-20230220-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          }
          alt="IMG"
        />
        <div className="bg-black/60 h-[300px] left-0 right-0 relative w-full"></div>
      </div>
      <h2 className="text-white text-2xl  z-50 m-10">My shows</h2>
      <SavedShows/>
    </div>
  )
}

export default Account