
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function App() {

  return (
    <div className="h-screen bg-default flex justify-between">
      <aside className="w-1/2"></aside>
      <section className="flex justify-center items-center w-1/2 flex-col">
        <form className="bg-slate-200 py-5 px-10 rounded-t-lg space-y-5 w-1/2">
          <div>
            <h1 className="text-center font-semibold text-3xl text-zinc-700 mb-2">Login</h1>
            <div className="h-[1px] w-full bg-zinc-400 mb-3"></div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-zinc-600">E-mail</h3>
            <input className="w-full" type="text" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-zinc-600">Senha</h3>
            <input className="w-full" type="text" />
          </div>
          <div className="flex justify-between items-center">
            <button className="bg-default-btn font-medium text-slate-200 w-full py-2 rounded-md">LOGIN</button>
          </div>
        </form>
        <div className="bg-slate-300 flex items-center w-1/2 rounded-b-lg p-2">
          <FcGoogle className="size-6"/>
          <FaFacebook className="size-6 text-blue-800"/>
        </div>
      </section>
    </div>
  )
}

export default App
