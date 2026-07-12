const products=[
{id:1,name:'Horizonte',ref:'Sauvage',gender:'Hombre',notes:'Bergamota · pimienta · ambroxan',tone:'#244766',tag:'N.º 1 EN VENTAS'},
{id:2,name:'Bleu Intense',ref:'Bleu de Chanel',gender:'Hombre',notes:'Cítricos · incienso · cedro',tone:'#193046',tag:'VERSÁTIL'},
{id:3,name:'Velvet Noir',ref:'Good Girl',gender:'Mujer',notes:'Almendra · jazmín · cacao · tonka',tone:'#24243b',tag:'MÁS PEDIDO'},
{id:4,name:'Liberté',ref:'Libre',gender:'Mujer',notes:'Lavanda · flor de azahar · vainilla',tone:'#c89a42',tag:'ELEGANTE'},
{id:5,name:'Noche Ámbar',ref:'Baccarat Rouge 540',gender:'Unisex',notes:'Azafrán · jazmín · ámbar amaderado',tone:'#a84738',tag:'ICÓNICO'},
{id:6,name:'Oro Urbano',ref:'One Million',gender:'Hombre',notes:'Mandarina · canela · cuero · ámbar',tone:'#b38a33',tag:'JUVENIL'},
{id:7,name:'Intense You',ref:'Stronger With You Intensely',gender:'Hombre',notes:'Pimienta rosa · canela · vainilla · ámbar',tone:'#744334',tag:'NOCTURNO'},
{id:8,name:'Bella Vida',ref:'La Vie Est Belle',gender:'Mujer',notes:'Pera · iris · praliné · vainilla',tone:'#b66b7d',tag:'CLÁSICO'},
{id:9,name:'Rosa Dulce',ref:'Yara Lattafa',gender:'Mujer',notes:'Orquídea · frutas tropicales · vainilla · almizcle',tone:'#df9aaa',tag:'VIRAL'},
{id:10,name:'Canela Real',ref:'Khamrah',gender:'Unisex',notes:'Canela · dátiles · praliné · vainilla · maderas',tone:'#9a5c32',tag:'ÁRABE'}];
const prices={5:6,10:10,30:22};
const productImages={1:'producto-1-horizonte.png',2:'producto-2-bleu-intense.png',3:'producto-3-velvet-noir.png',4:'producto-4-liberte.png',5:'producto-5-noche-ambar.png',6:'producto-6-oro-urbano.png',7:'producto-7-intense-you.png',8:'producto-8-bella-vida.png',9:'producto-9-rosa-dulce.png',10:'producto-10-canela-real.png'};
document.head.insertAdjacentHTML('beforeend','<style>.visual.has-photo:before,.visual.has-photo:after{display:none}.visual.has-photo{background:#171310}.visual.has-photo img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .45s ease}.product:hover .visual.has-photo img{transform:scale(1.035)}.visual.has-photo .badge{z-index:1}</style>');
function decorateProductCards(){document.querySelectorAll('.product').forEach(card=>{const name=card.querySelector('h3')?.textContent,product=products.find(item=>item.name===name),visual=card.querySelector('.visual');if(!product||!visual||visual.classList.contains('has-photo'))return;const badge=visual.querySelector('.badge');visual.classList.add('has-photo');visual.innerHTML='';if(badge)visual.append(badge);const image=document.createElement('img');image.src=`assets/${productImages[product.id]}`;image.alt=`Presentación visual de ${product.name}`;image.loading='lazy';visual.append(image)})}
new MutationObserver(decorateProductCards).observe(document.getElementById('products'),{childList:true});
let cart=JSON.parse(localStorage.getItem('novaCart')||'[]').filter(item=>products.some(product=>product.id===item.id));
let filter='Todos';
const $=selector=>document.querySelector(selector);
const money=value=>new Intl.NumberFormat('es-EC',{style:'currency',currency:'USD'}).format(value);

function renderProducts(){
 const query=$('#search').value.toLowerCase();
 const visible=products.filter(product=>(filter==='Todos'||product.gender===filter)&&(`${product.name} ${product.ref} ${product.notes}`.toLowerCase().includes(query)));
 $('#products').innerHTML=visible.map(product=>`<article class="product"><div class="visual" style="--tone:${product.tone}"><span class="badge">${product.tag}</span></div><div class="product-info"><span class="inspired">${product.gender.toUpperCase()} · INSPIRADO EN ${product.ref.toUpperCase()}</span><h3>${product.name}</h3><p class="notes">${product.notes}</p><div class="product-bottom"><div class="price"><span>DESDE</span><b>$6,00</b></div><select aria-label="Tamaño de ${product.name}" data-size="${product.id}"><option value="5">5 ml · $6</option><option value="10">10 ml · $10</option><option value="30">30 ml · $22</option></select></div><button class="add" data-add="${product.id}">Agregar a la bolsa</button></div></article>`).join('')||'<p>No encontramos aromas con esa búsqueda.</p>';
}

function renderCart(){
 localStorage.setItem('novaCart',JSON.stringify(cart));
 $('#cartCount').textContent=cart.length;
 $('#cartItems').innerHTML=cart.length?cart.map((item,index)=>`<div class="cart-item"><div><b>${item.name}</b><small>${item.ml} ml · Inspirado en ${item.ref}</small></div><strong>${money(item.price)}</strong><button data-remove="${index}" aria-label="Eliminar">×</button></div>`).join(''):'<p class="empty">Tu bolsa está vacía.<br>Elige las esencias que quieras probar.</p>';
 $('#cartTotal').textContent=money(cart.reduce((sum,item)=>sum+item.price,0));
}

function openCart(){$('#cart').classList.add('open');$('#backdrop').classList.add('show');$('#cart').setAttribute('aria-hidden','false')}
function closeCart(){$('#cart').classList.remove('open');$('#backdrop').classList.remove('show');$('#cart').setAttribute('aria-hidden','true')}

$('#products').onclick=event=>{const id=Number(event.target.dataset.add);if(!id)return;const product=products.find(item=>item.id===id);const ml=Number(document.querySelector(`[data-size="${id}"]`).value);cart.push({...product,ml,price:prices[ml]});renderCart();openCart()};
$('#cartItems').onclick=event=>{if(event.target.dataset.remove!==undefined){cart.splice(Number(event.target.dataset.remove),1);renderCart()}};
$('.filters').onclick=event=>{if(!event.target.dataset.filter)return;filter=event.target.dataset.filter;document.querySelectorAll('.filters button').forEach(button=>button.classList.toggle('active',button===event.target));renderProducts()};
$('#search').oninput=renderProducts;$('#cartBtn').onclick=openCart;$('#closeCart').onclick=closeCart;$('#backdrop').onclick=closeCart;
$('#checkout').onclick=()=>{if(!cart.length)return alert('Agrega al menos una fragancia.');const lines=cart.map(item=>`• ${item.name} (${item.ml} ml) - ${money(item.price)}`);const total=money(cart.reduce((sum,item)=>sum+item.price,0));const message=`Hola NovaEssence, deseo realizar este pedido:\n\n${lines.join('\n')}\n\nTotal estimado: ${total}\n\n¿Me confirman disponibilidad y entrega?`;window.open(`https://wa.me/593998267804?text=${encodeURIComponent(message)}`,'_blank')};
renderProducts();renderCart();
