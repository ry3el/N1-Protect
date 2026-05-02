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

window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  
  // Adiciona a classe 'hidden' após um pequeno delay para garantir que tudo carregou
  setTimeout(() => {
    preloader.classList.add('hidden');
    
    // Opcional: remove o elemento do DOM após a animação terminar
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 800); // Deve ser o mesmo tempo da transição no CSS
  }, 500); // 500ms de tempo mínimo de exibição
});
