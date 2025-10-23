import RelatorioSection from "./RelatorioSection";
import HeaderSection from "./HeaderSection";
import FiltroSection from "./FiltroSection";

import Tabela1 from "./tables/Tabela1";
import Tabela2 from "./tables/Tabela2";
import Tabela3 from "./tables/Tabela3";
import { useContext } from "react";
import { PostProvider } from "./DataProvider";

function Main() {
	const { planilha } = useContext(PostProvider);

	return (
		<main>
			<HeaderSection />
			<FiltroSection />
			{planilha ? (
				<RelatorioSection>
					<Tabela1 />
					<Tabela2 />
					<Tabela3 />
				</RelatorioSection>
			) : (
				""
			)}
		</main>
	);
}

export default Main;
