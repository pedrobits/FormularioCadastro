import Form from "./components/Form"

export default function App() {
  return (
    <div className="flex flex-grow w-full h-full bg-orange-500 items-center justify-center flex-col md:flex-row md:py-20 md:px-24">
      <section className="flex flex-col justify-center items-center mb-10 mt-20 gap-8 w-[100%]">
        <h1 className="text-2xl font-bold text-white text-center w-[80%] md:w-[70%] md:text-4xl">Entre em contato com a gente, que iremos te ajudar a sanar seus problemas</h1>
        <span className="text-base font-light text-white text-center md:text-xl w-[70%]">Temos muitas opções para te ajudar, além de profissionais qualificados e anos de expêriencia já ajudando mais de 13.000 clientes.</span>
      </section>

      <Form />
    </div>
  )
}