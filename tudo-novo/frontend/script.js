// ============ TUDO NOVO - COMPLETO 91 ITENS - SÓ SITE ============
const PRODUTOS = [
  { id: 1, nome: "Vulcão de Nutella", preco: 28.90, categoria: "Destaques", desc: "Bolo quentinho com Nutella", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600", disponivel: true },
  { id: 2, nome: "Copo da Felicidade", preco: 24.90, categoria: "Destaques", desc: "Camadas de brigadeiro e morango", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600", disponivel: true },
  { id: 3, nome: "Bolo de Pote", preco: 18.90, categoria: "Destaques", desc: "Chocolate com brigadeiro", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600", disponivel: true },
  { id: 4, nome: "Brownie com Sorvete", preco: 26.90, categoria: "Destaques", desc: "Brownie + sorvete cremoso", img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600", disponivel: true },
  { id: 5, nome: "Pavê de Chocolate", preco: 19.90, categoria: "Destaques", desc: "Pavê cremoso de chocolate", img: "https://images.unsplash.com/photo-1542124948-dc391252a940?w=600", disponivel: true },
  { id: 6, nome: "Torta de Limão", preco: 21.90, categoria: "Destaques", desc: "Azedinha na medida", img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600", disponivel: true },
  { id: 7, nome: "Pudim de Leite", preco: 15.90, categoria: "Destaques", desc: "Pudim clássico", img: "https://images.unsplash.com/photo-1488477307682-4944851de6a5?w=600", disponivel: true },
  { id: 8, nome: "Combo Felicidade", preco: 49.90, categoria: "Destaques", desc: "2 Copos + 2 Brownies", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600", disponivel: true },
  { id: 9, nome: "Copo Ninho com Nutella", preco: 25.90, categoria: "Copo", desc: "Ninho cremoso + Nutella", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600", disponivel: true },
  { id: 10, nome: "Copo Morango", preco: 24.90, categoria: "Copo", desc: "Morango fresco + brigadeiro", img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600", disponivel: true },
  { id: 11, nome: "Copo Oreo", preco: 26.90, categoria: "Copo", desc: "Oreo triturado + creme", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600", disponivel: true },
  { id: 12, nome: "Copo KitKat", preco: 27.90, categoria: "Copo", desc: "KitKat + brigadeiro", img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600", disponivel: true },
  { id: 13, nome: "Copo Prestígio", preco: 24.90, categoria: "Copo", desc: "Coco + chocolate", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600", disponivel: true },
  { id: 14, nome: "Copo Ferrero", preco: 29.90, categoria: "Copo", desc: "Ferrero + Nutella", img: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600", disponivel: true },
  { id: 15, nome: "Bolo de Chocolate", preco: 32.90, categoria: "Bolos", desc: "Bolo fofinho de chocolate", img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600", disponivel: true },
  { id: 16, nome: "Bolo de Cenoura", preco: 29.90, categoria: "Bolos", desc: "Cenoura + cobertura", img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600", disponivel: true },
  { id: 17, nome: "Torta de Maracujá", preco: 23.90, categoria: "Bolos", desc: "Maracujá cremoso", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600", disponivel: true },
  { id: 18, nome: "Cheesecake", preco: 27.90, categoria: "Bolos", desc: "Cheesecake de frutas vermelhas", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600", disponivel: true },
  { id: 19, nome: "Bolo Red Velvet", preco: 34.90, categoria: "Bolos", desc: "Red Velvet com cream cheese", img: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600", disponivel: true },
  { id: 20, nome: "Bolo de Ninho", preco: 33.90, categoria: "Bolos", desc: "Bolo de Ninho cremoso", img: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=600", disponivel: true },
  { id: 21, nome: "Milkshake Ovomaltine", preco: 22.90, categoria: "Milkshake", desc: "Ovomaltine crocante", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600", disponivel: true },
  { id: 22, nome: "Milkshake Nutella", preco: 23.90, categoria: "Milkshake", desc: "Nutella + sorvete", img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600", disponivel: true },
  { id: 23, nome: "Milkshake Morango", preco: 21.90, categoria: "Milkshake", desc: "Morango natural", img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600", disponivel: true },
  { id: 24, nome: "Milkshake Oreo", preco: 24.90, categoria: "Milkshake", desc: "Oreo + baunilha", img: "https://images.unsplash.com/photo-1567807022-bc6bbd5b1e3a?w=600", disponivel: true },
  { id: 25, nome: "Milkshake Ninho", preco: 24.90, categoria: "Milkshake", desc: "Ninho + chocolate branco", img: "https://images.unsplash.com/photo-1553787499-6f9133860278?w=600", disponivel: true },
  { id: 26, nome: "Açaí 500ml", preco: 27.90, categoria: "Acai", desc: "Açaí + granola + banana", img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600", disponivel: true },
  { id: 27, nome: "Açaí 700ml", preco: 34.90, categoria: "Acai", desc: "Açaí grande + toppings", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600", disponivel: true },
  { id: 28, nome: "Açaí com Nutella", preco: 32.90, categoria: "Acai", desc: "Açaí + Nutella + morango", img: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=600", disponivel: true },
  { id: 29, nome: "Açaí com Leite Ninho", preco: 31.90, categoria: "Acai", desc: "Açaí + Ninho + morango", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600", disponivel: true },
  { id: 30, nome: "Açaí com Oreo", preco: 32.90, categoria: "Acai", desc: "Açaí + Oreo + brigadeiro", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600", disponivel: true },
  { id: 31, nome: "Coca-Cola 350ml", preco: 6.00, categoria: "Bebidas", desc: "Coca-Cola gelada 350ml", img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600", disponivel: true },
  { id: 32, nome: "Bolo de Pote Abacaxi", preco: 15.00, categoria: "Copo", desc: "Bolo de pote de abacaxi", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600", disponivel: true },
  { id: 33, nome: "Bolo de Pote Abacaxi com Coco", preco: 15.00, categoria: "Copo", desc: "Abacaxi com coco", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600", disponivel: true },
  { id: 34, nome: "Bolo de Pote Chocolate com Café", preco: 16.00, categoria: "Copo", desc: "Chocolate com café", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600", disponivel: true },
  { id: 35, nome: "Copo Chocolatudo com Morango", preco: 17.99, categoria: "Copo", desc: "Chocolatudo com morango", img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600", disponivel: true },
  { id: 36, nome: "Copo Olho de Sogra", preco: 15.00, categoria: "Copo", desc: "Olho de sogra", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600", disponivel: true },
  { id: 37, nome: "Bolo de Pote Doce de Leite com Abacaxi", preco: 15.00, categoria: "Copo", desc: "Doce de leite com abacaxi", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600", disponivel: true },
  { id: 38, nome: "Bolo de Pote Doce de Leite com Ameixa", preco: 15.00, categoria: "Copo", desc: "Doce de leite com ameixa", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600", disponivel: true },
  { id: 39, nome: "Bolo de Pote Maracujá com Brigadeiro", preco: 17.99, categoria: "Copo", desc: "Maracujá com brigadeiro", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600", disponivel: true },
  { id: 40, nome: "Bolo de Pote Ninho com Nutella", preco: 17.99, categoria: "Copo", desc: "Ninho com Nutella", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600", disponivel: true },
  { id: 41, nome: "Bolo de Pote Sensação com Nutella", preco: 17.99, categoria: "Copo", desc: "Sensação com Nutella", img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600", disponivel: true },
  { id: 42, nome: "Bolo de Pote Prestígio", preco: 15.00, categoria: "Copo", desc: "Prestígio - chocolate com coco", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600", disponivel: true },
  { id: 43, nome: "Bolo de Pote Ninho com Doce de Leite", preco: 16.00, categoria: "Copo", desc: "Ninho com doce de leite", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600", disponivel: true },
  { id: 44, nome: "Banoffe no Copo", preco: 15.00, categoria: "Copo", desc: "Banoffe no copo", img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600", disponivel: true },
  { id: 45, nome: "Bolo de Pote Oreo", preco: 15.99, categoria: "Copo", desc: "Bolo de pote Oreo", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600", disponivel: true },
  { id: 46, nome: "Bolo de Pote Doce de Leite", preco: 17.00, categoria: "Copo", desc: "Doce de leite", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600", disponivel: true },
  { id: 47, nome: "Bolo de Pote Chocolatudo", preco: 17.00, categoria: "Copo", desc: "Chocolatudo", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600", disponivel: true },
  { id: 48, nome: "Bolo de Pote Chocobranco com Nutella", preco: 18.99, categoria: "Copo", desc: "Chocobranco com Nutella", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600", disponivel: true },
  { id: 49, nome: "Bolo de Pote Maracujá com Doce de Leite", preco: 15.00, categoria: "Copo", desc: "Maracujá com doce de leite", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600", disponivel: true },
  { id: 50, nome: "Bolo de Pote Creme de Avelã", preco: 18.99, categoria: "Copo", desc: "Creme de avelã", img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600", disponivel: true },
  { id: 51, nome: "Bolo de Pote Oreo com Brigadeiro", preco: 15.99, categoria: "Copo", desc: "Oreo com brigadeiro", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600", disponivel: true },
  { id: 52, nome: "Bolo de Pote Brigadeiro com Nutella", preco: 16.99, categoria: "Copo", desc: "Brigadeiro com Nutella", img: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600", disponivel: true },
  { id: 53, nome: "Bolo de Pote Paçoca com Doce de Leite", preco: 15.00, categoria: "Copo", desc: "Paçoca com doce de leite", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600", disponivel: true },
  { id: 54, nome: "Bolo de Pote Doce de Leite com Coco", preco: 15.00, categoria: "Copo", desc: "Doce de leite com coco", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600", disponivel: true },
  { id: 55, nome: "Bolo de Pote Chocobranco", preco: 16.00, categoria: "Copo", desc: "Chocobranco", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600", disponivel: true },
  { id: 56, nome: "Bolo de Pote Choconinho com Creme de Avelã", preco: 17.99, categoria: "Copo", desc: "Choconinho com creme de avelã", img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600", disponivel: true },
  { id: 57, nome: "Bolo Pamonha", preco: 40.00, categoria: "Bolos", desc: "Bolo pamonha", img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600", disponivel: true },
  { id: 58, nome: "Caseirinho Chocolate G", preco: 50.00, categoria: "Bolos", desc: "Caseirinho chocolate G", img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600", disponivel: true },
  { id: 59, nome: "Caseirinho de Chocolate M", preco: 40.00, categoria: "Bolos", desc: "Caseirinho chocolate M", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600", disponivel: true },
  { id: 60, nome: "Caseirinho de Ninho", preco: 40.00, categoria: "Bolos", desc: "Caseirinho de Ninho", img: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=600", disponivel: true },
  { id: 61, nome: "Fubá Cremoso", preco: 35.00, categoria: "Bolos", desc: "Fubá cremoso", img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600", disponivel: true },
  { id: 62, nome: "Mini Vulcão Cenoura", preco: 30.00, categoria: "Bolos", desc: "Mini vulcão cenoura", img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600", disponivel: true },
  { id: 63, nome: "Mini Vulcão Kinder", preco: 30.00, categoria: "Bolos", desc: "Mini vulcão Kinder", img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600", disponivel: true },
  { id: 64, nome: "Piscina Cenoura Coração", preco: 45.00, categoria: "Bolos", desc: "Piscina cenoura coração", img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600", disponivel: true },
  { id: 65, nome: "Piscina Coração Chocolate", preco: 50.00, categoria: "Bolos", desc: "Piscina coração chocolate", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600", disponivel: true },
  { id: 66, nome: "Vulcão Bebê Cenoura", preco: 10.00, categoria: "Bolos", desc: "Vulcão bebê cenoura", img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600", disponivel: true },
  { id: 67, nome: "Vulcão Bomba", preco: 75.00, categoria: "Bolos", desc: "Vulcão Bomba", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600", disponivel: true },
  { id: 68, nome: "Vulcão Cenoura P", preco: 38.00, categoria: "Bolos", desc: "Vulcão cenoura P", img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600", disponivel: true },
  { id: 69, nome: "Vulcão Chocobranco e Chocopreto", preco: 65.00, categoria: "Bolos", desc: "Chocobranco e chocopreto", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600", disponivel: true },
  { id: 70, nome: "Vulcão Chocolatudo", preco: 78.00, categoria: "Bolos", desc: "Vulcão chocolatudo", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600", disponivel: true },
  { id: 71, nome: "Vulcão Chocolatudo com Morangos", preco: 68.00, categoria: "Bolos", desc: "Chocolatudo com morangos", img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600", disponivel: true },
  { id: 72, nome: "Vulcão Chocolatudo G", preco: 90.00, categoria: "Bolos", desc: "Chocolatudo G", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600", disponivel: true },
  { id: 73, nome: "Vulcão Chocolatudo P", preco: 48.00, categoria: "Bolos", desc: "Chocolatudo P", img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600", disponivel: true },
  { id: 74, nome: "Vulcão Choconinho", preco: 55.00, categoria: "Bolos", desc: "Choconinho", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600", disponivel: true },
  { id: 75, nome: "Vulcão Dois Amores", preco: 65.00, categoria: "Bolos", desc: "Dois amores", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600", disponivel: true },
  { id: 76, nome: "Vulcão Gourmet Brigadeiro", preco: 65.00, categoria: "Bolos", desc: "Gourmet brigadeiro", img: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600", disponivel: true },
  { id: 77, nome: "Vulcão Gourmet Kinder Bueno", preco: 78.00, categoria: "Bolos", desc: "Gourmet Kinder bueno", img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600", disponivel: true },
  { id: 78, nome: "Vulcão Maracujá", preco: 65.00, categoria: "Bolos", desc: "Vulcão maracujá", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600", disponivel: true },
  { id: 79, nome: "Vulcão Maracujá P", preco: 40.00, categoria: "Bolos", desc: "Maracujá P", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600", disponivel: true },
  { id: 80, nome: "Vulcão Maravilha", preco: 78.00, categoria: "Bolos", desc: "Vulcão maravilha", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600", disponivel: true },
  { id: 81, nome: "Vulcão Ninho com Brigadeiro Trufado", preco: 78.00, categoria: "Bolos", desc: "Ninho com brigadeiro trufado", img: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=600", disponivel: true },
  { id: 82, nome: "Vulcão Perfeição G", preco: 90.00, categoria: "Bolos", desc: "Perfeição G", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600", disponivel: true },
  { id: 83, nome: "Vulcão P Kinder Bueno", preco: 45.00, categoria: "Bolos", desc: "P Kinder bueno", img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600", disponivel: true },
  { id: 84, nome: "Vulcão P Kit Kat", preco: 42.00, categoria: "Bolos", desc: "P Kit Kat", img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600", disponivel: true },
  { id: 85, nome: "Vulcão P Red Velvet", preco: 38.00, categoria: "Bolos", desc: "P Red velvet", img: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600", disponivel: true },
  { id: 86, nome: "Vulcão Prestígio G", preco: 90.00, categoria: "Bolos", desc: "Prestígio G", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600", disponivel: true },
  { id: 87, nome: "Vulcão Prestígio M", preco: 78.00, categoria: "Bolos", desc: "Prestígio M", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600", disponivel: true },
  { id: 88, nome: "Vulcão Prestígio P", preco: 48.00, categoria: "Bolos", desc: "Prestígio P", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600", disponivel: true },
  { id: 89, nome: "Mini Bolo Vulcão", preco: 25.00, categoria: "Bolos", desc: "Mini bolo vulcão", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600", disponivel: true },
  { id: 90, nome: "Bolo de Coco", preco: 40.00, categoria: "Bolos", desc: "Bolo de coco", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600", disponivel: true },
  { id: 91, nome: "Suco Morango com Leite Condensado", preco: 12.00, categoria: "Bebidas", desc: "Suco de morango com leite condensado", img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600", disponivel: true },
];
const WHATSAPP = "5513974078448";
const CHAVE_PIX = "44.606.808/0001-92";

// ESTOQUE
let estoques = JSON.parse(localStorage.getItem('estoquesTudoNovo') || '{}');
if (Object.keys(estoques).length === 0) {
  const antigosEsgotados = JSON.parse(localStorage.getItem('esgotadosTudoNovo') || '[]');
  PRODUTOS.forEach(p => { estoques[p.id] = antigosEsgotados.includes(p.id) ? 0 : 10; });
  localStorage.setItem('estoquesTudoNovo', JSON.stringify(estoques));
}
function getEstoque(id) { if (estoques[id] === undefined) estoques[id] = 10; return estoques[id]; }
function aplicarEstoques() { PRODUTOS.forEach(p => { p.estoque = getEstoque(p.id); p.disponivel = p.estoque > 0; }); }
function salvarEstoques() { localStorage.setItem('estoquesTudoNovo', JSON.stringify(estoques)); const listaEsgotados = PRODUTOS.filter(p => getEstoque(p.id) === 0).map(p => p.id); localStorage.setItem('esgotadosTudoNovo', JSON.stringify(listaEsgotados)); }
aplicarEstoques();

// FAVORITOS
let favoritos = JSON.parse(localStorage.getItem('favoritosTudoNovo') || '[]');
function isFavorito(id) { return favoritos.includes(id); }
function salvarFavoritos() { localStorage.setItem('favoritosTudoNovo', JSON.stringify(favoritos)); }
function toggleFavorito(id, ev) { if (ev) ev.stopPropagation(); if (isFavorito(id)) favoritos = favoritos.filter(f => f !== id); else favoritos.push(id); salvarFavoritos(); renderizarProdutos(); renderizarFavoritos(); }
function renderizarFavoritos() {
  const bloco = document.getElementById('bloco-favoritos'); const car = document.getElementById('carrossel-favoritos'); const vazio = document.getElementById('favoritos-vazio'); const contador = document.getElementById('contador-fav');
  if (contador) contador.textContent = favoritos.length; if (!bloco || !car) return;
  const lista = PRODUTOS.filter(p => favoritos.includes(p.id));
  if (lista.length === 0) { car.innerHTML = ''; if (vazio) vazio.style.display = 'block'; const botaoAtivo = document.querySelector('.categorias button.ativo')?.textContent || ''; bloco.style.display = botaoAtivo.includes('Favoritos') ? 'block' : 'none'; return; }
  if (vazio) vazio.style.display = 'none'; car.innerHTML = lista.map(criarCard).join(''); criarCarrossel(car);
  const botaoAtivo = document.querySelector('.categorias button.ativo')?.textContent || ''; if (botaoAtivo.includes('Todos') || botaoAtivo.includes('Favoritos')) bloco.style.display = 'block';
}

// CARRINHO
let carrinho = JSON.parse(localStorage.getItem('carrinhoTudoNovo') || '[]');
function salvarCarrinho() { localStorage.setItem('carrinhoTudoNovo', JSON.stringify(carrinho)); atualizarContador(); renderizarCarrinho(); }
function atualizarContador() { const el = document.getElementById('contador-carrinho'); if (el) el.textContent = carrinho.reduce((s, i) => s + i.qtd, 0); }
function adicionarCarrinho(id) { const p = PRODUTOS.find(x => x.id === id); if (!p) return; if (!p.disponivel) { alert('Esse produto está esgotado no momento 😢'); return; } const item = carrinho.find(x => x.id === id); if (item) item.qtd++; else carrinho.push({ id: p.id, nome: p.nome, preco: p.preco, img: p.img, qtd: 1 }); salvarCarrinho(); abrirCarrinho(); }
function mudarQtd(id, delta) { const item = carrinho.find(x => x.id === id); if (!item) return; item.qtd += delta; if (item.qtd <= 0) carrinho = carrinho.filter(x => x.id !== id); salvarCarrinho(); }
function removerItem(id) { carrinho = carrinho.filter(x => x.id !== id); salvarCarrinho(); }
function limparCarrinho() { carrinho = []; salvarCarrinho(); }
function abrirCarrinho() { document.getElementById('carrinho-lateral').classList.add('aberto'); document.getElementById('fundo-carrinho').classList.add('aberto'); }
function fecharCarrinho() { document.getElementById('carrinho-lateral').classList.remove('aberto'); document.getElementById('fundo-carrinho').classList.remove('aberto'); }
function renderizarCarrinho() {
  const box = document.getElementById('itens-carrinho'); if (!box) return;
  if (carrinho.length === 0) { box.innerHTML = '<p style="text-align:center;padding:20px;color:#999">Seu carrinho está vazio 😢</p>'; }
  else { box.innerHTML = carrinho.map(i => `<div class="item-carrinho"><img src="${i.img}" alt=""><div class="info"><b>${i.nome}</b><br>R$ ${(i.preco * i.qtd).toFixed(2).replace('.', ',')}</div><div class="qtd"><button onclick="mudarQtd(${i.id},-1)">-</button> ${i.qtd} <button onclick="mudarQtd(${i.id},1)">+</button></div><button onclick="removerItem(${i.id})" style="border:0;background:none;cursor:pointer">🗑️</button></div>`).join(''); }
  atualizarTotal();
}
function atualizarTotal() { const sub = carrinho.reduce((s, i) => s + i.preco * i.qtd, 0); const tipo = document.getElementById('tipo-entrega')?.value || 'entrega'; const entrega = tipo === 'entrega' ? 5 : 0; document.getElementById('subtotal').textContent = 'R$ ' + sub.toFixed(2).replace('.', ','); document.getElementById('valor-entrega').textContent = 'R$ ' + entrega.toFixed(2).replace('.', ','); document.getElementById('total').textContent = 'R$ ' + (sub + entrega).toFixed(2).replace('.', ','); }
function mostrarPix() { const pg = document.getElementById('pagamento').value; document.getElementById('area-pix').style.display = pg === 'Pix' ? 'block' : 'none'; document.getElementById('chave-pix').textContent = CHAVE_PIX; }

// ===== PIX COM HORÁRIO - 10H ÀS 18H =====
function copiarPix() {
  const agora = new Date();
  const hora = agora.getHours();
  const lojaAberta = hora >= 10 && hora < 18;
  if (!lojaAberta) {
    alert('⏰ Loja Fechada no momento.\n\nNosso horário de funcionamento é de segunda a domingo, das 10h às 18h.\n\nVocê pode fazer seu pedido a partir das 10h da manhã. Obrigado pela compreensão! 🍰');
    return;
  }
  navigator.clipboard.writeText(CHAVE_PIX).then(() => alert('Chave Pix copiada!'));
}

function finalizarPedido() {
  if (carrinho.length === 0) return alert('Carrinho vazio!');
  const nome = document.getElementById('nome-cliente').value || 'Cliente'; const endereco = document.getElementById('endereco').value || 'Retirada'; const obs = document.getElementById('obs').value || ''; const tipo = document.getElementById('tipo-entrega').value; const pag = document.getElementById('pagamento').value; const total = document.getElementById('total').textContent;
  let msg = `🍰 *NOVO PEDIDO - TUDO NOVO*%0A%0A👤 ${nome}%0A📍 ${tipo === 'entrega' ? 'Entrega: ' + endereco : 'Retirada no local'}%0A💳 Pagamento: ${pag}%0A%0A`;
  carrinho.forEach(i => { msg += `• ${i.qtd}x ${i.nome} - R$ ${(i.preco * i.qtd).toFixed(2).replace('.', ',')}%0A`; });
  msg += `%0A📝 Obs: ${obs}%0A%0A💰 *Total: ${total}*`;
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
}

// BUSCA E FILTRO
function buscar() { const termo = document.getElementById('busca').value.trim().toLowerCase(); if (!termo) { limparBusca(); return; } const res = PRODUTOS.filter(p => p.nome.toLowerCase().includes(termo) || p.desc.toLowerCase().includes(termo)); document.getElementById('resultado-busca').innerHTML = res.map(criarCardBusca).join('') || '<p>Nenhum doce encontrado 😢</p>'; document.getElementById('bloco-busca').style.display = 'block'; document.getElementById('bloco-busca').scrollIntoView({ behavior: 'smooth' }); }
function limparBusca() { document.getElementById('busca').value = ''; document.getElementById('resultado-busca').innerHTML = ''; document.getElementById('bloco-busca').style.display = 'none'; }
function filtrarCategoria(cat) {
  limparBusca(); document.querySelectorAll('.categorias button').forEach(b => b.classList.remove('ativo')); event.target.classList.add('ativo');
  const blocoFav = document.getElementById('bloco-favoritos');
  if (cat === 'Favoritos') { document.querySelectorAll('.carrossel-wrap').forEach(w => { const ehFav = w.dataset.cat === 'Favoritos'; w.style.display = ehFav ? 'block' : 'none'; const titulo = w.previousElementSibling; if (titulo && titulo.tagName === 'H2') titulo.style.display = w.style.display; }); if (blocoFav) blocoFav.style.display = 'block'; renderizarFavoritos(); if (blocoFav) blocoFav.scrollIntoView({ behavior: 'smooth' }); return; }
  if (blocoFav) blocoFav.style.display = (cat === 'Todos' && favoritos.length > 0) ? 'block' : 'none';
  document.querySelectorAll('.carrossel-wrap').forEach(w => { if (w.dataset.cat === 'Favoritos') return; w.style.display = (cat === 'Todos' || w.dataset.cat === cat) ? 'block' : 'none'; const titulo = w.previousElementSibling; if (titulo && titulo.tagName === 'H2') titulo.style.display = w.style.display; });
  if (cat !== 'Todos') { const el = document.querySelector(`.carrossel-wrap[data-cat="${cat}"]`); if (el) el.scrollIntoView({ behavior: 'smooth' }); }
}
function criarCard(p) { const fav = isFavorito(p.id); const esgotado = !p.disponivel; return `<div class="card ${esgotado ? 'esgotado' : ''}">${esgotado ? '<span class="badge-esgotado">ESGOTADO</span>' : ''}<button class="btn-fav ${fav ? 'ativo' : ''}" onclick="toggleFavorito(${p.id}, event)">${fav ? '❤️' : '🤍'}</button><img src="${p.img}" alt=""><h3>${p.nome}</h3><p class="desc">${p.desc}</p><p class="preco">R$ ${p.preco.toFixed(2).replace('.', ',')}</p><div class="botoes"><button class="btn-add" onclick="adicionarCarrinho(${p.id})">${esgotado ? 'Esgotado' : 'Adicionar'}</button><button class="btn-ver" onclick="verProduto(${p.id})">Ver</button></div></div>`; }
function criarCardBusca(p) { const fav = isFavorito(p.id); const esgotado = !p.disponivel; return `<div class="card ${esgotado ? 'esgotado' : ''}">${esgotado ? '<span class="badge-esgotado">ESGOTADO</span>' : ''}<button class="btn-fav ${fav ? 'ativo' : ''}" onclick="toggleFavorito(${p.id}, event)">${fav ? '❤️' : '🤍'}</button><img src="${p.img}" alt=""><h3>${p.nome}</h3><p class="desc">${p.desc}</p><p class="preco">R$ ${p.preco.toFixed(2).replace('.', ',')}</p><div class="botoes"><button class="btn-add" onclick="adicionarCarrinho(${p.id})">${esgotado ? 'Esgotado' : 'Adicionar'}</button><button class="btn-ver" onclick="verProduto(${p.id})">Ver</button></div></div>`; }
function verProduto(id) { const p = PRODUTOS.find(x => x.id === id); alert(p.nome + '\n' + p.desc + '\nR$ ' + p.preco.toFixed(2).replace('.', ',') + (p.disponivel ? '' : '\n⛔ ESGOTADO')); }
function renderizarProdutos() { const mapa = { 'Destaques': 'carrossel-destaques', 'Copo': 'carrossel-copo', 'Bolos': 'carrossel-bolos', 'Milkshake': 'carrossel-milkshake', 'Acai': 'carrossel-acai', 'Bebidas': 'carrossel-bebidas' }; for (const cat in mapa) { const el = document.getElementById(mapa[cat]); if (el) el.innerHTML = PRODUTOS.filter(p => p.categoria === cat).map(criarCard).join(''); } document.querySelectorAll('.carrossel').forEach(car => { if (car.id !== 'carrossel-favoritos') criarCarrossel(car); }); }
function criarCarrossel(car) { const track = car; const cards = car.querySelectorAll('.card'); const wrap = car.parentNode; const next = wrap.querySelector('.seta-direita'); const prev = wrap.querySelector('.seta-esquerda'); if (!next || !prev || cards.length === 0) return; let index = 0; function getVisible() { if (window.innerWidth <= 768) return 1; if (window.innerWidth <= 992) return 2; return 5; } function atualizar() { const visivel = getVisible(); const maxIndex = Math.max(0, cards.length - visivel); if (index < 0) index = 0; if (index > maxIndex) index = maxIndex; const cardWidth = cards[0].offsetWidth + 14; track.style.transform = `translateX(${-index * cardWidth}px)`; if (cards.length <= visivel) { prev.style.display = 'none'; next.style.display = 'none'; } else { prev.style.display = index === 0 ? 'none' : 'flex'; next.style.display = index >= maxIndex ? 'none' : 'flex'; } } next.onclick = () => { index++; atualizar(); }; prev.onclick = () => { index--; atualizar(); }; window.addEventListener('resize', atualizar); atualizar(); }

document.addEventListener('DOMContentLoaded', () => { renderizarProdutos(); renderizarFavoritos(); atualizarContador(); renderizarCarrinho(); mostrarPix(); verificarHorario(); });

// ===== FECHA ÀS 18H - SÓ AGENDAMENTO =====
function verificarHorario() {
  const agora = new Date();
  const hora = agora.getHours();
  const lojaAberta = hora >= 10 && hora < 18;
  const aviso = document.getElementById('aviso-fechado');
  if (aviso) { aviso.style.display = lojaAberta ? 'none' : 'block'; }
  const btnFinalizar = document.querySelector('.btn-finalizar');
  if (btnFinalizar) {
    if (!lojaAberta) { btnFinalizar.disabled = true; btnFinalizar.style.opacity = '0.5'; btnFinalizar.textContent = 'Loja Fechada - Volta amanhã às 10h 😴'; }
    else { btnFinalizar.disabled = false; btnFinalizar.style.opacity = '1'; btnFinalizar.textContent = 'Finalizar no WhatsApp ✅'; }
  }
}