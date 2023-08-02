import Link from 'next/link'
// import {RBUAPS} as logo from 'public/img';
const Sidebar = () => {
    return (
      <div className="fixed bg-gray-800 text-white w-1/5 h-full  text-xl">      
        <img 
          src="/img/logo.png"
          className='h-[20%]  pl-7 pt-3'/>
         
        <ul className="space-y-4 p-7">
          <li><Link className="hover:text-gray-300 " href="/registrar">User</Link></li>
          <li><Link className="hover:text-gray-300" href="/registrar/createadmin">Create Supplier </Link></li>
          <li><Link className="hover:text-gray-300" href="/registrar/create">Create Student </Link></li>
          {/* <li><Link className="hover:text-gray-300" href="/registrar/card">Issue Card</Link></li> */}
          <li><Link className="hover:text-gray-300" href="/registrar/profile">My Profile</Link></li>
          <li><Link className="hover:text-gray-300" href="/logout">Logout</Link></li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  