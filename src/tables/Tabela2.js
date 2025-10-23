import { useContext } from "react";
import { PostProvider } from "../DataProvider";

function Tabela2() {
	const { planilha, mes, ano } = useContext(PostProvider);
	return (
		<table className="tabela">
			<thead>
				<tr>
					<th colSpan="2" className="titulo-verde">
						RELAÇÃO DE VTRS POR
						<br />
						TIPO DE PROPRIEDADE
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Próprios</td>
					<td>{planilha.qtdProprios}</td>
				</tr>
				<tr>
					<td>Acaute­lados</td>
					<td>{planilha.qtdAcautelados}</td>
				</tr>
				<tr>
					<td>Cessão de Uso</td>
					<td>{planilha.qtdCessaoDeUso}</td>
				</tr>
				<tr>
					<td>Comodato</td>
					<td>{planilha.qtdComodato}</td>
				</tr>
				<tr>
					<td>Locados</td>
					<td>{planilha.qtdLocados}</td>
				</tr>
				<tr className="total">
					<td>TOTAL CARROS</td>
					<td>{planilha.qtdPorPropriedade}</td>
				</tr>
				<tr>
					<td>MOTOCICLETAS</td>
					<td>{planilha.qtdMotocicletas}</td>
				</tr>
				<tr className="total">
					<td>
						TOTAL VTRS PJC ATÉ {mes.toUpperCase()} DE {ano.toUpperCase()}
					</td>
					<td>{planilha.qtdTotalPorPropriedade}</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Tabela2;
