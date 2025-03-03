import React from 'react';
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Sofia } from 'next/font/google';
import Image from 'next/image';

const sofia = Sofia({
  subsets: ['latin'],
  weight: ['400'],
});

export default function page() {
  return (
    <div className=' flex flex-col justify-center mx-5 md:justify-start md:mx-[50px] my-20'>
      {/* Image and Navigation section  */}
      <div className='flex flex-row space-x-[30px]'>
        <Image
          src='/bioP.jpg'
          width={97}
          height={97}
          alt='Profile'
          className='rounded-full shadow-sm outline  size-16 md:size-24 outline-slate-200'
        />
        {/* Icons socials */}
        <div className='space-y-3 '>
          <h1 className={`${sofia.className} text-4xl`}>Kofi Danso Amakye</h1>
          <div className='px-4 py-3 bg-slate-50 rounded-full '>
            <ul className='flex justify-between text-slate-800 items-center'>
              <a href='#projects' className='hover:text-slate-500'>
                <li>Projects</li>
              </a>
              <a href='#contact' className='hover:text-slate-500'> <li>Contact</li></a>
             
              <li>
                <a
                  href='https://github.com/Kofiastro'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub className='hover:text-green-500' />
                </a>
              </li>
              <li>
                <a href='http://' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedin className='hover:text-blue-500' />
                </a>
              </li>
              <li>
                <a href='http://' target='_blank' rel='noopener noreferrer'>
                  <FaInstagram className='hover:text-rose-400' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bio */}
      <div className='max-w-md text-sm text-slate-500  md:ml-[130px] my-4'>
        <div className='space-y-2 '>
          <p>
            I’m Kofi Danso Amakye, a Software Engineer and Designer based in
            Accra, Ghana 🇬🇭, with expertise in frontend development.
          </p>
          <p>
            I specialize in crafting custom websites, blending design and
            functionality by designing in Figma and bringing ideas to life
            through clean, efficient code.
          </p>
          <p>
            In recent years, I’ve been dedicated to refining my skills, guided
            by the belief that persistence and passion are key to achieving
            excellence. My journey has been shaped by learning from challenges,
            which has fueled my drive to create visually appealing and
            functional designs for the web.
          </p>
          <p>
            I’m enthusiastic about collaborating with startups and founders who
            are looking to build impactful digital experiences, whether it’s for
            marketing websites or product interfaces.
          </p>
        </div>

        <button
          id='contact'
          className='rounded-full px-4 py-2 my-4 bg-slate-800 flex shadow-md items-center text-slate-50 transition-all hover:bg-slate-700  hover:duration-500'
        >
          Email me{' '}
          <span>
            <MdKeyboardArrowRight />
          </span>
        </button>
        {/* Projects section */}

        <div
          id='projects'
          className=' flex flex-col md:flex-row space-y-4 py-4 md:space-x-8'
        >
          <h1 className='text-xl font-medium text-slate-500'>Projects</h1>
          <div className='space-y-4 divide-y-2 md:px-9 divide-slate-100 md:border-l-2 border-slate-100'>
            {/* Project one */}
            <div className='py-2'>
              <div className='flex flex-row items-center justify-between '>
                <h1 className='text-lg text-slate-800'>6lacktech</h1>
                <a
                  href='https://www.6lacktech.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaArrowUpRightFromSquare className='hover:text-slate-800 hover:transition-all hover:duration-700' />
                </a>
              </div>
              <p className='text-slate-500'>
                6lackTech (pronounced Blacktech) is a leading agency offering a
                unique combination of top-tier web design and development
                services alongside comprehensive financial advisory solutions.
              </p>
            </div>
            {/* Project Two */}
            <div className='py-2'>
              <div className='flex flex-row items-center justify-between '>
                <h1 className='text-lg text-slate-800'>Kelandrews</h1>
                <a
                  href='https://kelandrews.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaArrowUpRightFromSquare className='hover:text-slate-800 hover:transition-all hover:duration-700' />
                </a>
              </div>
              <p className='text-slate-500'>
                The KELANDREWS ENERGY MASTER DEVICE is a breakthrough
                technological product of the 21st century, which combines German
                Quantum technology, far infra-red waves anions and Japanese
                Nano-tourmaline Technology.
              </p>
            </div>
            {/* Project Three */}
            <div className='py-2'>
              <div className='flex flex-row items-center justify-between '>
                <h1 className='text-lg text-slate-800'>Frontend Mentor</h1>
                <a
                  href='https://www.frontendmentor.io/profile/Kofiastro'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaArrowUpRightFromSquare className='hover:text-slate-800 hover:transition-all hover:duration-700' />
                </a>
              </div>
              <p className='text-slate-500'>
                Frontend Mentor offers invaluable real-world web development
                challenges, sharpening my HTML, CSS, and JavaScript skills
              </p>
            </div>
             {/* Project Four */}
             <div className='py-2'>
              <div className='flex flex-row items-center justify-between '>
                <h1 className='text-lg text-slate-800'>Vercel Clone</h1>
                <a
                  href='https://vercelclone-eight.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaArrowUpRightFromSquare className='hover:text-slate-800 hover:transition-all hover:duration-700' />
                </a>
              </div>
              <p className='text-slate-500'>
                Official vercel website clone
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <h1 className='text-slate-500 test-xl my-4'>ⓒ 2024 6lacktech </h1>
      </footer>
    </div>
  );
}
