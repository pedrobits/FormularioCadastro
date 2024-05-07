import { useState } from "react";
import { IMaskInput } from "react-imask";

const Form = () => {
	const [phoneNumber, setPhoneNumber] = useState('');

	return (
		<>
			<div className="flex justify-center items-center flex-col gap-10">
				<div className="flex items-center justify-center w-[95%] h-28 bg-[#5c4b8a] shadow-xl mt-10 px-5 text-center rounded-2xl">
					<span className="text-white"><span className="font-bold">Ganhe uma consultoria, totalmente gratuita</span> e tenha a oportunidade de diminuir suas dividas.</span>
				</div>

				<form className="flex flex-col justify-center gap-5 items-center h-full w-[95%] bg-slate-50 p-8 rounded-2xl shadow-xl mb-10">
					<input
						type="text"
						placeholder="Primeiro Nome"
						className="w-[100%] border border-slate-600 rounded-lg py-3 px-5 outline-none  bg-transparent"
					/>
					<input
						type="text"
						placeholder="Sobrenome"
						className="w-[100%] border border-slate-600 rounded-lg py-3 px-5 outline-none  bg-transparent"
					/>

					<input
						type="email"
						placeholder="Email"
						className="w-[100%] border border-slate-600 rounded-lg py-3 px-5 outline-none  bg-transparent"
					/>

					<IMaskInput
						mask="(00) 00000-0000"
						placeholder="Celular"
						className="w-[100%] border border-slate-600 rounded-lg py-3 px-5 outline-none  bg-transparent"
						value={phoneNumber}
					/>

					<button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-[#5c4b8a] rounded-lg h-[60px] w-full">
						Ganhe a consultoria
					</button>

					<span className="text-sm font-light text-center text-slate-600">Ao clicar neste botão saiba que seus dados estarão totalmente seguros.</span>
				</form>
			</div>
		</>
	)
}

export default Form;