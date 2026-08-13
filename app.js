
const products=[
{id:'sauvage',title:'Horizonte',ref:'Sauvage de Dior',gender:'Hombre',stock:1,image:'50ml-horizonte.png',notes:'Bergamota · pimienta · ambroxan'},
{id:'goodgirl',title:'Velvet Noir',ref:'Good Girl',gender:'Mujer',stock:2,image:'50ml-velvet-noir.png',notes:'Almendra · jazmín · cacao'},
{id:'libre',title:'Liberté',ref:'Libre de YSL',gender:'Mujer',stock:2,image:'50ml-liberte.png',notes:'Lavanda · azahar · vainilla'},
{id:'lavie',title:'Bella Vida',ref:'La Vie Est Belle',gender:'Mujer',stock:4,image:'50ml-bella-vida.png',notes:'Pera · iris · praliné'},
{id:'yara',title:'Rosa Dulce',ref:'Yara de Lattafa',gender:'Mujer',stock:1,image:'50ml-rosa-dulce.png',notes:'Frutas tropicales · vainilla · almizcle'},
{id:'baccarat',title:'Noche Ámbar',ref:'Baccarat Rouge 540',gender:'Unisex',stock:1,image:'50ml-noche-ambar.png',notes:'Azafrán · ámbar · maderas'}];

const compactProducts=[
{id:'erosazul',ref:'Eros de Versace azul',gender:'Hombre',image:'30ml-eros-azul.png',profile:'Fresco y amaderado'},
{id:'erosflame',ref:'Eros Flame',gender:'Hombre',image:'30ml-eros-flame.png',profile:'Cítrico y especiado'},
{id:'bleu',ref:'Bleu de Chanel',gender:'Hombre',image:'concepto-publicidad-30ml.png',profile:'Amaderado y elegante'},
{id:'sauvage30',ref:'Sauvage de Dior',gender:'Hombre',image:'concepto-publicidad-30ml.png',profile:'Fresco, intenso y moderno'},
{id:'lemale',ref:'Le Male Elixir',gender:'Hombre',image:'concepto-publicidad-30ml.png',profile:'Dulce, cálido y nocturno'},
{id:'invictus',ref:'Invictus',gender:'Hombre',image:'concepto-publicidad-30ml.png',profile:'Fresco, marino y energético'},
{id:'yaracandy',ref:'Yara Candy',gender:'Mujer',image:'30ml-yara-candy.png',profile:'Dulce y cremoso'},
{id:'yumyum',ref:'Yum Yum',gender:'Mujer',image:'30ml-yum-yum.png',profile:'Frutal y divertido'},
{id:'khamrah',ref:'Khamrah de Lattafa',gender:'Unisex',image:'concepto-publicidad-30ml.png',profile:'Canela, vainilla y ámbar'}];

const $=s=>document.querySelector(s);
const wa=(ref,size)=>'https://wa.me/593963104770?text='+encodeURIComponent('Hola Nova Essence, quiero '+ref+' en presentación de '+size+'.');
const style=document.createElement('style');
style.textContent='.visual.has-photo{overflow:hidden;background:#17110e}.visual.has-photo img{width:100%;height:100%;object-fit:cover;display:block}.product .stock{display:inline-flex;margin:4px 0 12px;padding:5px 9px;border-radius:999px;background:#f5e6cc;color:#5b3214;font-size:.72rem;font-weight:800;letter-spacing:.04em}.product .add{display:inline-flex;justify-content:center;text-decoration:none}.compact-groups{display:grid;gap:26px}.compact-subhead strong{display:block;font-family:Playfair Display,serif;font-size:1.3rem;color:#342015;margin-top:3px}.compact-subhead p{margin:4px 0 0}.compact-order{display:inline-flex;justify-content:center;text-align:center;text-decoration:none}.catalog-note{margin:12px 0 0;color:#725b48;font-size:.9rem}';document.head.append(style);

function card50(p){
 return '<article class="product"><div class="visual has-photo"><img src="assets/'+p.image+'" alt="'+p.title+', fragancia inspirada en '+p.ref+'" loading="lazy"></div><div class="product-info"><p class="eyebrow">'+p.gender+' · 50 ML</p><h3>'+p.title+'</h3><p class="reference">Inspirado en '+p.ref+'</p><p class="notes">'+p.notes+'</p><span class="stock">'+p.stock+' disponible'+(p.stock>1?'s':'')+'</span><div class="price-row"><strong>$21</strong><span>o 2 por $40</span></div><a class="add" target="_blank" rel="noopener" href="'+wa(p.ref,'50 ml')+'">Pedir por WhatsApp</a></div></article>';
}

function render50(){
 const search=($('#search')?.value||'').trim().toLowerCase();
 const filter=document.querySelector('.filters button.active')?.dataset.filter||'Todos';
 const visible=products.filter(p=>(filter==='Todos'||p.gender===filter)&&(p.title+' '+p.ref+' '+p.notes).toLowerCase().includes(search));
 const target=$('#products');if(!target)return;
 target.innerHTML=visible.length?visible.map(card50).join(''):'<p class="empty-state">No hay resultados con esa búsqueda.</p>';
}

function card30(p){
 return '<article class="compact-card compact-blue"><div class="compact-image"><img src="assets/'+p.image+'" alt="'+p.ref+', fragancia inspirada en 30 ml" loading="lazy"><span class="compact-stock">DISPONIBLE AHORA</span></div><div class="compact-copy"><p>'+p.gender.toUpperCase()+' · FRAGANCIA INSPIRADA EN</p><h3>'+p.ref+'</h3><span class="compact-profile">'+p.profile+'</span><div class="compact-price"><b>$12</b><small>30 ml · 2 por $22</small></div><a class="compact-order" target="_blank" rel="noopener" href="'+wa(p.ref,'30 ml')+'">Pedir por WhatsApp</a></div></article>';
}

function render30(){
 const target=$('#compactProducts');if(!target)return;
 target.innerHTML='<div class="compact-groups">'+['Hombre','Mujer','Unisex'].map(g=>'<section class="compact-subsection"><div class="compact-subhead"><span>30 ML · '+g.toUpperCase()+'</span><strong>'+g+'</strong><p>Stock actual, sujeto a confirmación.</p></div><div class="compact-grid">'+compactProducts.filter(p=>p.gender===g).map(card30).join('')+'</div></section>').join('')+'</div><p class="catalog-note">También podemos coordinar otros aromas bajo pedido.</p>';
}

document.addEventListener('DOMContentLoaded',()=>{
 render50();render30();
 document.querySelectorAll('.filters button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button));});render50();}));
 $('#search')?.addEventListener('input',render50);
 $('#cartBtn')?.addEventListener('click',()=>document.querySelector('#catalogo')?.scrollIntoView({behavior:'smooth'}));
});
