import produtos from "../produtos.json"
import { Imagem, ProdutoContainer, MainContainer, BotaoComprar, Titulo, DivContainer } from "./style"

const Home = ({ carrinho, setCarrinho, valorMax, valorMin, buscaNome, ordenacao }) => {
    const adicionarProdutoNoCarrinho = (produto) => {
        const produtoExisteNoCarrinho = carrinho.find((item) => item.name === produto.name);

        if (produtoExisteNoCarrinho) {
            const novoCarrinho = carrinho.map((item) => produtoExisteNoCarrinho.name === item.name
                ? { ...item, quantidade: item.quantidade + 1 } : item)
            setCarrinho(novoCarrinho)
        } else {
            setCarrinho([...carrinho, { ...produto, quantidade: 1 }])
        }
    }
    return (
        <MainContainer>
            <Titulo>Produtos:</Titulo>
            {produtos.sort((produto1, produto2) => {
                return ordenacao === "crescente" ?
                    produto1.name.localeCompare(produto2.name) : produto2.name.localeCompare(produto1.name)
            }).filter((produto) => {
                return valorMin ? produto.price >= valorMin : produto
            }).filter((produto) => {
                return valorMax ? produto.price <= valorMax : produto
            }).filter((produto) => {
                return produto.name.toLowerCase().includes(buscaNome.toLowerCase())
            })
                .map((produto) => {
                    return (
                        <DivContainer>
                            <div>
                            <ProdutoContainer key={produto.id}>
                                <Imagem src={produto.image} alt={produto.name} />
                                <p>Nome: {produto.name}</p>
                                <p>Preço: R${produto.price}</p>
                                <BotaoComprar onClick={() => adicionarProdutoNoCarrinho(produto)}>Comprar Produto</BotaoComprar>
                            </ProdutoContainer>
                            </div>
                        </DivContainer>
                    )
                })}
        </MainContainer>
    )
}
export default Home;