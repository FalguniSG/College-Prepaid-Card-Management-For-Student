import Link from 'next/link'
const SidebarAcc = () => {
    return (
      <div className="fixed bg-gray-800 text-white w-1/5 h-full p-6 text-xl">      
        <img 
          src="/img/logo.png"
          className='h-[20%]  pl-7 pt-3'/>
        {/* <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor"  
            className="w-15 h-10 mb-8 ml-[20%]">
          <path stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
        </svg> */}
         
        <ul className="space-y-4 p-7">
          <li><Link className="hover:text-gray-300" href="/accounts">Recharge</Link></li>
          <li><Link className="hover:text-gray-300" href="/accounts/payment">Make Payment</Link></li>
          {/* <li><Link className="hover:text-gray-300" href="/accounts/action">Action</Link></li> */}
          <li><Link className="hover:text-gray-300" href="/accounts/transaction">Transaction List</Link></li>
          <li><Link className="hover:text-gray-300" href="/accounts/profile">My Account</Link></li>
          <li><Link className="hover:text-gray-300" href="/logout">Logout</Link></li>
          
        </ul>
      </div>
    );
  };
  
  export default SidebarAcc;
  