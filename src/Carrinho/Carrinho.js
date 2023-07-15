import { Botao,CarrinhoContainer,TotalConta } from "./style"
const Carrinho = ({ carrinho, setCarrinho }) => {
    const removerProdutoDoCarrinho = (produto) => {
        const novoCarrinho = carrinho.map((item) =>
            item.name === produto.name ?
                { ...item, quantidade: item.quantidade - 1 }
                :
                item).filter((item) => item.quantidade > 0)
        setCarrinho(novoCarrinho)
    }
    const total = carrinho.reduce((acumulador, produto) => {
        return acumulador + produto.price * produto.quantidade
    }, 0).toFixed(2)
    return (
        <CarrinhoContainer>
            <p>Carrinho: </p>
            {carrinho.length>0?
            carrinho.map((item) => {
                return (
                    <div key={item.id}>
                        <p>Nome: {item.name}</p>
                        <p>Quantidade: {item.quantidade}</p>
                        <Botao onClick={() => removerProdutoDoCarrinho(item)}>Remover Produto</Botao>
                    </div>
                )
            }):
            <CarrinhoContainer>Carrinho Vazio</CarrinhoContainer>}
            <TotalConta>Total: R${total}</TotalConta>
        </CarrinhoContainer>
    )
}

export default Carrinho;