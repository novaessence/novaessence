const products=[
{id:1,name:'Horizonte',ref:'Sauvage de Dior',gender:'Hombre',notes:'Bergamota · pimienta · ambroxan',tone:'#244766',tag:'FRESCO',stock:2,family:'Fresca, cítrica y amaderada',description:'Una salida brillante y especiada que evoluciona hacia un fondo limpio, mineral y amaderado. Se siente moderno, seguro y fácil de llevar.',top:['Bergamota de Calabria','Pimienta de Sichuan'],heart:['Elemi','Acordes aromáticos'],base:['Ambroxan','Maderas'],occasions:['Uso diario','Trabajo','Salidas casuales'],moment:'Día y tarde',weather:'Clima templado o cálido',style:'Fresco y seguro'},
{id:2,name:'Bleu Intense',ref:'Bleu de Chanel',gender:'Hombre',notes:'Cítricos · cedro · sándalo',tone:'#193046',tag:'VERSÁTIL',stock:2,family:'Aromática, amaderada y ambarada',description:'Combina una apertura cítrica limpia con maderas elegantes y un fondo cálido. Es una opción equilibrada cuando buscas proyectar orden y sofisticación.',top:['Acorde cítrico','Aromas frescos'],heart:['Cedro ambarado','Notas aromáticas'],base:['Sándalo','Tonka y vainilla'],occasions:['Oficina','Reuniones','Cena o evento'],moment:'Día y noche',weather:'Todo el año',style:'Elegante y versátil'},
{id:3,name:'Velvet Noir',ref:'Good Girl',gender:'Mujer',notes:'Almendra · jazmín · cacao · tonka',tone:'#24243b',tag:'SEDUCTOR',stock:2,family:'Floral, dulce y ambarada',description:'Inicia con una almendra envolvente, se vuelve floral y termina con un fondo cremoso de cacao y tonka. Tiene un carácter femenino, elegante y llamativo.',top:['Almendra'],heart:['Jazmín sambac','Tuberosa'],base:['Haba tonka','Cacao'],occasions:['Cena especial','Fiesta','Cita'],moment:'Tarde y noche',weather:'Clima templado o fresco',style:'Seductor y elegante'},
{id:4,name:'Liberté',ref:'Libre de Yves Saint Laurent',gender:'Mujer',notes:'Lavanda · flor de azahar · vainilla',tone:'#c89a42',tag:'ELEGANTE',stock:2,family:'Floral, aromática y cálida',description:'La lavanda aporta una sensación limpia y segura, mientras la flor de azahar y la vainilla suavizan el aroma con un acabado femenino y moderno.',top:['Lavanda francesa','Acordes cítricos'],heart:['Flor de azahar de Marruecos'],base:['Almizcle','Vainilla cálida'],occasions:['Trabajo','Evento formal','Salida nocturna'],moment:'Día y noche',weather:'Todo el año',style:'Seguro y sofisticado'},
{id:5,name:'Noche Ámbar',ref:'Baccarat Rouge 540',gender:'Unisex',notes:'Azafrán · jazmín · ámbar amaderado',tone:'#a84738',tag:'ENVOLVENTE',stock:1,family:'Floral, ambarada y amaderada',description:'Un perfil luminoso y envolvente que mezcla flores aireadas, un toque especiado y un fondo mineral de maderas secas. Destaca sin sentirse convencional.',top:['Azafrán','Jazmín'],heart:['Acorde ambarado y mineral'],base:['Maderas secas','Faceta gourmand'],occasions:['Evento especial','Cena','Cuando quieres destacar'],moment:'Tarde y noche',weather:'Clima templado o fresco',style:'Envolvente y distintivo'},
{id:6,name:'Oro Urbano',ref:'One Million',gender:'Hombre',notes:'Mandarina · canela · cuero · ámbar',tone:'#b38a33',tag:'JUVENIL',stock:1,family:'Cítrica, especiada y ambarada',description:'Abre con cítricos y menta, continúa con canela y termina en un fondo cálido de cuero y ámbar. Es juvenil, energético y pensado para hacerse notar.',top:['Mandarina roja','Menta'],heart:['Canela','Rosa'],base:['Cuero','Ámbar y tonka'],occasions:['Fiesta','Cita','Salida con amigos'],moment:'Tarde y noche',weather:'Clima templado o fresco',style:'Enérgico y llamativo'},
{id:7,name:'Intense You',ref:'Stronger With You Intensely',gender:'Hombre',notes:'Pimienta rosa · lavanda · vainilla · ámbar',tone:'#744334',tag:'NOCTURNO',stock:1,family:'Cálida, especiada y amaderada',description:'La pimienta rosa aporta energía; la lavanda y la salvia equilibran el corazón; la vainilla y las maderas ambaradas dejan una sensación cálida y cercana.',top:['Pimienta rosa','Acorde de castaña'],heart:['Lavanda','Salvia'],base:['Vainilla','Maderas ambaradas'],occasions:['Cita','Cena','Noche especial'],moment:'Tarde y noche',weather:'Clima fresco',style:'Cálido e intenso'},
{id:8,name:'Bella Vida',ref:'La Vie Est Belle',gender:'Mujer',notes:'Iris · praliné · vainilla · pachulí',tone:'#b66b7d',tag:'CLÁSICO',stock:4,family:'Floral, gourmand y cálida',description:'El iris aporta elegancia; el praliné y el azúcar una dulzura agradable; la vainilla y el pachulí crean un fondo cálido y reconocible.',top:['Iris'],heart:['Praliné','Azúcar hilado'],base:['Vainilla','Pachulí'],occasions:['Celebración','Cita','Regalo especial'],moment:'Tarde y noche',weather:'Clima templado o fresco',style:'Dulce y elegante'},
{id:9,name:'Rosa Dulce',ref:'Yara de Lattafa',gender:'Mujer',notes:'Orquídea · frutas tropicales · vainilla · almizcle',tone:'#df9aaa',tag:'TENDENCIA',stock:3,family:'Frutal, floral y avainillada',description:'Una mezcla suave y cremosa: comienza floral y cítrica, presenta un corazón tropical y termina con vainilla, sándalo y almizcle.',top:['Mandarina','Heliotropo','Orquídea'],heart:['Frutas tropicales','Acorde gourmand'],base:['Vainilla','Sándalo y almizcle'],occasions:['Uso diario','Salida casual','Regalo'],moment:'Día y tarde',weather:'Clima templado o cálido',style:'Dulce y juvenil'},
{id:10,name:'Canela Real',ref:'Khamrah de Lattafa',gender:'Unisex',notes:'Canela · dátiles · praliné · vainilla · maderas',tone:'#9a5c32',tag:'ESPECIADO',stock:2,family:'Especiada, gourmand y amaderada',description:'Una apertura de canela y nuez moscada conduce a un corazón dulce de dátiles y praliné. El fondo de vainilla, tonka y maderas le da profundidad.',top:['Bergamota','Canela','Nuez moscada'],heart:['Dátiles','Praliné y tuberosa'],base:['Vainilla','Tonka, mirra y maderas'],occasions:['Cena','Evento','Noche especial'],moment:'Tarde y noche',weather:'Clima fresco',style:'Cálido y especiado'}];
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
 const visible=products.filter(product=>(filter==='Todos'||product.gender===filter)&&(`${product.name} ${product.ref} ${product.notes} ${product.family} ${product.occasions.join(' ')}`.toLowerCase().includes(query)));
 $('#products').innerHTML=visible.map(product=>`<article class="product"><div class="visual" style="--tone:${product.tone}"><span class="badge">${product.tag}</span></div><div class="product-info"><span class="inspired">${product.gender.toUpperCase()} · INSPIRADO EN ${product.ref.toUpperCase()}</span><h3>${product.name}</h3><p class="notes">${product.notes}</p><p class="stock-status"><span></span> Entrega inmediata · ${product.stock} ${product.stock===1?'unidad':'unidades'}</p><div class="product-bottom"><div class="price"><span>PRECIO ÚNICO · 55 ML</span><b>$21,00</b></div></div><div class="product-actions"><button class="details-button" type="button" data-details="${product.id}">Ver aroma y ocasiones</button><button class="add" type="button" data-add="${product.id}">Agregar a mi selección</button></div></div></article>`).join('')||'<p>No encontramos fragancias que coincidan con tu búsqueda.</p>';
}

function renderCart(){
 localStorage.setItem('novaCart',JSON.stringify(cart));
 $('#cartCount').textContent=cart.length;
 $('#cartItems').innerHTML=cart.length?cart.map((item,index)=>`<div class="cart-item"><div><b>${item.name}</b><small>${item.ml} ml · Inspirado en ${item.ref}</small></div><strong>${money(item.price)}</strong><button type="button" data-remove="${index}" aria-label="Eliminar ${item.name}">×</button></div>`).join(''):'<p class="empty">Tu selección está vacía.<br>Elige las fragancias que más te gusten.</p>';
 $('#cartTotal').textContent=money(cart.reduce((sum,item)=>sum+item.price,0));
}

function openCart(){$('#cart').classList.add('open');$('#backdrop').classList.add('show');$('#cart').setAttribute('aria-hidden','false')}
function closeCart(){$('#cart').classList.remove('open');$('#backdrop').classList.remove('show');$('#cart').setAttribute('aria-hidden','true')}

let activeProduct=null;
let detailTrigger=null;
function openProductDetails(id,trigger){
 const product=products.find(item=>item.id===id);if(!product)return;
 activeProduct=product;detailTrigger=trigger||document.activeElement;
 $('#detailImage').src=`assets/${productImages[product.id]}`;
 $('#detailImage').alt=realPhotoAlt[product.id]||`Presentación visual de ${product.name}`;
 $('#detailTag').textContent=product.tag;
 $('#detailMeta').textContent=`${product.gender.toUpperCase()} · FRAGANCIA INSPIRADA EN ${product.ref.toUpperCase()}`;
 $('#detailName').textContent=product.name;
 $('#detailFamily').textContent=product.family;
 $('#detailDescription').textContent=product.description;
 $('#detailTop').innerHTML=product.top.map(note=>`<li>${note}</li>`).join('');
 $('#detailHeart').innerHTML=product.heart.map(note=>`<li>${note}</li>`).join('');
 $('#detailBase').innerHTML=product.base.map(note=>`<li>${note}</li>`).join('');
 $('#detailOccasions').innerHTML=product.occasions.map(item=>`<span>${item}</span>`).join('');
 $('#detailMoment').textContent=product.moment;
 $('#detailWeather').textContent=product.weather;
 $('#detailStyle').textContent=product.style;
 $('#detailOrder').href=`https://wa.me/593963104770?text=${encodeURIComponent(`Hola Nova Essence, me interesa ${product.name}, fragancia inspirada en ${product.ref}, de 55 ml por $21. ¿Podrían confirmarme disponibilidad?`)}`;
 $('#productModal').classList.add('open');
 $('#productModal').setAttribute('aria-hidden','false');
 document.body.classList.add('modal-open');
 setTimeout(()=>$('#closeDetails').focus(),30);
}
function closeProductDetails(){
 $('#productModal').classList.remove('open');
 $('#productModal').setAttribute('aria-hidden','true');
 document.body.classList.remove('modal-open');
 if(detailTrigger)detailTrigger.focus();
}
function addActiveProduct(){if(!activeProduct)return;cart.push({...activeProduct,ml:sizeMl,price:unitPrice});renderCart();closeProductDetails();openCart()}

$('#products').onclick=event=>{
 const addButton=event.target.closest('[data-add]');
 if(addButton){const product=products.find(item=>item.id===Number(addButton.dataset.add));if(!product)return;cart.push({...product,ml:sizeMl,price:unitPrice});renderCart();openCart();return}
 const detailsButton=event.target.closest('[data-details]');
 if(detailsButton)openProductDetails(Number(detailsButton.dataset.details),detailsButton);
};
$('#cartItems').onclick=event=>{if(event.target.dataset.remove!==undefined){cart.splice(Number(event.target.dataset.remove),1);renderCart()}};
$('.filters').onclick=event=>{if(!event.target.dataset.filter)return;filter=event.target.dataset.filter;document.querySelectorAll('.filters button').forEach(button=>{const active=button===event.target;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});renderProducts()};
$('#search').oninput=renderProducts;$('#cartBtn').onclick=openCart;$('#closeCart').onclick=closeCart;$('#backdrop').onclick=closeCart;
$('#closeDetails').onclick=closeProductDetails;$('#detailBackdrop').onclick=closeProductDetails;$('#detailAdd').onclick=addActiveProduct;
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&$('#productModal').classList.contains('open'))closeProductDetails()});
$('#checkout').onclick=()=>{if(!cart.length)return alert('Agrega al menos una fragancia.');const lines=cart.map(item=>`• ${item.name} (${item.ml} ml) - ${money(item.price)}`);const total=money(cart.reduce((sum,item)=>sum+item.price,0));const message=`Hola, Nova Essence. Deseo realizar el siguiente pedido:\n\n${lines.join('\n')}\n\nTotal estimado: ${total}\n\nMi ciudad es: \nTipo de entrega: pago contra entrega en Cuenca / envío a otra ciudad\n\n¿Podrían confirmarme la disponibilidad y los datos de entrega?`;window.open(`https://wa.me/593963104770?text=${encodeURIComponent(message)}`,'_blank')};
renderProducts();renderCart();
