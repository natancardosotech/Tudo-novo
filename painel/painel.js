const SENHA_VENDEDORA = "1234";

function abrirLoginVendedora() {
  document.getElementById("login-vendedora").style.display = "block";
  document.getElementById("fundo-vendedora").style.display = "block";
}
function fecharLoginVendedora() {
  document.getElementById("login-vendedora").style.display = "none";
  document.getElementById("fundo-vendedora").style.display = "none";
}
function entrarPainel() {
  const senha = document.getElementById("senha-vendedora").value;
  if (senha === SENHA_VENDEDORA) {
    document.getElementById("erro-senha").style.display = "none";
    fecharLoginVendedora();
    document.getElementById("painel-vendedora").style.display = "block";
    document.getElementById("fundo-vendedora").style.display = "block";
    montarPainel();
  } else {
    document.getElementById("erro-senha").style.display = "block";
  }
}
function fecharPainelVendedora() {
  document.getElementById("painel-vendedora").style.display = "none";
  document.getElementById("fundo-vendedora").style.display = "none";
  document.getElementById("senha-vendedora").value = "";
}
function getEstoquePainel(id) {
  let estoques = {};
  try { estoques = JSON.parse(localStorage.getItem('estoquesTudoNovo') || '{}'); } catch(e){}
  if (estoques[id] === undefined) estoques[id] = 10;
  return estoques[id];
}
function salvarEstoquePainel(id, novo) {
  let estoques = {};
  try { estoques = JSON.parse(localStorage.getItem('estoquesTudoNovo') || '{}'); } catch(e){}
  estoques[id] = novo;
  localStorage.setItem('estoquesTudoNovo', JSON.stringify(estoques));
  if (typeof PRODUTOS !== 'undefined') {
    const esgotados = PRODUTOS.filter(p => {
      const q = p.id === id ? novo : getEstoquePainel(p.id);
      return q === 0;
    }).map(p => p.id);
    localStorage.setItem('esgotadosTudoNovo', JSON.stringify(esgotados));
  }
}
function montarPainel() {
  const lista = document.getElementById("lista-painel");
  if (!lista) return;
  const produtos = (typeof PRODUTOS !== "undefined" && PRODUTOS.length) ? PRODUTOS : [];
  lista.innerHTML = "";
  produtos.forEach(p => {
    const qtd = getEstoquePainel(p.id);
    const status = qtd > 0 ? '✅ Disponível' : '⛔ Esgotado';
    const div = document.createElement("div");
    div.className = "item-painel";
    div.innerHTML = `
      <b>${p.nome}</b>
      <div class="controle-estoque">
        <button onclick="alterarEstoquePainel(${p.id}, -1)">-</button>
        <span class="num-estoque" id="num-${p.id}">${qtd}</span>
        <button onclick="alterarEstoquePainel(${p.id}, 1)">+</button>
      </div>
      <span class="status-painel" id="status-${p.id}">${status}</span>
    `;
    lista.appendChild(div);
  });
}
function alterarEstoquePainel(id, delta) {
  let novo = getEstoquePainel(id) + delta;
  if (novo < 0) novo = 0;
  if (novo > 999) novo = 999;
  salvarEstoquePainel(id, novo);
  const elNum = document.getElementById(`num-${id}`);
  const elStatus = document.getElementById(`status-${id}`);
  if (elNum) elNum.textContent = novo;
  if (elStatus) elStatus.textContent = novo > 0 ? '✅ Disponível' : '⛔ Esgotado';
  if (typeof aplicarEstoques === 'function') aplicarEstoques();
  if (typeof renderizarProdutos === 'function') renderizarProdutos();
  if (typeof renderizarFavoritos === 'function') renderizarFavoritos();
}