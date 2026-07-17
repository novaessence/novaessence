const products=[
{id:1,name:'Horizonte',ref:'Sauvage de Dior',gender:'Hombre',notes:'Bergamota · pimienta · ambroxan',tone:'#244766',tag:'FRESCO'},
{id:2,name:'Bleu Intense',ref:'Bleu de Chanel',gender:'Hombre',notes:'Cítricos · incienso · cedro',tone:'#193046',tag:'VERSÁTIL'},
{id:3,name:'Velvet Noir',ref:'Good Girl',gender:'Mujer',notes:'Almendra · jazmín · cacao · tonka',tone:'#24243b',tag:'SEDUCTOR'},
{id:4,name:'Liberté',ref:'Libre de Yves Saint Laurent',gender:'Mujer',notes:'Lavanda · flor de azahar · vainilla',tone:'#c89a42',tag:'ELEGANTE'},
{id:5,name:'Noche Ámbar',ref:'Baccarat Rouge 540',gender:'Unisex',notes:'Azafrán · jazmín · ámbar amaderado',tone:'#a84738',tag:'ENVOLVENTE'},
{id:6,name:'Oro Urbano',ref:'One Million',gender:'Hombre',notes:'Mandarina · canela · cuero · ámbar',tone:'#b38a33',tag:'JUVENIL'},
{id:7,name:'Intense You',ref:'Stronger With You Intensely',gender:'Hombre',notes:'Pimienta rosa · canela · vainilla · ámbar',tone:'#744334',tag:'NOCTURNO'},
{id:8,name:'Bella Vida',ref:'La Vie Est Belle',gender:'Mujer',notes:'Pera · iris · praliné · vainilla',tone:'#b66b7d',tag:'CLÁSICO'},
{id:9,name:'Rosa Dulce',ref:'Yara de Lattafa',gender:'Mujer',notes:'Orquídea · frutas tropicales · vainilla · almizcle',tone:'#df9aaa',tag:'TENDENCIA'},
{id:10,name:'Canela Real',ref:'Khamrah de Lattafa',gender:'Unisex',notes:'Canela · dátiles · praliné · vainilla · maderas',tone:'#9a5c32',tag:'ESPECIADO'}];
const sizeMl=55;
const unitPrice=21;
const productImages={1:'producto-1-horizonte.png',2:'producto-2-bleu-intense.png',3:'producto-3-velvet-noir.png',4:'producto-4-liberte.png',5:'producto-5-noche-ambar.png',6:'producto-6-oro-urbano.png',7:'producto-7-intense-you.png',8:'producto-8-bella-vida.png',9:'producto-9-rosa-dulce.png',10:'producto-10-canela-real.png'};
const realPhotoAlt={
  1:'Fotografía real de Horizonte, fragancia inspirada en Sauvage de Dior',
  2:'Fotografía real de Bleu Intense, fragancia inspirada en Bleu de Chanel',
  3:'Fotografía real de Velvet Noir, fragancia inspirada en Good Girl',
  4:'Fotografía real de Liberté, fragancia inspirada en Libre de Yves Saint Laurent',
  5:'Fotografía real de Noche Ámbar, fragancia inspirada en Baccarat Rouge 540',
  6:'Fotografía real de Oro Urbano, fragancia inspirada en One Million',
  7:'Fotografía real de Intense You, fragancia inspirada en Stronger With You Intensely',
  8:'Fotografía real de Bella Vida, fragancia inspirada en La Vie Est Belle',
  9:'Fotografía real de Rosa Dulce, fragancia inspirada en Yara de Lattafa',
  10:'Fotografía real de Canela Real, fragancia inspirada en Khamrah de Lattafa'
};
document.head.insertAdjacentHTML('beforeend','<style>.visual.has-photo:before,.visual.has-photo:after{display:none}.visual.has-photo{background:#171310}.visual.has-photo img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .45s ease}.product:hover .visual.has-photo img{transform:scale(1.035)}.visual.has-photo .badge{z-index:1}</style>');
function decorateProductCards(){document.querySelectorAll('.product').forEach(card=>{const name=card.querySelector('h3')?.textContent,product=products.find(item=>item.name===name),visual=card.querySelector('.visual');if(!product||!visual||visual.classList.contains('has-photo'))return;const badge=visual.querySelector('.badge');visual.classList.add('has-photo');visual.innerHTML='';if(badge)visual.append(badge);const image=document.createElement('img');image.src=`assets/${productImages[product.id]}`;image.alt=realPhotoAlt[product.id]||`Presentación visual de ${product.name}`;image.loading='lazy';if(realPhotoAlt[product.id])image.classList.add('real-photo',`photo-${product.id}`);visual.append(image)})}
new MutationObserver(decorateProductCards).observe(document.getElementById('products'),{childList:true});
let cart=JSON.parse(localStorage.getItem('novaCart')||'[]')
 .filter(item=>products.some(product=>product.id===item.id))
 .map(item=>({...item,ml:sizeMl,price:unitPrice}));
let filter='Todos';
const $=selector=>document.querySelector(selector);
const money=value=>new Intl.NumberFormat('es-EC',{style:'currency',currency:'USD'}).format(value);

function renderProducts(){
 const query=$('#search').value.toLowerCase();
 const visible=products.filter(product=>(filter==='Todos'||product.gender===filter)&&(`${product.name} ${product.ref} ${product.notes}`.toLowerCase().includes(query)));
 $('#products').innerHTML=visible.map(product=>`<article class="product"><div class="visual" style="--tone:${product.tone}"><span class="badge">${product.tag}</span></div><div class="product-info"><span class="inspired">${product.gender.toUpperCase()} · INSPIRADO EN ${product.ref.toUpperCase()}</span><h3>${product.name}</h3><p class="notes">${product.notes}</p><div class="product-bottom"><div class="price"><span>PRECIO ÚNICO · 55 ML</span><b>$21,00</b></div></div><button class="add" type="button" data-add="${product.id}">Agregar a mi selección</button></div></article>`).join('')||'<p>No encontramos fragancias que coincidan con tu búsqueda.</p>';
}

function renderCart(){
 localStorage.setItem('novaCart',JSON.stringify(cart));
 $('#cartCount').textContent=cart.length;
 $('#cartItems').innerHTML=cart.length?cart.map((item,index)=>`<div class="cart-item"><div><b>${item.name}</b><small>${item.ml} ml · Inspirado en ${item.ref}</small></div><strong>${money(item.price)}</strong><button type="button" data-remove="${index}" aria-label="Eliminar ${item.name}">×</button></div>`).join(''):'<p class="empty">Tu selección está vacía.<br>Elige las fragancias que más te gusten.</p>';
 $('#cartTotal').textContent=money(cart.reduce((sum,item)=>sum+item.price,0));
}

function openCart(){$('#cart').classList.add('open');$('#backdrop').classList.add('show');$('#cart').setAttribute('aria-hidden','false')}
function closeCart(){$('#cart').classList.remove('open');$('#backdrop').classList.remove('show');$('#cart').setAttribute('aria-hidden','true')}

$('#products').onclick=event=>{const id=Number(event.target.dataset.add);if(!id)return;const product=products.find(item=>item.id===id);cart.push({...product,ml:sizeMl,price:unitPrice});renderCart();openCart()};
$('#cartItems').onclick=event=>{if(event.target.dataset.remove!==undefined){cart.splice(Number(event.target.dataset.remove),1);renderCart()}};
$('.filters').onclick=event=>{if(!event.target.dataset.filter)return;filter=event.target.dataset.filter;document.querySelectorAll('.filters button').forEach(button=>{const active=button===event.target;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});renderProducts()};
$('#search').oninput=renderProducts;$('#cartBtn').onclick=openCart;$('#closeCart').onclick=closeCart;$('#backdrop').onclick=closeCart;
$('#checkout').onclick=()=>{if(!cart.length)return alert('Agrega al menos una fragancia.');const lines=cart.map(item=>`• ${item.name} (${item.ml} ml) - ${money(item.price)}`);const total=money(cart.reduce((sum,item)=>sum+item.price,0));const message=`Hola, Nova Essence. Deseo realizar el siguiente pedido:\n\n${lines.join('\n')}\n\nTotal estimado: ${total}\n\nMi ciudad es: \nTipo de entrega: pago contra entrega en Cuenca / envío a otra ciudad\n\n¿Podrían confirmarme la disponibilidad y los datos de entrega?`;window.open(`https://wa.me/593998267804?text=${encodeURIComponent(message)}`,'_blank')};
renderProducts();renderCart();
