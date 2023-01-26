import React from 'react'
import styles from "../style";
import bgImage from '../assets/Community.png'


const Blog = () => {
  return (
    <section id="blog" className={`w-full bg-cover bg-top bg-bottom flex md:flex-row flex-col ${styles.paddingY}`} style={{ backgroundImage: `url(${bgImage})` }}>
      
      <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient"> Cosmic News</span>
          </h1>
        </div>

        <div className="flex flex-wrap -mx-3">
      {posts.map((post, index) => (
        <div key={index} className="w-1/2 px-3">
          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
            <div className="px-6 py-4">
              <h2 className="text-lg font-medium text-black">{post.title}</h2>
              <p className="mt-2 text-gray-600">{post.summary}</p>
            </div>
            <div className="px-6 py-4">
              <a href={post.link} className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
        </div>
      ))}
    </div>


    </section>  
    );
};

export default Blog

