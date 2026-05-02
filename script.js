  function closeMobileMenu() { document.getElementById('mobileMenu').classList.remove('open'); }
 
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => { if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 60); });
  }, { threshold: 0.1 });
  reveals.forEach(el => obs.observe(el));
 
  const tel = document.getElementById('telefone');
  if (tel) {
    tel.addEventListener('input', e => {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length <= 10) v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      else v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
      e.target.value = v;
    });
  }
 
  function submitForm() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const servico = document.getElementById('servico').value;
    if (!nome || !email || !servico) { alert('Preencha pelo menos Nome, E-mail e Serviço.'); return; }
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('formSuccess').classList.add('visible');
  }
 
  window.addEventListener('scroll', () => {
    let cur = '';
    document.querySelectorAll('section[id]').forEach(s => { if (window.scrollY >= s.offsetTop - 80) cur = s.id; });
    document.querySelectorAll('.nav-links a').forEach(a => { a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--blue)' : ''; });
  });

// Adiciona a classe 'loading' ao body imediatamente
document.body.classList.add('loading');

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  
  // Garantimos um tempo mínimo (ex: 600ms) para que, se o site 
  // carregar instantaneamente, o usuário ainda veja uma animação rápida 
  // em vez de um "pulo" visual estranho.
  setTimeout(() => {
    preloader.classList.add('fade-out');
    document.body.classList.remove('loading');
    
    // Remove o preloader do DOM após a animação de transição (800ms no CSS)
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 800);
    
  }, 600); 
});
