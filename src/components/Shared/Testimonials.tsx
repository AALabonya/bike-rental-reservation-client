// export default function Testimonials() {
//   return (
//     <section className="bg-gray-50 px-10">
//       <div className=" px-14 py-12 sm:px-16 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
//         <div className=" items-end justify-between sm:flex sm:pe-6 lg:pe-8">
//           <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//             Read trusted reviews from our customers
//           </h2>

//           <div className="mt-8 flex gap-4 lg:mt-0">
//             <button
//               aria-label="Previous slide"

//               className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="size-5 rtl:rotate-180"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15.75 19.5L8.25 12l7.5-7.5"
//                 />
//               </svg>
//             </button>

//             <button
//               aria-label="Next slide"

//               className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
//             >
//               <svg
//                 className="size-5 rtl:rotate-180"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M9 5l7 7-7 7"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div className="-mx-6 mt-8  lg:mx-0">
//           <div
//             id=""
//             className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             <div className=" shadow-2xl">
//               <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
//                 <div>
//                   <div className="flex gap-0.5 text-green-500">
//                     <svg
//                       className="size-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>

//                     <svg
//                       className="size-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>

//                     <svg
//                       className="size-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>

//                     <svg
//                       className="size-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>

//                     <svg
//                       className="size-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   </div>

//                   <div className="mt-4">
//                     <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
//                       Stayin' Alive
//                     </p>

//                     <p className="mt-4 leading-relaxed text-gray-700">
//                       No, Rose, they are not breathing. And they have no arms or
//                       legs … Where are they? You know what? If we come across
//                       somebody with no arms or legs, do we bother resuscitating
//                       them? I mean, what quality of life do we have there?
//                     </p>
//                   </div>
//                 </div>

//                 <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
//                   &mdash; Michael Scott
//                 </footer>
//               </blockquote>
//             </div>

//             <div className="shadow-2xl">
//               <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
//                 <div>
//                   <div className="flex gap-0.5 text-green-500">
//                     <svg
//                       className="size-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>

//                     <svg
//                       className="size-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>

//                     <svg
//                       className="size-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>

//                     <svg
//                       className="size-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>

//                     <svg
//                       className="size-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   </div>

//                   <div className="mt-4">
//                     <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
//                       Stayin' Alive
//                     </p>

//                     <p className="mt-4 leading-relaxed text-gray-700">
//                       No, Rose, they are not breathing. And they have no arms or
//                       legs … Where are they? You know what? If we come across
//                       somebody with no arms or legs, do we bother resuscitating
//                       them? I mean, what quality of life do we have there?
//                     </p>
//                   </div>
//                 </div>

//                 <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
//                   &mdash; Michael Scott
//                 </footer>
//               </blockquote>
//             </div>

//             <div className="  shadow-2xl">
//               <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
//                 <div>
//                   <div className="flex gap-0.5 text-green-500">
//                     <svg
//                       className="size-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>

//                     <svg
//                       className="size-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>

//                     <svg
//                       className="size-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>

//                     <svg
//                       className="size-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>

//                     <svg
//                       className="size-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   </div>

//                   <div className="mt-4">
//                     <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
//                       Stayin' Alive
//                     </p>

//                     <p className="mt-4 leading-relaxed text-gray-700">
//                       No, Rose, they are not breathing. And they have no arms or
//                       legs … Where are they? You know what? If we come across
//                       somebody with no arms or legs, do we bother resuscitating
//                       them? I mean, what quality of life do we have there?
//                     </p>
//                   </div>
//                 </div>

//                 <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
//                   &mdash; Michael Scott
//                 </footer>
//               </blockquote>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }here any way to use state? to manage next and previous button?

// import React, { useState } from "react";

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       title: "Stayin' Alive",
//       quote:
//         "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
//       author: "Michael Scott",
//     },
//     {
//       id: 2,
//       title: "The Office",
//       quote:
//         "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
//       author: "Michael Scott",
//     },
//     {
//       id: 3,
//       title: "World's Best Boss",
//       quote:
//         "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
//       author: "Michael Scott",
//     },
//     {
//       id: 4,
//       title: "That's what she said",
//       quote:
//         "Make friends first, make sales second, make love third. In no particular order.",
//       author: "Michael Scott",
//     },
//     {
//       id: 5,
//       title: "Conference Room",
//       quote:
//         "I'm an early bird and I'm a night owl. So I'm wise and I have worms.",
//       author: "Michael Scott",
//     },
//     {
//       id: 6,
//       title: "Dunder Mifflin",
//       quote: "I'm not superstitious, but I am a little stitious.",
//       author: "Michael Scott",
//     },
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length
//     );
//   };

//   return (
//     <section className="bg-gray-50 px-10">
//       <div className="px-14 py-12 sm:px-16 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
//         <div className="items-end justify-between sm:flex sm:pe-6 lg:pe-8">
//           <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//             Read trusted reviews from our customers
//           </h2>

//   <div className="mt-8 flex gap-4 lg:mt-0">
//     <button
//       aria-label="Previous slide"
//       onClick={handlePrev}
//       className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="1.5"
//         stroke="currentColor"
//         className="size-5 rtl:rotate-180"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M15.75 19.5L8.25 12l7.5-7.5"
//         />
//       </svg>
//     </button>

//     <button
//       aria-label="Next slide"
//       onClick={handleNext}
//       className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
//     >
//       <svg
//         className="size-5 rtl:rotate-180"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M9 5l7 7-7 7"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//         />
//       </svg>
//     </button>
//   </div>
// </div>

//         <div className="-mx-6 mt-8 lg:mx-0">
//           <div
//             id=""
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             {testimonials
//               .slice(currentIndex, currentIndex + 3)
//               .map((testimonial) => (
//                 <div key={testimonial.id} className="shadow-2xl">
//                   <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
//                     <div>
//                       <div className="flex gap-0.5 text-green-500">
//                         {/* Star ratings */}
//                         {[...Array(5)].map((_, i) => (
//                           <svg
//                             key={i}
//                             className="size-5"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                           </svg>
//                         ))}
//                       </div>

//                       <div className="mt-4">
//                         <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
//                           {testimonial.title}
//                         </p>

//                         <p className="mt-4 leading-relaxed text-gray-700">
//                           {testimonial.quote}
//                         </p>
//                       </div>
//                     </div>

//                     <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
//                       &mdash; {testimonial.author}
//                     </footer>
//                   </blockquote>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      title: "Stayin' Alive",
      quote:
        "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "Michael Scott",
    },
    {
      id: 2,
      title: "The Office",
      quote:
        "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
      author: "Michael Scott",
    },
    {
      id: 3,
      title: "World's Best Boss",
      quote:
        "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
      author: "Michael Scott",
    },
    {
      id: 4,
      title: "That's what she said",
      quote:
        "Make friends first, make sales second, make love third. In no particular order.",
      author: "Michael Scott",
    },
    {
      id: 5,
      title: "Conference Room",
      quote:
        "I'm an early bird and I'm a night owl. So I'm wise and I have worms.",
      author: "Michael Scott",
    },
    {
      id: 6,
      title: "Dunder Mifflin",
      quote: "I'm not superstitious, but I am a little stitious.",
      author: "Michael Scott",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-gray-50 dark:bg-black px-11">
      <div className="px-16 py-12 sm:px-20 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              onClick={handlePrev}
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-red-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              onClick={handleNext}
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-red-500 hover:text-white"
            >
              <svg
                className="size-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className=" mt-8 lg:mx-0 px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials
              .slice(currentIndex, currentIndex + 3)
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col justify-between bg-white p-6 sm:p-4 lg:p-6 shadow-2xl"
                  style={{ minHeight: "350px" }} // You can adjust this value
                >
                  <blockquote className="flex-grow">
                    <div className="flex gap-0.5 text-yellow-500">
                      {/* Star ratings */}
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-red-500 sm:text-3xl">
                        {testimonial.title}
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-700">
                        {testimonial.quote}
                      </p>
                    </div>
                  </blockquote>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; {testimonial.author}
                  </footer>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
