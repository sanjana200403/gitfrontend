import React from 'react'

const Footer = () => {
  return (
    <>
    
    <div className='mt-8 w-full bg-black px-8 md:px-[200px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 '>
       <div className="flex flex-col text-white">
        <p>Featured Blogs</p>
        <p>Most Viewed Post</p>
        <p>Reader choice</p>
       </div>
       <div className="flex flex-col text-white">
        <p>Forum</p>
        <p>Support</p>
        <p>Reader Choice</p>
        <p>Recent Post</p>
       </div>
       <div className="flex flex-col text-white">
        <p>Privacy</p>
        <p>About Us</p>
        <p>Term and Condition</p>
        <p>Terms of Services</p>
      
       </div>
    </div>
    <p className='py-2 pb-2 text-center text-white bg-black text-sm'>All right reserved @Blog Market 2023</p>
    </>
  )
}

export default Footer
