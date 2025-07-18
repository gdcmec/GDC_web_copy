import React from 'react'
import { useParams } from 'react-router-dom'
import TeamCard from '../TeamCard/Teamcard'
import blogContents from './BlogContents'

const BlogDisplay = () => {
    const { id } = useParams();
    const blog = blogContents.find((blog) => blog.id === parseInt(id.split('=')[1]));
    return (
        <>
            <div className="h-screen overflow-y-auto w-screen flex flex-col justify-around items-center bg-gradient-to-b from-[#272727] to-[#000000]">
                <h1 className=' font-navfont my-6 text-[#0FD42F] text-5xl'>OUR BLOG</h1>
                <div className="w-full max-h-fit min-h-[90%] flex md:flex-row flex-wrap md:flex-nowrap items-center justify-center mb-20">
                    <div className="relative md:w-2/3 w-[90%] lg:h-fit mb-10 h-fit text-white flex items-center flex-col justify-around border-2 border-[#82a71b] rounded-lg mx-5 gap-10 py-10">
                        <h1 className='xl:text-4xl lg:text-3xl text-2xl font-Syne'>{blog.title.toUpperCase()}</h1>
                        <p className='w-[80%] lg:text-lg text-md text-[#d4d3d3]'>
                            {blog.content.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                {line}
                                <br />
                                </React.Fragment>
                            ))}
                        </p>


                        {/* <svg className="absolute w-[90%] h-full"  viewBox="0 0 446 584" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none'>
                            <mask id="path-1-inside-1_341_32" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M278.806 11.0023C283.258 11.0023 287.48 9.02476 290.33 5.60457L290.502 5.39773C293.352 1.97754 297.574 0 302.026 0H427.693C432.019 0 436.134 1.8674 438.982 5.12291L443.741 10.5621C443.986 10.8418 444.339 11.0023 444.711 11.0023V11.0023C445.423 11.0023 446 11.5794 446 12.2912V557.001C446 565.286 439.284 572.001 431 572.001H167.025C162.573 572.001 158.351 573.979 155.501 577.399L154.497 578.605C151.647 582.025 147.425 584.002 142.973 584.002H17.3064C12.9804 584.002 8.86516 582.135 6.01682 578.879L3.71047 576.243C1.31844 573.508 0 569.999 0 566.366V26.0023C0 17.718 6.71574 11.0023 15 11.0023H278.806Z"/>
                            </mask>
                            <g filter="url(#filter0_i_341_32)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M278.806 11.0023C283.258 11.0023 287.48 9.02476 290.33 5.60457L290.502 5.39773C293.352 1.97754 297.574 0 302.026 0H427.693C432.019 0 436.134 1.8674 438.982 5.12291L443.741 10.5621C443.986 10.8418 444.339 11.0023 444.711 11.0023V11.0023C445.423 11.0023 446 11.5794 446 12.2912V557.001C446 565.286 439.284 572.001 431 572.001H167.025C162.573 572.001 158.351 573.979 155.501 577.399L154.497 578.605C151.647 582.025 147.425 584.002 142.973 584.002H17.3064C12.9804 584.002 8.86516 582.135 6.01682 578.879L3.71047 576.243C1.31844 573.508 0 569.999 0 566.366V26.0023C0 17.718 6.71574 11.0023 15 11.0023H278.806Z" fill="url(#paint0_linear_341_32)" fill-opacity="0.2"/>
                            </g>
                            <path d="M3.71047 576.243L4.46311 575.584L3.71047 576.243ZM6.01682 578.879L5.26418 579.537L6.01682 578.879ZM154.497 578.605L153.728 577.964L154.497 578.605ZM155.501 577.399L156.27 578.039L155.501 577.399ZM443.741 10.5621L444.494 9.90363L443.741 10.5621ZM438.982 5.12291L438.23 5.78138L438.982 5.12291ZM290.502 5.39773L289.734 4.75758L290.502 5.39773ZM290.33 5.60457L291.098 6.24473L290.33 5.60457ZM291.098 6.24473L291.271 6.03788L289.734 4.75758L289.562 4.96442L291.098 6.24473ZM302.026 1H427.693V-1H302.026V1ZM438.23 5.78138L442.988 11.2206L444.494 9.90363L439.735 4.46444L438.23 5.78138ZM447 557.001V12.2912H445V557.001H447ZM167.025 573.001H431V571.001H167.025V573.001ZM155.265 579.245L156.27 578.039L154.733 576.759L153.728 577.964L155.265 579.245ZM17.3064 585.002H142.973V583.002H17.3064V585.002ZM2.95784 576.901L5.26418 579.537L6.76945 578.22L4.46311 575.584L2.95784 576.901ZM-1 26.0023V566.366H1V26.0023H-1ZM278.806 10.0023H15V12.0023H278.806V10.0023ZM1 26.0023C1 18.2703 7.26802 12.0023 15 12.0023V10.0023C6.16345 10.0023 -1 17.1658 -1 26.0023H1ZM4.46311 575.584C2.23054 573.032 1 569.757 1 566.366H-1C-1 570.241 0.406337 573.985 2.95784 576.901L4.46311 575.584ZM17.3064 583.002C13.2688 583.002 9.4279 581.259 6.76945 578.22L5.26418 579.537C8.30241 583.01 12.6921 585.002 17.3064 585.002V583.002ZM153.728 577.964C151.069 581.157 147.128 583.002 142.973 583.002V585.002C147.722 585.002 152.225 582.893 155.265 579.245L153.728 577.964ZM167.025 571.001C162.276 571.001 157.773 573.111 154.733 576.759L156.27 578.039C158.929 574.847 162.87 573.001 167.025 573.001V571.001ZM445 557.001C445 564.733 438.732 571.001 431 571.001V573.001C439.837 573.001 447 565.838 447 557.001H445ZM444.711 12.0023C444.871 12.0023 445 12.1317 445 12.2912H447C447 11.0271 445.975 10.0023 444.711 10.0023V12.0023ZM442.988 11.2206C443.423 11.7174 444.051 12.0023 444.711 12.0023V10.0023C444.628 10.0023 444.549 9.96634 444.494 9.90363L442.988 11.2206ZM427.693 1C431.73 1 435.571 2.7429 438.23 5.78138L439.735 4.46444C436.697 0.99189 432.307 -1 427.693 -1V1ZM291.271 6.03788C293.93 2.84571 297.871 1 302.026 1V-1C297.277 -1 292.774 1.10938 289.734 4.75758L291.271 6.03788ZM289.562 4.96442C286.902 8.1566 282.961 10.0023 278.806 10.0023V12.0023C283.555 12.0023 288.058 9.89292 291.098 6.24473L289.562 4.96442Z" fill="#1BA72B" fill-opacity="0.7" mask="url(#path-1-inside-1_341_32)"/>
                            <defs>
                            <filter id="filter0_i_341_32" x="0" y="0" width="446" height="584.002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="10"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_341_32"/>
                            </filter>
                            <linearGradient id="paint0_linear_341_32" x1="223" y1="0" x2="223" y2="584.002" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A4A4A4"/>
                            <stop offset="1" stop-color="#484848"/>
                            </linearGradient>
                            </defs>
                        </svg> */}



                    </div>
                    <div className="md:w-1/3 w-[80%] h-fit md:mt-[12rem] max-h-fit flex flex-col items-center justify-center gap-10 py-10">
                        <div className="relative h-[30rem] w-full flex flex-col items-center justify-center gap-7">
                            <svg className='h-[30rem] w-[70%] absolute' viewBox="0 0 446 584" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none'>
                                <mask id="path-1-inside-1_324_29" fill="white">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M195.618 0.963102C196.874 0.32986 198.261 0 199.668 0H419.117C420.419 0 421.706 0.282591 422.888 0.828268L440.772 9.08178C443.959 10.5528 446 13.743 446 17.2535V563.444C446 568.415 441.971 572.444 437 572.444L273.419 572.444C272.012 572.444 270.625 572.774 269.368 573.407L250.383 582.976C249.127 583.609 247.74 583.939 246.333 583.939H26.8844C25.5822 583.939 24.2955 583.656 23.1131 583.111L0.000654654 572.444C0.000588687 572.444 0.000515541 572.444 0.000443326 572.444C0.000206762 572.444 0 572.444 0 572.444V20.4949C0 15.5243 4.02945 11.4949 9.00001 11.4949H172.582C173.989 11.4949 175.376 11.165 176.633 10.5318L195.618 0.963102Z"/>
                                </mask>
                                <g filter="url(#filter0_i_324_29)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M195.618 0.963102C196.874 0.32986 198.261 0 199.668 0H419.117C420.419 0 421.706 0.282591 422.888 0.828268L440.772 9.08178C443.959 10.5528 446 13.743 446 17.2535V563.444C446 568.415 441.971 572.444 437 572.444L273.419 572.444C272.012 572.444 270.625 572.774 269.368 573.407L250.383 582.976C249.127 583.609 247.74 583.939 246.333 583.939H26.8844C25.5822 583.939 24.2955 583.656 23.1131 583.111L0.000654654 572.444C0.000588687 572.444 0.000515541 572.444 0.000443326 572.444C0.000206762 572.444 0 572.444 0 572.444V20.4949C0 15.5243 4.02945 11.4949 9.00001 11.4949H172.582C173.989 11.4949 175.376 11.165 176.633 10.5318L195.618 0.963102Z" fill="url(#paint0_linear_324_29)" fill-opacity="0.2"/>
                                </g>
                                <path d="M176.633 10.5318L176.183 9.63877L176.633 10.5318ZM0.000654654 572.444L-0.41838 573.352L0.000654654 572.444ZM23.1131 583.111L23.5321 582.203L23.1131 583.111ZM250.383 582.976L250.834 583.869L250.383 582.976ZM273.419 572.444V571.444V572.444ZM269.368 573.407L269.818 574.3L269.368 573.407ZM437 572.444V571.444V572.444ZM440.772 9.08178L440.353 9.98975L440.772 9.08178ZM195.618 0.963102L196.068 1.85609L195.618 0.963102ZM422.888 0.828268L423.307 -0.0797021L422.888 0.828268ZM419.117 -1H199.668V1H419.117V-1ZM441.191 8.17381L423.307 -0.0797021L422.469 1.73624L440.353 9.98975L441.191 8.17381ZM447 563.444V17.2535H445V563.444H447ZM273.419 573.444L437 573.444V571.444L273.419 571.444V573.444ZM268.918 572.514L249.933 582.083L250.834 583.869L269.818 574.3L268.918 572.514ZM246.333 582.939H26.8844V584.939H246.333V582.939ZM23.5321 582.203L0.41969 571.536L-0.41838 573.352L22.694 584.018L23.5321 582.203ZM-1 20.4949V572.444H1V20.4949H-1ZM172.582 10.4949H9.00001V12.4949H172.582V10.4949ZM195.168 0.070113L176.183 9.63877L177.083 11.4247L196.068 1.85609L195.168 0.070113ZM172.582 12.4949C174.145 12.4949 175.687 12.1283 177.083 11.4247L176.183 9.63877C175.066 10.2016 173.833 10.4949 172.582 10.4949V12.4949ZM1 20.4949C1 16.0766 4.58173 12.4949 9.00001 12.4949V10.4949C3.47717 10.4949 -1 14.972 -1 20.4949H1ZM-0.109124 571.45C0.443209 571.389 1 571.809 1 572.444H-1C-1 573.078 -0.442795 573.499 0.110011 573.438L-0.109124 571.45ZM0.41969 571.536C0.254845 571.46 0.0720471 571.43 -0.109124 571.45L0.110011 573.438C-0.071016 573.458 -0.253668 573.428 -0.41838 573.352L0.41969 571.536ZM26.8844 582.939C25.7269 582.939 24.5831 582.688 23.5321 582.203L22.694 584.018C24.0078 584.625 25.4375 584.939 26.8844 584.939V582.939ZM249.933 582.083C248.817 582.646 247.583 582.939 246.333 582.939V584.939C247.896 584.939 249.438 584.572 250.834 583.869L249.933 582.083ZM273.419 571.444C271.856 571.444 270.314 571.81 268.918 572.514L269.818 574.3C270.935 573.737 272.168 573.444 273.419 573.444V571.444ZM445 563.444C445 567.862 441.419 571.444 437 571.444V573.444C442.523 573.444 447 568.967 447 563.444H445ZM440.353 9.98975C443.186 11.2973 445 14.133 445 17.2535H447C447 13.3529 444.732 9.8083 441.191 8.17381L440.353 9.98975ZM199.668 -1C198.105 -1 196.564 -0.633489 195.168 0.070113L196.068 1.85609C197.184 1.29321 198.418 1 199.668 1V-1ZM419.117 1C420.274 1 421.418 1.25119 422.469 1.73624L423.307 -0.0797021C421.993 -0.68601 420.564 -1 419.117 -1V1Z" fill="#1BA72B" fill-opacity="1" mask="url(#path-1-inside-1_324_29)"/>
                                <defs>
                                <filter id="filter0_i_324_29" x="0" y="0" width="446" height="583.939" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="10"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_324_29"/>
                                </filter>
                                {/* <linearGradient id="paint0_linear_324_29" x1="223" y1="0" x2="223" y2="583.939" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#A4A4A4"/>
                                <stop offset="1" stop-color="#484848"/>
                                </linearGradient> */}
                                </defs>
                            </svg>
                            <img className='h-1/3 auto z-10' src={blog.authorImage} alt="" />
                            <h2 className='text-white text-2xl'>{blog.author}</h2>
                            <p className='w-[60%] text-[#8b8b8b] text-center'>{blog.authorBio}</p>
                            <div className="w-full flex items-center justify-center gap-5">
                            {
                                blog.socials.map((social, index) => (
                                    <a key={index} href={social.link} target='_blank' rel='noreferrer'>
                                        <img className='h-7 w-7' src={social.icon} alt="" />
                                    </a>
                                ))
                            }
                            </div>

                        </div>
                        <div className="relative flex items-center justify-around h-[30rem] w-full gap-10 flex-col">
                            <svg className='h-[30rem] w-[70%] absolute' viewBox="0 0 446 584" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none'>
                                <mask id="path-1-inside-1_324_29" fill="white">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M195.618 0.963102C196.874 0.32986 198.261 0 199.668 0H419.117C420.419 0 421.706 0.282591 422.888 0.828268L440.772 9.08178C443.959 10.5528 446 13.743 446 17.2535V563.444C446 568.415 441.971 572.444 437 572.444L273.419 572.444C272.012 572.444 270.625 572.774 269.368 573.407L250.383 582.976C249.127 583.609 247.74 583.939 246.333 583.939H26.8844C25.5822 583.939 24.2955 583.656 23.1131 583.111L0.000654654 572.444C0.000588687 572.444 0.000515541 572.444 0.000443326 572.444C0.000206762 572.444 0 572.444 0 572.444V20.4949C0 15.5243 4.02945 11.4949 9.00001 11.4949H172.582C173.989 11.4949 175.376 11.165 176.633 10.5318L195.618 0.963102Z"/>
                                </mask>
                                <g filter="url(#filter0_i_324_29)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M195.618 0.963102C196.874 0.32986 198.261 0 199.668 0H419.117C420.419 0 421.706 0.282591 422.888 0.828268L440.772 9.08178C443.959 10.5528 446 13.743 446 17.2535V563.444C446 568.415 441.971 572.444 437 572.444L273.419 572.444C272.012 572.444 270.625 572.774 269.368 573.407L250.383 582.976C249.127 583.609 247.74 583.939 246.333 583.939H26.8844C25.5822 583.939 24.2955 583.656 23.1131 583.111L0.000654654 572.444C0.000588687 572.444 0.000515541 572.444 0.000443326 572.444C0.000206762 572.444 0 572.444 0 572.444V20.4949C0 15.5243 4.02945 11.4949 9.00001 11.4949H172.582C173.989 11.4949 175.376 11.165 176.633 10.5318L195.618 0.963102Z" fill="url(#paint0_linear_324_29)" fill-opacity="0.2"/>
                                </g>
                                <path d="M176.633 10.5318L176.183 9.63877L176.633 10.5318ZM0.000654654 572.444L-0.41838 573.352L0.000654654 572.444ZM23.1131 583.111L23.5321 582.203L23.1131 583.111ZM250.383 582.976L250.834 583.869L250.383 582.976ZM273.419 572.444V571.444V572.444ZM269.368 573.407L269.818 574.3L269.368 573.407ZM437 572.444V571.444V572.444ZM440.772 9.08178L440.353 9.98975L440.772 9.08178ZM195.618 0.963102L196.068 1.85609L195.618 0.963102ZM422.888 0.828268L423.307 -0.0797021L422.888 0.828268ZM419.117 -1H199.668V1H419.117V-1ZM441.191 8.17381L423.307 -0.0797021L422.469 1.73624L440.353 9.98975L441.191 8.17381ZM447 563.444V17.2535H445V563.444H447ZM273.419 573.444L437 573.444V571.444L273.419 571.444V573.444ZM268.918 572.514L249.933 582.083L250.834 583.869L269.818 574.3L268.918 572.514ZM246.333 582.939H26.8844V584.939H246.333V582.939ZM23.5321 582.203L0.41969 571.536L-0.41838 573.352L22.694 584.018L23.5321 582.203ZM-1 20.4949V572.444H1V20.4949H-1ZM172.582 10.4949H9.00001V12.4949H172.582V10.4949ZM195.168 0.070113L176.183 9.63877L177.083 11.4247L196.068 1.85609L195.168 0.070113ZM172.582 12.4949C174.145 12.4949 175.687 12.1283 177.083 11.4247L176.183 9.63877C175.066 10.2016 173.833 10.4949 172.582 10.4949V12.4949ZM1 20.4949C1 16.0766 4.58173 12.4949 9.00001 12.4949V10.4949C3.47717 10.4949 -1 14.972 -1 20.4949H1ZM-0.109124 571.45C0.443209 571.389 1 571.809 1 572.444H-1C-1 573.078 -0.442795 573.499 0.110011 573.438L-0.109124 571.45ZM0.41969 571.536C0.254845 571.46 0.0720471 571.43 -0.109124 571.45L0.110011 573.438C-0.071016 573.458 -0.253668 573.428 -0.41838 573.352L0.41969 571.536ZM26.8844 582.939C25.7269 582.939 24.5831 582.688 23.5321 582.203L22.694 584.018C24.0078 584.625 25.4375 584.939 26.8844 584.939V582.939ZM249.933 582.083C248.817 582.646 247.583 582.939 246.333 582.939V584.939C247.896 584.939 249.438 584.572 250.834 583.869L249.933 582.083ZM273.419 571.444C271.856 571.444 270.314 571.81 268.918 572.514L269.818 574.3C270.935 573.737 272.168 573.444 273.419 573.444V571.444ZM445 563.444C445 567.862 441.419 571.444 437 571.444V573.444C442.523 573.444 447 568.967 447 563.444H445ZM440.353 9.98975C443.186 11.2973 445 14.133 445 17.2535H447C447 13.3529 444.732 9.8083 441.191 8.17381L440.353 9.98975ZM199.668 -1C198.105 -1 196.564 -0.633489 195.168 0.070113L196.068 1.85609C197.184 1.29321 198.418 1 199.668 1V-1ZM419.117 1C420.274 1 421.418 1.25119 422.469 1.73624L423.307 -0.0797021C421.993 -0.68601 420.564 -1 419.117 -1V1Z" fill="#1BA72B" fill-opacity="1" mask="url(#path-1-inside-1_324_29)"/>
                                <defs>
                                <filter id="filter0_i_324_29" x="0" y="0" width="446" height="583.939" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="10"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_324_29"/>
                                </filter>
                                {/* <linearGradient id="paint0_linear_324_29" x1="223" y1="0" x2="223" y2="583.939" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#A4A4A4"/>
                                <stop offset="1" stop-color="#484848"/>
                                </linearGradient> */}
                                </defs>
                            </svg>
                            <h1 className='text-white text-2xl mt-8'>Tags</h1>
                            <div className="w-[60%] h-[60%] flex flex-col gap-5">
                                {
                                    blog.tags.map((tag, index) => (
                                        <span key={index} className='text-white text-lg bg-[#636161] p-2 rounded-lg flex justify-center items-center cursor-pointer z-[3] hover:bg-[#333]'>#{tag}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDisplay