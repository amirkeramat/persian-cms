
const ErrorBox = ({msg}) => {
  return (
    <div className='bg-red-500 h-[50px] p-4 flex justify-center items-center shadow shadow-gray-800 text-white font-bold text-xl'>
        <p>{msg}</p>
    </div>
  )
}

export default ErrorBox