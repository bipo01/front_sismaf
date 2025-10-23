import { useContext } from "react";
import { PostProvider } from "../DataProvider";

function Tabela3() {
	const { planilha } = useContext(PostProvider);
	return (
		<table className="tabela">
			<thead>
				<tr>
					<th colSpan="2" className="titulo-verde">
						RELAÇÃO DE VTRS POR
						<br />
						CARACTERIZAÇÃO
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>CARACTERIZADOS</td>
					<td>{planilha.qtdCaracterizados}</td>
				</tr>
				<tr>
					<td>DESCARACTERIZADOS</td>
					<td>{planilha.qtdDescaracterizados}</td>
				</tr>
				<tr className="total">
					<td>% CARACTERIZADOS</td>
					<td>{((planilha.qtdCaracterizados / planilha.totalCaracEDescarac) * 100).toFixed(2)}%</td>
				</tr>
				<tr className="total">
					<td>% DESCARACTERIZADOS</td>
					<td>{((planilha.qtdDescaracterizados / planilha.totalCaracEDescarac) * 100).toFixed(2)}%</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Tabela3;
