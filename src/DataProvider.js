import { createContext, useReducer } from "react";

const PostProvider = createContext();
export { PostProvider };

const initialState = {
	caminho: null,
	mes: null,
	ano: null,
	unidade_gestora: "TODAS",
	planilha: null,
	formato: "ods",
};

function reducer(state, action) {
	switch (action.type) {
		case "dados/caminho":
			return { ...state, caminho: action.payload };
		case "dados/mes":
			return { ...state, mes: action.payload };
		case "dados/ano":
			return { ...state, ano: action.payload };
		case "dados/planilha":
			return { ...state, planilha: action.payload };
		case "dados/unidade_gestora":
			return { ...state, unidade_gestora: action.payload };
		case "dados/formato":
			return { ...state, formato: action.payload };

		default:
			break;
	}
}

function DataProvider({ children }) {
	const [{ caminho, mes, ano, unidade_gestora, planilha, formato }, dispatch] = useReducer(reducer, initialState);
	return <PostProvider.Provider value={{ caminho, mes, ano, unidade_gestora, planilha, formato, dispatch }}>{children}</PostProvider.Provider>;
}

export default DataProvider;
