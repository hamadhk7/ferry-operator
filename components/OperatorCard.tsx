// // File: components/OperatorCard.tsx
// import Image from 'next/image';
// import Link from 'next/link';
// import { Operator } from '@/types';

// interface OperatorCardProps {
//   operator: Operator;
// }

// export default function OperatorCard({ operator }: OperatorCardProps) {
//   return (
//     <div className="border rounded-md overflow-hidden mb-6">
//       {/* <div className="p-4 bg-white-800 flex items-start">
//         <Image 
//           src={operator.logo} 
//           alt={operator.name} 
//           width={240} 
//           height={80} 
//           className="object-contain"
//         />
//         <div className="flex justify-between items-start">
//           <h2 className="text-xl font-bold">{operator.name}</h2>
//           <div></div>
//           <div className="flex items-center">
//             <div className="flex">
//               {[...Array(5)].map((_, i) => (
//                 <svg 
//                   key={i} 
//                   className={`w-5 h-5 ${i < Math.floor(operator.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
//                   fill="currentColor" 
//                   viewBox="0 0 20 20" 
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                 </svg>
//               ))}
//               {operator.rating % 1 >= 0.5 && (
//                 <svg 
//                   className="w-5 h-5 text-yellow-400" 
//                   fill="currentColor" 
//                   viewBox="0 0 20 20" 
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                 </svg>
//               )}
//             </div>
//             <span className="ml-2 text-sm text-gray-600">by {operator.customersCount} customers</span>
//           </div>
//         </div>
//       </div> */}
//       <div className="p-4 bg-gray-50 flex flex-col">
//   {/* Operator Name on the First Line */}
//   <div className="flex justify-between items-center">
//     <Image 
//       src={operator.logo} 
//       alt={operator.name} 
//       width={240} 
//       height={80} 
//       className="object-contain"
//     />
//     <h2 className="text-xl font-bold">{operator.name}</h2>
//   </div>

//   {/* Rating and Customer Count on the Next Line (Right Aligned) */}
//   <div className="flex justify-end items-center mt-2">
//     <div className="flex items-center mr-4">
//       {/* Rating */}
//       {[...Array(5)].map((_, i) => (
//         <svg
//           key={i}
//           className={`w-5 h-5 ${i < Math.floor(operator.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//         </svg>
//       ))}
//       {operator.rating % 1 >= 0.5 && (
//         <svg
//           className="w-5 h-5 text-yellow-400"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//         </svg>
//       )}
//     </div>
//     {/* Customer Count */}
//     <span className="ml-2 text-sm text-gray-600">by {operator.customersCount} customers</span>
//   </div>
// </div>

      
//       <div className="p-4">
//         {/* <div className="flex justify-between items-start">
//           <h2 className="text-xl font-bold">{operator.name}</h2>
//           <div className="flex items-center">
//             <div className="flex">
//               {[...Array(5)].map((_, i) => (
//                 <svg 
//                   key={i} 
//                   className={`w-5 h-5 ${i < Math.floor(operator.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
//                   fill="currentColor" 
//                   viewBox="0 0 20 20" 
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                 </svg>
//               ))}
//               {operator.rating % 1 >= 0.5 && (
//                 <svg 
//                   className="w-5 h-5 text-yellow-400" 
//                   fill="currentColor" 
//                   viewBox="0 0 20 20" 
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                 </svg>
//               )}
//             </div>
//             <span className="ml-2 text-sm text-gray-600">by {operator.customersCount} customers</span>
//           </div>
//         </div> */}
        
//         <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <div className="mb-4">
//               <p className="text-sm text-gray-600 mb-1"><span className="font-bold">Operates in</span></p>
//               <div className="flex">
//                 {operator.flags.map((flag) => (
//                   <div key={flag} className="flex items-center mr-2">
//                     <img 
//                       src={`/icons/${flag}-flag.png`} 
//                       alt={flag} 
//                       className="w-5 h-5 mr-1"
//                     />
//                     <span className="capitalize">{flag}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="mb-4">
//               <p className="text-sm text-gray-600 mb-1"><span className="font-bold">Vessels number: </span>{operator.vesselsNumber}</p>
//               <p className="text-sm text-gray-600"><span className="font-bold">Ferry types:</span>{operator.ferryTypes.normal} normal
//                 {operator.ferryTypes.highSpeed > 0 && ` and ${operator.ferryTypes.highSpeed} high-speed`} ferries
//               </p>
//             </div>
            
//             <div>
//               <p className="text-sm text-gray-600 mb-1"><span className="font-bold">Popular vessels:</span></p>
//               <div className="text-cyan-500">
//                 {operator.popularVessels.map((vessel, index) => (
//                   <span key={vessel.name}>
//                     <Link href={vessel.link}>
//                       {vessel.name}
//                     </Link>
//                     {index < operator.popularVessels.length - 1 && ', '}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           <div>
//             {operator.description.map((paragraph, index) => (
//               <p key={index} className={`text-sm ${index > 0 ? 'mt-2' : ''}`}>
//                 {paragraph}
//               </p>
//             ))}
//           </div>
//         </div>
        
//         <div className="mt-4 text-right">
//           <Link 
//             href={`#${operator.id}`} 
//             className="text-cyan-500 flex items-center justify-end"
//           >
//             <span>More about {operator.name}</span>
//             <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from 'next/image';
import Link from 'next/link';
import { Operator } from '@/types';

interface OperatorCardProps {
  operator: Operator;
}

export default function OperatorCard({ operator }: OperatorCardProps) {
  return (
    <div className="border rounded-md overflow-hidden mb-6">
      <div className="p-4 bg-gray-50 flex flex-col">
        {/* Operator Name and Logo on the First Line */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex justify-center md:justify-start">
            <Image
              src={operator.logo}
              alt={operator.name}
              width={240}
              height={80}
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-bold text-center md:text-left mt-2 md:mt-0">{operator.name}</h2>
        </div>

        {/* Rating and Customer Count on the Next Line (Right Aligned) */}
        <div className="flex flex-col md:flex-row justify-end items-center mt-2 md:mt-0">
          <div className="flex items-center mb-2 md:mb-0">
            {/* Rating */}
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < Math.floor(operator.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            {operator.rating % 1 >= 0.5 && (
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            )}
          </div>
          {/* Customer Count */}
          <span className="text-sm text-gray-600">by {operator.customersCount} customers</span>
        </div>
      </div>

      <div className="p-4">
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1"><span className="font-bold">Operates in</span></p>
              <div className="flex">
                {operator.flags.map((flag) => (
                  <div key={flag} className="flex items-center mr-2">
                    <img
                      src={`/icons/${flag}-flag.png`}
                      alt={flag}
                      className="w-5 h-5 mr-1"
                    />
                    <span className="capitalize">{flag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1"><span className="font-bold">Vessels number: </span>{operator.vesselsNumber}</p>
              <p className="text-sm text-gray-600"><span className="font-bold">Ferry types:</span>{operator.ferryTypes.normal} normal
                {operator.ferryTypes.highSpeed > 0 && ` and ${operator.ferryTypes.highSpeed} high-speed`} ferries
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-1"><span className="font-bold">Popular vessels:</span></p>
              <div className="text-cyan-500">
                {operator.popularVessels.map((vessel, index) => (
                  <span key={vessel.name}>
                    <Link href={vessel.link}>
                      {vessel.name}
                    </Link>
                    {index < operator.popularVessels.length - 1 && ', '}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            {operator.description.map((paragraph, index) => (
              <p key={index} className={`text-sm ${index > 0 ? 'mt-2' : ''}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-4 text-right">
          <Link
            href={`#${operator.id}`}
            className="text-cyan-500 flex items-center justify-end"
          >
            <span>More about {operator.name}</span>
            <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
