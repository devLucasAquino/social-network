
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function App() {

  return (
    <div className="h-screen bg-default flex justify-between">
      <aside className="w-1/2"></aside>
      <section className="flex justify-center items-center w-1/2 flex-col">
        <form className="bg-slate-200 py-5 px-10 rounded-t-lg space-y-5 w-1/2">
          <header>
            <h1 className="text-center font-semibold text-3xl text-zinc-700 mb-2">Login</h1>
          </header>
          <div className="space-y-1">
            <h3 className="text-lg font-medium text-zinc-600">E-mail</h3>
            <input className="w-full font-medium border-b-2 border-blue-default bg-transparent focus:outline-none px-4" type="text" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-medium text-zinc-600">Senha</h3>
            <input className="w-full font-medium border-b-2 border-blue-default bg-transparent focus:outline-none px-4" type="text" />
          </div>
          <div className="flex text-zinc-400 text-sm font-medium justify-around">
            <button><span className="hover:text-zinc-500">crie uma conta</span></button>
            <button><span className="hover:text-zinc-500">esqueceu sua senha?</span></button>
          </div>
          <div className="flex flex-col justify-between items-center">
            <button className="bg-default-btn font-medium text-slate-200 w-full py-2 rounded-md">LOGIN</button>
          </div>
        </form>
        <footer className="bg-slate-300 flex items-center justify-around w-1/2 rounded-b-lg p-2">
          <button><FcGoogle className="size-6"/></button>
          <button><FaFacebook className="size-6 text-blue-800"/></button>
        </footer>
      </section>
    </div>
  )
}

export default App
