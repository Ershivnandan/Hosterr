
const Footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:justify-between">
      <div>
        <ul className="list-none flex gap-6 font-lato text-gray-400">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
        </ul>
      </div>
        <div className="flex gap-2">
            <img className="inline-block h-14 w-14 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <div>
                <p className="font-playFair font-thin">Have Any Questions?</p>
                <a className="font-lato font-medium" href="#">Talk to specialist</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
