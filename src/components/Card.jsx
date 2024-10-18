const Card = ({ children, bg = 'bg-gray-100' }) => {
    return (
        <div className={`${bg} p-6 rounded-lg shadow-md lg:w-3/4 lg:space-y-8`}>{children}</div>
    )
}

export default Card