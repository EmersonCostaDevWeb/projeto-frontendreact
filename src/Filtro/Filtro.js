import { InputContainer } from "./style"

const Filtro = ({ ordenacao, setOrdenacao, setValorMin, setValorMax, setBuscaNome }) => {
    return (
        <div>
            <p>Filtro</p>
            <select value={ordenacao} onChange={(e) => setOrdenacao(e.target.value)}>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
            </select>
            <InputContainer>
                <input
                    placeholder="Valor mínimo:"
                    type="number"
                    onChange={(e) => setValorMin(e.target.value)}
                />
                <input
                    placeholder="Valor máximo:"
                    type="number"
                    onChange={(e) => setValorMax(e.target.value)}
                />
                <input
                    placeholder="Busca por nome:"
                    type="text"
                    onChange={(event) => setBuscaNome(event.target.value)}
                />
            </InputContainer>
        </div>
    )
}
export default Filtro;