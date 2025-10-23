import { useContext, useState } from "react";
import { PostProvider } from "./DataProvider";

function FiltroSection() {
	const { caminho, mes, ano, unidade_gestora, formato, dispatch } = useContext(PostProvider);
	const [caminhoInp, setCaminhoInp] = useState("");
	const [mesInp, setMesInp] = useState("");
	const [anoInp, setAnoInp] = useState("");
	const [unidadeGestoraInp, setUnidadeGestoraInp] = useState("TODAS");
	const [formatoInp, setFormatoInp] = useState("ods");

	const handleGerarRelatorio = async () => {
		if (!caminho || !mes || !ano) {
			alert("Defina um caminho");
			return;
		}

		const body = new URLSearchParams();
		body.append("caminho", caminho);
		body.append("mes", mes);
		body.append("ano", ano);
		body.append("unidade_gestora", unidade_gestora);
		body.append("formato", formato);

		const res = await fetch(`http://localhost:3333/`, { method: "POST", body });
		const data = await res.json();

		if (data) {
			dispatch({ type: "dados/planilha", payload: data });
		}
	};

	return (
		<section className="input-section">
			<div className="input-group caminho-group">
				<label htmlFor="caminho_relatorios">📁 Caminho dos relatórios</label>
				<div className="caminho-wrapper">
					<input
						value={caminhoInp}
						onChange={(e) => {
							setCaminhoInp(e.target.value);
							dispatch({ type: "dados/caminho", payload: e.target.value });
						}}
						type="text"
						id="caminho_relatorios"
						placeholder="Ex: /Users/js_bispo1/Desktop/Relatorios"
					/>

					{/* 🔽 Novo select de formato */}
					<select
						value={formatoInp}
						id="formato"
						onChange={(e) => {
							setFormatoInp(e.target.value);
							dispatch({ type: "dados/formato", payload: e.target.value });
						}}>
						<option value="ods">ODS</option>
						<option value="xlsx">XLSX</option>
						<option value="xls">XLS</option>
						<option value="csv">CSV</option>
					</select>
				</div>
			</div>

			<div className="input-row">
				<div className="input-group">
					<label htmlFor="mes">📅 Mês</label>
					<select
						value={mesInp}
						onChange={(e) => {
							setMesInp(e.target.value);
							dispatch({ type: "dados/mes", payload: e.target.value });
						}}
						id="mes">
						<option value="">Selecione</option>
						{["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"].map((m) => (
							<option key={m} value={m}>
								{m}
							</option>
						))}
					</select>
				</div>

				<div className="input-group">
					<label htmlFor="ano">🗓️ Ano</label>
					<input
						value={anoInp}
						onChange={(e) => {
							setAnoInp(e.target.value);
							dispatch({ type: "dados/ano", payload: e.target.value });
						}}
						type="number"
						id="ano"
						placeholder="2025"
					/>
				</div>

				<div className="input-group">
					<label htmlFor="unidade_gestora">🏢 Unidade Gestora</label>
					<select
						value={unidadeGestoraInp}
						onChange={(e) => {
							setUnidadeGestoraInp(e.target.value);
							dispatch({ type: "dados/unidade_gestora", payload: e.target.value });
						}}
						id="unidade_gestora">
						<option value="TODAS">TODAS</option>
						<option value="BOMBEIROS MILITAR">BOMBEIROS MILITAR</option>
						<option value="POLICIA JUDICIARIA CIVIL">POLICIA JUDICIARIA CIVIL</option>
						<option value="POLICIA MILITAR">POLICIA MILITAR</option>
						<option value="POLITEC">POLITEC</option>
						<option value="SECRETARIA DE ESTADO DE JUSTIÇA - SEJUS">SECRETARIA DE ESTADO DE JUSTIÇA - SEJUS</option>
						<option value="SECRETARIA DE JUSTIÇA E DIREITOS HUMANOS">SECRETARIA DE JUSTIÇA E DIREITOS HUMANOS</option>
						<option value="SECREATARIA DE SEGURANÇA PUBLICA">SECREATARIA DE SEGURANÇA PUBLICA</option>
						<option value="SISTEMA PENITENCIÁRIO">SISTEMA PENITENCIÁRIO</option>
						<option value="SISTEMA SOCIOEDUCATIVO">SISTEMA SOCIOEDUCATIVO</option>
					</select>
				</div>
				<button className="btn-relatorio" onClick={handleGerarRelatorio}>
					Gerar Relatório
				</button>
			</div>

			{caminho && mes && ano && formato && (
				<p className="arquivo-path">
					📄 {caminho}/{mes}
					{ano}.{formato}
				</p>
			)}
		</section>
	);
}

export default FiltroSection;
