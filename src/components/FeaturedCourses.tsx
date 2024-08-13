'use client'

import Link from 'next/link'
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from './ui/background-gradient';
import Image from 'next/image';
import { Button } from './ui/moving-border';

interface Course{
    id:number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string,
}


const FeaturedCourses = () => {

   const featuredCourses =  courseData.courses.filter((course:Course) =>course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
        <div>
            <div className="text-center">
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured courses</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With The Best</p>
            </div>
        </div>

        <div className='mt-10 mx-8'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course)=>{
                    return(
                        <div key={course.id} className='flex justify-center'>
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <Image
                                    src={course.image}
                                    alt="imgs"
                                    height="300"
                                    width="300"
                                    className="object-contain"
                                    />
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                    <Link href={`/courses/${course.slug}`} className='mt-4'>
                                        <Button
                                                borderRadius="1rem"
                                                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                                                >
                                                Learn More
                                        </Button>
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    )
                })}
            </div>
        </div>

        <div className='mt-20 text-center'>
            <Link href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
                View All Courses
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses;