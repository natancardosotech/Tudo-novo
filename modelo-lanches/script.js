// ============ BRASA & PÃO - IGUAL TUDO NOVO QUE DEU CERTO ============
const produtos = [
{id:1,nome:"X-Burguer",preco:25,categoria:"Lanches",descricao:"Pão brioche, carne 160g, queijo prato",imagem:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",estoque:20,destaque:false},
{id:2,nome:"X-Salada",preco:28,categoria:"Lanches",descricao:"Pão brioche, carne 160g, queijo, alface, tomate, maionese",imagem:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",estoque:20,destaque:false},
{id:3,nome:"X-Bacon",preco:32,categoria:"Lanches",descricao:"Pão brioche, carne 160g, queijo, bacon crocante, barbecue",imagem:"https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500",estoque:20,destaque:true},
{id:4,nome:"X-Tudo",preco:35,categoria:"Lanches",descricao:"Pão brioche, carne 160g, queijo, bacon, ovo, alface, tomate",imagem:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500",estoque:20,destaque:true},
{id:5,nome:"X-Frango",preco:27,categoria:"Lanches",descricao:"Pão brioche, frango empanado, queijo, alface, maionese",imagem:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500",estoque:20,destaque:false},
{id:6,nome:"Duplo Smash",preco:38,categoria:"Lanches",descricao:"Pão brioche, 2 carnes smash 90g, queijo duplo, molho da casa",imagem:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500",estoque:20,destaque:true},
{id:7,nome:"Veggie",preco:26,categoria:"Lanches",descricao:"Pão brioche, hambúrguer de grão-de-bico, queijo, alface, tomate",imagem:"https://images.unsplash.com/photo-1520072959219-cb7a04ab1d7e?w=500",estoque:20,destaque:false},
{id:8,nome:"X-Calabresa",preco:30,categoria:"Lanches",descricao:"Pão brioche, carne 160g, queijo, calabresa, cebola caramelizada",imagem:"https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500",estoque:20,destaque:false},
{id:9,nome:"X-Onion",preco:31,categoria:"Lanches",descricao:"Pão brioche, carne 160g, queijo, onion rings, barbecue",imagem:"https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500",estoque:20,destaque:false},
{id:10,nome:"X-Cheddar",preco:33,categoria:"Lanches",descricao:"Pão brioche, carne 160g, cheddar cremoso, bacon",imagem:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500",estoque:20,destaque:false},
{id:11,nome:"Smash Simples",preco:22,categoria:"Lanches",descricao:"Pão brioche, carne smash 90g, queijo, picles, molho da casa",imagem:"https://images.unsplash.com/photo-1610440042657-612c34d95e4f?w=500",estoque:20,destaque:false},
{id:12,nome:"Smash Duplo Bacon",preco:36,categoria:"Lanches",descricao:"Pão brioche, 2 carnes smash, queijo duplo, bacon",imagem:"https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=500",estoque:20,destaque:false},
{id:13,nome:"Hot Dog da Casa",preco:18,categoria:"Lanches",descricao:"Pão, salsicha, purê, vinagrete, batata palha, queijo",imagem:"https://images.unsplash.com/photo-1612392062631-94dd858cba88?w=500",estoque:20,destaque:false},
{id:14,nome:"Beirute",preco:29,categoria:"Lanches",descricao:"Pão sírio, carne, queijo, alface, tomate, maionese",imagem:"https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500",estoque:20,destaque:false},
{id:15,nome:"Coca-Cola Lata 350ml",preco:6,categoria:"Bebidas",descricao:"Gelada",imagem:"https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500",estoque:30,destaque:false},
{id:16,nome:"Guaraná Lata 350ml",preco:6,categoria:"Bebidas",descricao:"Gelada",imagem:"https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=500",estoque:30,destaque:false},
{id:17,nome:"Suco de Laranja 500ml",preco:9,categoria:"Bebidas",descricao:"Natural, sem açúcar",imagem:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500",estoque:20,destaque:false},
{id:18,nome:"Suco de Maracujá 500ml",preco:9,categoria:"Bebidas",descricao:"Natural, sem açúcar",imagem:"https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=500",estoque:20,destaque:false},
{id:19,nome:"Cerveja Heineken 330ml",preco:10,categoria:"Bebidas",descricao:"Gelada",imagem:"https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500",estoque:20,destaque:false},
{id:20,nome:"Água Mineral 500ml",preco:4,categoria:"Bebidas",descricao:"Com ou sem gás",imagem:"https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500",estoque:30,destaque:false},
{id:21,nome:"Milkshake Chocolate",preco:15,categoria:"Bebidas",descricao:"Sorvete, leite, calda de chocolate",imagem:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",estoque:15,destaque:false},
{id:22,nome:"Milkshake Morango",preco:15,categoria:"Bebidas",descricao:"Sorvete, leite, morango natural",imagem:"https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500",estoque:15,destaque:false},
{id:23,nome:"Suco de Abacaxi",preco:9,categoria:"Bebidas",descricao:"Natural, sem açúcar",imagem:"https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=500",estoque:20,destaque:false},
{id:24,nome:"Refrigerante 1L",preco:10,categoria:"Bebidas",descricao:"Coca, Guaraná ou Fanta - Gelado",imagem:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500",estoque:20,destaque:false},
{id:25,nome:"Cerveja Budweiser 330ml",preco:10,categoria:"Bebidas",descricao:"Gelada",imagem:"https://images.unsplash.com/photo-1600788886242-5c96aabe3757?w=500",estoque:20,destaque:false},
{id:26,nome:"Batata Frita Simples",preco:18,categoria:"Porções",descricao:"Batata crocante, sal, molho da casa",imagem:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500",estoque:20,destaque:false},
{id:27,nome:"Batata com Cheddar e Bacon",preco:28,categoria:"Porções",descricao:"Batata, cheddar cremoso, bacon crocante",imagem:"https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500",estoque:20,destaque:false},
{id:28,nome:"Onion Rings",preco:22,categoria:"Porções",descricao:"Anéis de cebola empanados, molho barbecue",imagem:"https://images.unsplash.com/photo-1639024471283-03518883512d?w=500",estoque:20,destaque:false},
{id:29,nome:"Nuggets 10 un.",preco:20,categoria:"Porções",descricao:"Frango empanado, molho da casa",imagem:"https://images.unsplash.com/photo-1562967914-608f82629710?w=500",estoque:20,destaque:false},
{id:30,nome:"Brownie com Sorvete",preco:18,categoria:"Sobremesas",descricao:"Brownie de chocolate, sorvete de baunilha",imagem:"https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=500",estoque:15,destaque:false},
{id:31,nome:"Pudim de Leite",preco:12,categoria:"Sobremesas",descricao:"Pudim cremoso, calda de caramelo",imagem:"https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500",estoque:15,destaque:false},
{id:32,nome:"Petit Gateau",preco:20,categoria:"Sobremesas",descricao:"Bolo de chocolate com centro mole, sorvete",imagem:"https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500",estoque:15,destaque:false},
{id:33,nome:"Açaí 300ml",preco:16,categoria:"Sobremesas",descricao:"Açaí, granola, banana, leite ninho",imagem:"https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=500",estoque:15,destaque:false},
];

let carrinho = JSON.parse(localStorage.getItem('carrinho_brasa')||'[]');
let favoritos = JSON.parse(localStorage.getItem('fav_brasa')||'[]');
let categoriaAtual = 'Todos';
let buscaAtual = '';
const PIX = 'brasaepao@email.com';
const WHATS = '5511XXXXXXXXX';

// ===== FAVORITOS =====
function isFavorito(id){ return favoritos.includes(id); }
function salvarFavoritos(){ localStorage.setItem('fav_brasa', JSON.stringify(favoritos)); }
function favoritarProduto(id){
  if(isFavorito(id)) favoritos = favoritos.filter(f=>f!==id); else favoritos.push(id);
  salvarFavoritos(); renderizarProdutos(); renderizarFavoritos();
}
function renderizarFavoritos(){
  const car = document.getElementById('carrossel-favoritos');
  if(!car) return;
  const lista = produtos.filter(p=>favoritos.includes(p.id));
  car.innerHTML = lista.map(criarCard).join('');
  if(lista.length) criarCarrossel(car);
  atualizarContadores();
}

// ===== CARRINHO / TOTAL / PIX / PEDIDO - IGUAL ANTES =====
function salvarCarrinho(){ localStorage.setItem('carrinho_brasa', JSON.stringify(carrinho)); renderCarrinho(); }
function adicionarAoCarrinho(id){
  const p=produtos.find(x=>x.id===id); if(!p || p.estoque<=0) return alert('Produto esgotado!');
  const item=carrinho.find(x=>x.id===id);
  if(item) item.qtd++; else carrinho.push({id,qtd:1});
  salvarCarrinho();
}
function alterarQtd(id,delta){
  const item=carrinho.find(x=>x.id===id); if(!item) return;
  item.qtd+=delta; if(item.qtd<=0) carrinho=carrinho.filter(x=>x.id!==id);
  salvarCarrinho();
}
function renderCarrinho(){
  const el=document.getElementById('itensCarrinho'); if(!el) return;
  if(carrinho.length===0){ el.innerHTML='<p>Carrinho vazio.</p>'; }
  else el.innerHTML=carrinho.map(item=>{
    const p=produtos.find(x=>x.id===item.id);
    return `<div class="item-carrinho"><img src="${p.imagem}"><div style="flex:1"><b>${p.nome}</b><br>R$ ${p.preco.toFixed(2).replace('.',',')}</div><div class="qtd"><button onclick="alterarQtd(${p.id},-1)">-</button> ${item.qtd} <button onclick="alterarQtd(${p.id},1)">+</button></div></div>`;
  }).join('');
  calcularTotal();
}
function calcularTotal(){
  let sub=0; carrinho.forEach(item=>{ const p=produtos.find(x=>x.id===item.id); sub+=p.preco*item.qtd; });
  const tipo=document.querySelector('input[name="tipo"]:checked')?.value || 'Entrega';
  const entrega = tipo==='Entrega' ? 5 : 0;
  const s=document.getElementById('subtotal'); if(!s) return {sub,entrega,total:sub+entrega,tipo};
  s.innerText='R$ '+sub.toFixed(2).replace('.',',');
  document.getElementById('valorEntrega').innerText='R$ '+entrega.toFixed(2).replace('.',',');
  document.getElementById('totalFinal').innerText='R$ '+(sub+entrega).toFixed(2).replace('.',',');
  return {sub,entrega,total:sub+entrega,tipo};
}
function copiarPIX(){ navigator.clipboard.writeText(PIX); alert('Chave PIX copiada: '+PIX); }
function finalizarPedido(){
  if(carrinho.length===0) return alert('Carrinho vazio!');
  const nome=document.getElementById('nomeCliente').value;
  const end=document.getElementById('enderecoCliente').value;
  const obs=document.getElementById('obsCliente').value;
  if(!nome) return alert('Preencha seu nome!');
  const {sub,entrega,total,tipo}=calcularTotal();
  let msg=`*NOVO PEDIDO - BRASA & PÃO*%0A%0A*Cliente:* ${nome}%0A*Tipo:* ${tipo}%0A`;
  if(tipo==='Entrega') msg+=`*Endereço:* ${end}%0A`;
  if(obs) msg+=`*Obs:* ${obs}%0A`;
  msg+=`%0A*ITENS:*%0A`;
  carrinho.forEach(item=>{ const p=produtos.find(x=>x.id===item.id); msg+=`- ${item.qtd}x ${p.nome} - R$ ${(p.preco*item.qtd).toFixed(2)}%0A`; });
  msg+=`%0A*Subtotal:* R$ ${sub.toFixed(2)}%0A*Entrega:* R$ ${entrega.toFixed(2)}%0A*Total:* R$ ${total.toFixed(2)}%0A*Pagamento:* PIX - ${PIX}`;
  carrinho.forEach(item=>{ const p=produtos.find(x=>x.id===item.id); p.estoque-=item.qtd; });
  carrinho=[]; localStorage.setItem('carrinho_brasa','[]');
  renderizarProdutos(); renderCarrinho();
  window.open(`https://wa.me/${WHATS}?text=${msg}`,'_blank');
}
function abrirCarrinho(){ renderCarrinho(); document.getElementById('carrinhoModal').style.display='flex'; }
function fecharCarrinho(){ document.getElementById('carrinhoModal').style.display='none'; }
function abrirFavoritos(){
  const el=document.getElementById('itensFavoritos');
  const lista=produtos.filter(p=>favoritos.includes(p.id));
  el.innerHTML = lista.length? lista.map(p=>`<div class="item-carrinho"><img src="${p.imagem}"><div style="flex:1"><b>${p.nome}</b><br>R$ ${p.preco.toFixed(2).replace('.',',')}</div><button onclick="adicionarAoCarrinho(${p.id})">Adicionar</button></div>`).join('') : '<p>Nenhum favorito ainda.</p>';
  document.getElementById('favModal').style.display='flex';
}
function fecharFavoritos(){ document.getElementById('favModal').style.display='none'; }
function atualizarContadores(){
  const f=document.getElementById('countFav'); if(f) f.innerText=favoritos.length;
  const c=document.getElementById('countCart'); if(c) c.innerText=carrinho.reduce((s,i)=>s+i.qtd,0);
}

// ===== BUSCA E FILTRO - IGUAL TUDO NOVO =====
function buscarProduto(){
  buscaAtual=document.getElementById('busca').value;
  renderizarProdutos();
}
function filtrarPorCategoria(cat,btn){
  categoriaAtual=cat;
  document.querySelectorAll('.categorias button').forEach(b=>b.classList.remove('ativo'));
  if(btn) btn.classList.add('ativo');
  // Mostra / esconde os blocos igual Tudo Novo
  document.querySelectorAll('.carrossel-wrap').forEach(w=>{
    if(w.dataset.cat==='Favoritos') return;
    w.style.display = (cat==='Todos' || w.dataset.cat===cat) ? 'block' : 'none';
    const titulo = w.previousElementSibling;
    if(titulo && titulo.tagName==='H2') titulo.style.display = w.style.display;
  });
  const blocoFav = document.getElementById('bloco-favoritos');
  if(blocoFav) blocoFav.style.display = (cat==='Todos' || cat==='Favoritos') ? 'block' : 'none';
  if(cat!=='Todos'){
    const el=document.querySelector(`.carrossel-wrap[data-cat="${cat}"]`);
    if(el) el.scrollIntoView({behavior:'smooth'});
  }
}

// ===== CARDS =====
function criarCard(p){
  const fav = isFavorito(p.id);
  const esg = p.estoque<=0;
  return `<div class="card ${esg?'esgotado':''}">
    ${esg?'<span class="badge-esgotado">ESGOTADO</span>':''}
    <button class="btn-fav ${fav?'ativo':''}" onclick="favoritarProduto(${p.id})">${fav?'❤️':'🤍'}</button>
    <img src="${p.imagem}">
    <h3>${p.nome}</h3>
    <p class="desc">${p.descricao}</p>
    <p class="preco">R$ ${p.preco.toFixed(2).replace('.',',')}</p>
    <div class="botoes">
      <button class="btn-add" onclick="adicionarAoCarrinho(${p.id})">${esg?'Esgotado':'Adicionar +'}</button>
    </div>
    <small>${esg?'Esgotado':'Estoque: '+p.estoque}</small>
  </div>`;
}
function renderizarProdutos(){
  const mapa = { 'Destaques':'carrossel-destaques', 'Lanches':'carrossel-lanches', 'Bebidas':'carrossel-bebidas', 'Porções':'carrossel-porcoes', 'Sobremesas':'carrossel-sobremesas' };
  for(const cat in mapa){
    const el=document.getElementById(mapa[cat]); if(!el) continue;
    let lista = cat==='Destaques' ? produtos.filter(p=>p.destaque) : produtos.filter(p=>p.categoria===cat);
    lista = lista.filter(p=>p.nome.toLowerCase().includes(buscaAtual.toLowerCase()));
    el.innerHTML = lista.map(criarCard).join('');
  }
  document.querySelectorAll('.carrossel').forEach(car=>{
    if(car.id!=='carrossel-favoritos') criarCarrossel(car);
  });
  renderizarFavoritos();
}

// ============ CARROSSEL - CÓPIA EXATA DO TUDO NOVO QUE DEU CERTO ============
function criarCarrossel(car){
  const track = car;
  const cards = car.querySelectorAll('.card');
  const wrap = car.parentNode;
  const next = wrap.querySelector('.seta-direita');
  const prev = wrap.querySelector('.seta-esquerda');
  if(!next || !prev || cards.length===0) return;
  let index = 0;
  function getVisible(){
    if(window.innerWidth<=768) return 1;
    if(window.innerWidth<=992) return 2;
    return 5;
  }
  function atualizar(){
    const visivel = getVisible();
    const maxIndex = Math.max(0, cards.length - visivel);
    if(index<0) index=0;
    if(index>maxIndex) index=maxIndex;
    const cardWidth = cards[0].offsetWidth + 14;
    track.style.transform = `translateX(${-index * cardWidth}px)`;
    if(cards.length <= visivel){
      prev.style.display='none';
      next.style.display='none';
    } else {
      prev.style.display = index===0 ? 'none' : 'flex';
      next.style.display = index>=maxIndex ? 'none' : 'flex';
    }
  }
  next.onclick = ()=>{ index++; atualizar(); };
  prev.onclick = ()=>{ index--; atualizar(); };
  window.addEventListener('resize', atualizar);
  atualizar();
}

// ===== ADMIN - SENHA CRIPTOGRAFADA =====
async function gerarHash(senha){
  const encoder=new TextEncoder();
  const data=encoder.encode(senha);
  const hashBuffer=await crypto.subtle.digest('SHA-256', data);
  const hashArray=Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b=>b.toString(16).padStart(2,'0')).join('');
}
async function loginAdmin(){
  const senha=prompt('Senha do admin:'); if(!senha) return;
  const hashDigitado=await gerarHash(senha);
  const hashCorreto='03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4';
  if(hashDigitado!==hashCorreto) return alert('Senha errada!');
  document.getElementById('adminArea').style.display='block';
  loginAdminRefresh();
}
function alterarEstoque(id,delta){
  const p=produtos.find(x=>x.id===id); p.estoque=Math.max(0,p.estoque+delta); renderizarProdutos(); loginAdminRefresh();
}
function loginAdminRefresh(){
  const area=document.getElementById('adminArea');
  area.innerHTML='<h3>Controle de Estoque</h3>'+produtos.map(p=>`<div style="display:flex;justify-content:space-between;gap:10px;padding:5px 0;border-bottom:1px solid #333">${p.nome} - Estoque: ${p.estoque} <span><button onclick="alterarEstoque(${p.id},1)">+</button> <button onclick="alterarEstoque(${p.id},-1)">-</button></span></div>`).join('');
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderizarProdutos();
  atualizarContadores();
  renderCarrinho();
});