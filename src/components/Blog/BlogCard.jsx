'use client'

import React from 'react'
import hero from "../../assets/hero.png";
import { useRouter } from 'next/navigation';



const BlogCard = ({ details }) => {
    const router = useRouter();
    const handleClick = (id) => {
        router.push(`/blog/id=${id}`)
    }
    return (
        <>
            <div className="relative h-[fit] w-[fit] cursor-pointer" onClick={() => handleClick(details.id)}>
                <svg className="" width="342" height="450" viewBox="0 0 446 584" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_324_29" fill="white">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M195.618 0.963102C196.874 0.32986 198.261 0 199.668 0H419.117C420.419 0 421.706 0.282591 422.888 0.828268L440.772 9.08178C443.959 10.5528 446 13.743 446 17.2535V563.444C446 568.415 441.971 572.444 437 572.444L273.419 572.444C272.012 572.444 270.625 572.774 269.368 573.407L250.383 582.976C249.127 583.609 247.74 583.939 246.333 583.939H26.8844C25.5822 583.939 24.2955 583.656 23.1131 583.111L0.000654654 572.444C0.000588687 572.444 0.000515541 572.444 0.000443326 572.444V572.444C0.000206762 572.444 0 572.444 0 572.444V20.4949C0 15.5243 4.02945 11.4949 9.00001 11.4949H172.582C173.989 11.4949 175.376 11.165 176.633 10.5318L195.618 0.963102Z" />
                    </mask>
                    <g filter="url(#filter0_i_324_29)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M195.618 0.963102C196.874 0.32986 198.261 0 199.668 0H419.117C420.419 0 421.706 0.282591 422.888 0.828268L440.772 9.08178C443.959 10.5528 446 13.743 446 17.2535V563.444C446 568.415 441.971 572.444 437 572.444L273.419 572.444C272.012 572.444 270.625 572.774 269.368 573.407L250.383 582.976C249.127 583.609 247.74 583.939 246.333 583.939H26.8844C25.5822 583.939 24.2955 583.656 23.1131 583.111L0.000654654 572.444C0.000588687 572.444 0.000515541 572.444 0.000443326 572.444V572.444C0.000206762 572.444 0 572.444 0 572.444V20.4949C0 15.5243 4.02945 11.4949 9.00001 11.4949H172.582C173.989 11.4949 175.376 11.165 176.633 10.5318L195.618 0.963102Z" fill="url(#paint0_linear_324_29)" fill-opacity="0.2" />
                    </g>
                    <path d="M176.633 10.5318L176.183 9.63877L176.633 10.5318ZM0.000654654 572.444L-0.41838 573.352L0.000654654 572.444ZM23.1131 583.111L23.5321 582.203L23.1131 583.111ZM250.383 582.976L250.834 583.869L250.383 582.976ZM273.419 572.444L273.419 571.444L273.419 572.444ZM269.368 573.407L269.818 574.3L269.368 573.407ZM437 572.444L437 571.444L437 572.444ZM440.772 9.08178L440.353 9.98975L440.353 9.98975L440.772 9.08178ZM195.618 0.963102L196.068 1.85609L195.618 0.963102ZM422.888 0.828268L423.307 -0.0797021L422.888 0.828268ZM419.117 -1H199.668V1H419.117V-1ZM441.191 8.17381L423.307 -0.0797021L422.469 1.73624L440.353 9.98975L441.191 8.17381ZM447 563.444V17.2535H445V563.444H447ZM273.419 573.444L437 573.444L437 571.444L273.419 571.444L273.419 573.444ZM268.918 572.514L249.933 582.083L250.834 583.869L269.818 574.3L268.918 572.514ZM246.333 582.939H26.8844V584.939H246.333V582.939ZM23.5321 582.203L0.41969 571.536L-0.41838 573.352L22.694 584.018L23.5321 582.203ZM-1 20.4949V572.444H1V20.4949H-1ZM172.582 10.4949H9.00001V12.4949H172.582V10.4949ZM195.168 0.070113L176.183 9.63877L177.083 11.4247L196.068 1.85609L195.168 0.070113ZM172.582 12.4949C174.145 12.4949 175.687 12.1283 177.083 11.4247L176.183 9.63877C175.066 10.2016 173.833 10.4949 172.582 10.4949V12.4949ZM1 20.4949C1 16.0766 4.58173 12.4949 9.00001 12.4949V10.4949C3.47717 10.4949 -1 14.972 -1 20.4949H1ZM-0.109124 571.45C0.443209 571.389 1 571.809 1 572.444H-1C-1 573.078 -0.442795 573.499 0.110011 573.438L-0.109124 571.45ZM0.41969 571.536C0.254845 571.46 0.0720471 571.43 -0.109124 571.45L0.110011 573.438C-0.071016 573.458 -0.253668 573.428 -0.41838 573.352L0.41969 571.536ZM26.8844 582.939C25.7269 582.939 24.5831 582.688 23.5321 582.203L22.694 584.018C24.0078 584.625 25.4375 584.939 26.8844 584.939V582.939ZM249.933 582.083C248.817 582.646 247.583 582.939 246.333 582.939V584.939C247.896 584.939 249.438 584.572 250.834 583.869L249.933 582.083ZM273.419 571.444C271.856 571.444 270.314 571.81 268.918 572.514L269.818 574.3C270.935 573.737 272.168 573.444 273.419 573.444L273.419 571.444ZM445 563.444C445 567.862 441.419 571.444 437 571.444L437 573.444C442.523 573.444 447 568.967 447 563.444H445ZM440.353 9.98975C443.186 11.2973 445 14.133 445 17.2535H447C447 13.3529 444.732 9.8083 441.191 8.17381L440.353 9.98975ZM199.668 -1C198.105 -1 196.564 -0.633489 195.168 0.070113L196.068 1.85609C197.184 1.29321 198.418 1 199.668 1V-1ZM419.117 1C420.274 1 421.418 1.25119 422.469 1.73624L423.307 -0.0797021C421.993 -0.68601 420.564 -1 419.117 -1V1Z" fill="#1BA72B" fill-opacity="0.7" mask="url(#path-1-inside-1_324_29)" />
                    <defs>
                        <filter id="filter0_i_324_29" x="0" y="0" width="446" height="583.939" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="10" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_324_29" />
                        </filter>
                        <linearGradient id="paint0_linear_324_29" x1="223" y1="0" x2="223" y2="583.939" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A4A4A4" />
                            <stop offset="1" stop-color="#484848" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center p-8">
                    {/* <div className="absolute top-1 text-[#BFBFBF] text-sm right-10 flex items-center justify-between">
                    {details.author}
                </div> */}
                    <div className="h-full w-full flex justify-center items-center mb-4">
                        <img src={hero} alt="" className='h-auto w-auto rounded-lg' />
                    </div>
                    <div className='gap-5 flex flex-col'>
                        <h1 className="text-white text-xl font-syne text-center">{details.title.toUpperCase()}</h1>
                        <p className="text-[#BFBFBF] text-sm text-center">{details.description}</p>
                    </div>
                    <div className="w-full h-full flex items-center justify-center">
                        <button className='w-[80px] h-[30px] bg-[#8ae61ab0]'>Tech</button>
                    </div>
                    {/* <div className="absolute bottom-2 left-12 text-[#BFBFBF] text-sm flex items-center justify-start w-full gap-2">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 11H9V13H7zM7 15H9V17H7zM11 11H13V13H11zM11 15H13V17H11zM15 11H17V13H15zM15 15H17V17H15z"></path><path d="M5,22h14c1.103,0,2-0.897,2-2V8V6c0-1.103-0.897-2-2-2h-2V2h-2v2H9V2H7v2H5C3.897,4,3,4.897,3,6v2v12 C3,21.103,3.897,22,5,22z M19,8l0.001,12H5V8H19z"></path></svg>
                    <p>{details.date}</p>
                </div> */}
                </div>
            </div>
        </>
    )
}

export default BlogCard