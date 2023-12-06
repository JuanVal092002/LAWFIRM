import React from 'react';

// import skills data
import { skills } from "../data";


const Skills = () => {
  return (
    <section id='skills' className='section bg-[#f8f3eca1] pb-32 '>
    <div className='container mx-auto text-center'>
      <h2 className='text-5x1 font-primary 
      font-extrabold mb-4'>
        What we do
      </h2>
      <p className='max-w-[540px] mx-auto px-6
      lg:px-0 mb-[60px]'>
        At The Lawyers , we are dedicated to providing comprehensive and exceptional legal 
        counsel to our clients. Our team of highly skilled and experienced lawyers is committed 
        to safeguarding your rights and interests across various legal areas.
      </p>
      {/* Skills grid */}
      <div className='lg:grid lg:grid-cols-3 gap-12'>
        {skills.map((item,index ) => {
            const {icon, title, description } = item;
            return (
            <div className='flex flex-col 
            items-center justify-center mb-16
            last:mb-0 lg:mb-0'>
                <img className='mb-6' src={icon} alt=''/> 
                <h4 className='text-2x1 mb-2 
                font-primary font-bold'>{title}</h4>
            <p className='max-w-[332px] lg:max-w-[350px]'>{description}</p>
            </div> 

            );
        })}
      </div>
    </div>
    </section>
   
  )
}

export default Skills
