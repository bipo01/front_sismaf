import { useContext } from "react";
import { PostProvider } from "../DataProvider";

function Tabela1() {
	const { planilha } = useContext(PostProvider);
	return (
		<table className="tabela">
			<thead>
				<tr>
					<th colSpan="2" className="titulo-verde">
						RELAÇÃO DE VTRS NO PATRIMÔNIO (PRÓPRIAS, EM CESSÃO DE USO, EM COMODATO E ACAUTELADAS)
						<br />
						POR TIPO DE VEÍCULO
					</th>
				</tr>
			</thead>
			<tbody>
				{[
					["Automóvel", planilha.qtdAutomovel],
					["Sedan", planilha.qtdSedan],
					["Utilitário", planilha.qtdUtilitario],
					["Hatch", planilha.qtdHatch],
					["VAN", planilha.qtdVAN],
					["Station Wagon", planilha.qtdStationWagon],
					["SUV", planilha.qtdSUV],
					["Caminhonete", planilha.qtdCaminhonete],
					["Camioneta", planilha.qtdCamioneta],
					["Caminhão", planilha.qtdCaminhao],
					["Ônibus", planilha.qtdOnibus],
					["Micro-ônibus", planilha.qtdMicroOnibus],
					["Motor-casa", planilha.qtdMotorCasa],
					["Reboque", planilha.qtdReboque],
				].map(([tipo, qtd]) => (
					<tr key={tipo}>
						<td>{tipo}</td>
						<td>{qtd}</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
					<td>TOTAL DE CARROS</td>
					<td>{planilha.qtdCarrosNaoLocados}</td>
				</tr>
				<tr>
					<td>TOTAL DE MOTOCICLETAS</td>
					<td>{planilha.qtdMotocicleta}</td>
				</tr>
				<tr>
					<td>TOTAL NO PATRIMÔNIO</td>
					<td>{planilha.totalPatrimonio}</td>
				</tr>
			</tfoot>
		</table>
	);
}

export default Tabela1;
