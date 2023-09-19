// import logo from '....//reactjs-icon.png';

function Header() {
    return <header className="container flex justify-between bg-[#21222A] py-4">
        <div className='flex items-center gap-2'>
            <img src='./reactjs-icon.png' alt='Logo' />
            <h1 className='text-[#61DAFB] font-Inter-Bold text-[23px]'>ReactFacts</h1>
        </div>
        <h2 className='font-Inter-SemiBold text-[#DEEBF8]'>React Course - Project 1</h2>
    </header>
}

export default Header;