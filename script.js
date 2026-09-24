(() => {
  'use strict';

  // Contacto: un solo lugar para cambiarlo.
  // WA_NUMBER: solo dígitos con código de país (p. ej. '5255XXXXXXXX').
  // PHONE: número para mostrar (p. ej. '+52 55 XXXX XXXX').
  // Si están vacíos, los botones de WhatsApp y el teléfono no se muestran.
  const WA_NUMBER = '';
  const PHONE = '';
  const EMAIL = 'ventas@ftrucks.mx';

  const i18n = {
    es: {
      meta_title: 'FTrucks | Fabricación de Food Trucks en México',
      meta_desc: 'Fabricamos food trucks y remolques de comida en México: diseño, ingeniería sanitaria, gas y eléctrica, equipamiento y entrega llave en mano.',
      lang_toggle_aria: 'Switch to English',
      skip: 'Saltar al contenido',
      brand_aria: 'FTrucks, inicio',
      brand_tag: 'Food trucks hechos en México',
      nav_aria: 'Principal',
      menu_open: 'Abrir menú',
      menu_close: 'Cerrar menú',
      nav_services: 'Servicios',
      nav_model: 'Modelo',
      nav_process: 'Proceso',
      nav_compliance: 'Cumplimiento',
      nav_portfolio: 'Portafolio',
      nav_quote: 'Cotiza',
      hero_eyebrow: 'Fabricantes de food trucks · México',
      hero_title: 'Fabricación de food trucks con estándares profesionales',
      hero_sub: 'Diseñamos y construimos unidades listas para operar y exportar en México, con ingeniería sanitaria, gas, eléctrica y acabados de alto desempeño.',
      cta_quote: 'Solicitar cotización',
      cta_whatsapp_long: 'Escríbenos por WhatsApp',
      cta_portfolio: 'Ver unidades fabricadas',
      cta_email: 'Escríbenos un correo',
      trust_warranty: 'Garantía de fábrica',
      trust_turnkey: 'Entrega llave en mano',
      trust_foodgrade: 'Materiales grado alimenticio',
      hero_float: 'Interior en acero inoxidable',
      alt_hero: 'Remolque de comida rojo con dos ventanas de servicio abiertas y equipo de aire acondicionado',
      alt_kitchen_detail: 'Interior de cocina en acero inoxidable con gabinetes rojos',
      services_eyebrow: 'Lo que hacemos',
      services_title: 'Servicios especializados',
      services_sub: 'Soluciones integrales para tu operación móvil de alimentos.',
      svc_design_title: 'Diseño e ingeniería',
      svc_design_desc: 'Layout sanitario, flujos, selección de equipo y memoria técnica para una operación eficiente.',
      svc_build_title: 'Fabricación a medida',
      svc_build_desc: 'Estructura, recubrimientos, instalaciones eléctricas y de gas con pruebas de hermeticidad.',
      svc_equip_title: 'Equipamiento profesional',
      svc_equip_desc: 'Plancha, freidoras, refrigeración, campana y extracción con filtros y supresión opcional.',
      svc_paper_title: 'Acompañamiento en trámites',
      svc_paper_desc: 'Documentación técnica de la unidad para alta, permisos y operación en México.',
      model_eyebrow: 'Modelo destacado',
      model_title: 'Remolque 8 × 16 ft',
      model_lead: 'Un remolque compacto con ventana de servicio y plataforma trasera, pensado para cocinas de plancha y fritura.',
      model_note: 'Medidas, equipamiento y precio se definen contigo en la cotización.',
      model_equipment: 'Configuración de ejemplo',
      eq_griddle: 'Plancha',
      eq_burners: 'Quemadores',
      eq_fryer: 'Freidora',
      eq_bainmarie: 'Baño maría',
      model_cta: 'Cotizar este modelo',
      alt_blue: 'Remolque de comida azul de 8 × 16 pies con ventana de servicio y plataforma trasera',
      process_eyebrow: 'Cómo trabajamos',
      process_title: 'Proceso claro y transparente',
      proc_1_title: 'Brief y propuesta',
      proc_1_desc: 'Entendemos tu concepto y definimos alcance, tiempos y presupuesto.',
      proc_2_title: 'Diseño e ingeniería',
      proc_2_desc: 'Planos, selección de equipos y layout validado.',
      proc_3_title: 'Producción',
      proc_3_desc: 'Fabricación, instalaciones y acabados con control de calidad.',
      proc_4_title: 'Entrega y capacitación',
      proc_4_desc: 'Pruebas de funcionamiento y capacitación operativa.',
      compliance_eyebrow: 'Seguridad desde el diseño',
      compliance_title: 'Cumplimiento y seguridad',
      compliance_sub: 'Buenas prácticas y normativas aplicables a la operación de unidades móviles de alimentos en México.',
      comp_food_title: 'Grado alimenticio',
      comp_food_desc: 'Superficies de contacto en acero inoxidable y recubrimientos lavables.',
      comp_elec_title: 'Instalación eléctrica',
      comp_elec_desc: 'Canalización, protecciones y tierra física para operación segura.',
      comp_gas_title: 'Instalación de gas',
      comp_gas_desc: 'Pruebas de hermeticidad, válvulas y ventilación conforme buenas prácticas.',
      comp_hyg_title: 'Higiene y flujo',
      comp_hyg_desc: 'Lavamanos, áreas separadas, almacenamiento y control de residuos.',
      compliance_note: 'La normativa específica puede variar según municipio y requisitos del punto de operación.',
      portfolio_eyebrow: 'Unidades fabricadas',
      portfolio_title: 'Portafolio',
      portfolio_sub: 'Algunos proyectos representativos: remolques, acabados e interiores.',
      g_red: 'Remolque rojo con dos ventanas de servicio abiertas',
      g_red_cap: 'Remolque rojo con ventanas abatibles',
      g_blue: 'Remolque azul de 8 × 16 pies con plataforma trasera',
      g_blue_cap: 'Remolque azul 8 × 16 ft',
      g_pink: 'Remolque rosa con menú exhibido y la palabra Welcome en el costado',
      g_pink_cap: 'Remolque rosa',
      g_night: 'Remolque rojo de noche con reflectores y luces LED en el contorno',
      g_night_cap: 'Iluminación LED nocturna',
      g_kitchen: 'Interior de cocina en acero inoxidable con campana de extracción y gabinetes rojos',
      g_kitchen_cap: 'Interior de cocina en acero inoxidable',
      g_orange: 'Remolque rojo anaranjado con ventana de servicio y lanza de arrastre',
      g_orange_cap: 'Remolque rojo anaranjado',
      g_cta_kicker: '¿Tienes un concepto?',
      g_cta_title: 'Diseñemos tu unidad',
      lb_aria: 'Galería',
      lb_close: 'Cerrar',
      lb_prev: 'Anterior',
      lb_next: 'Siguiente',
      cta2_title: '¿Listo para arrancar tu food truck?',
      cta2_sub: 'Cuéntanos tu concepto y te enviamos una propuesta con tiempos y alcance.',
      cta2_button: 'Hablar con un asesor',
      contact_eyebrow: 'Cotiza sin compromiso',
      contact_title: 'Contacto',
      contact_sub: 'Completa el formulario y envíanos tu solicitud por correo.',
      contact_sub_wa: 'Completa el formulario y envíanos tu solicitud por WhatsApp o por correo.',
      ph_name: 'Nombre',
      ph_phone: 'Teléfono',
      ph_email: 'Correo',
      ph_type: 'Tipo de unidad',
      ph_select: 'Selecciona una opción',
      ph_message: 'Cuéntanos tu concepto, menú y necesidades',
      opt_trailer: 'Remolque',
      opt_truck: 'Camioneta',
      opt_van: 'Van',
      opt_conversion: 'Conversión',
      form_hint: 'Los campos con * son obligatorios. Al enviar se abrirá tu app de correo con el mensaje listo.',
      form_hint_wa: 'Los campos con * son obligatorios. Al enviar se abrirá WhatsApp o tu app de correo con el mensaje listo.',
      send_wa: 'Enviar por WhatsApp',
      send_mail: 'Enviar por correo',
      label_phone: 'Teléfono',
      label_email: 'Correo',
      label_whatsapp: 'WhatsApp',
      cta_whatsapp: 'Chatear ahora',
      label_location: 'Ubicación',
      footer_tag: 'Diseño, ingeniería y fabricación de food trucks en México.',
      footer_nav_aria: 'Pie de página',
      footer_top_aria: 'FTrucks, volver arriba',
      footer_rights: 'Todos los derechos reservados.',
      footer_compliance: 'Cumplimiento',
      footer_contact: 'Contacto',
      footer_top: 'Volver arriba',
      wa_aria: 'Escríbenos por WhatsApp',
      form_required: 'Por favor completa los campos requeridos.',
      form_email_invalid: 'El correo no tiene un formato válido.',
      form_opening_wa: 'Abriendo WhatsApp con tu solicitud…',
      form_opening_mail: 'Abriendo tu app de correo con tu solicitud…',
      msg_intro: 'Hola FTrucks, quiero una cotización.',
      msg_name: 'Nombre',
      msg_phone: 'Teléfono',
      msg_email: 'Correo',
      msg_type: 'Tipo de unidad',
      msg_details: 'Detalles',
      msg_subject: 'Solicitud de cotización'
    },
    en: {
      meta_title: 'FTrucks | Food Truck Manufacturing in Mexico',
      meta_desc: 'We build food trucks and food trailers in Mexico: design, sanitary, gas and electrical engineering, equipment and turnkey delivery.',
      lang_toggle_aria: 'Cambiar a español',
      skip: 'Skip to content',
      brand_aria: 'FTrucks, home',
      brand_tag: 'Food trucks made in Mexico',
      nav_aria: 'Main',
      menu_open: 'Open menu',
      menu_close: 'Close menu',
      nav_services: 'Services',
      nav_model: 'Model',
      nav_process: 'Process',
      nav_compliance: 'Compliance',
      nav_portfolio: 'Portfolio',
      nav_quote: 'Get a quote',
      hero_eyebrow: 'Food truck manufacturers · Mexico',
      hero_title: 'Professional-grade food truck manufacturing',
      hero_sub: 'We design and build turnkey units ready to operate and export in Mexico, with sanitary, gas, and electrical engineering and premium finishes.',
      cta_quote: 'Request a quote',
      cta_whatsapp_long: 'Message us on WhatsApp',
      cta_portfolio: 'See trucks we built',
      cta_email: 'Email us',
      trust_warranty: 'Factory warranty',
      trust_turnkey: 'Turnkey delivery',
      trust_foodgrade: 'Food-grade materials',
      hero_float: 'Stainless steel interior',
      alt_hero: 'Red food trailer with two open service windows and an air conditioning unit',
      alt_kitchen_detail: 'Stainless steel kitchen interior with red cabinets',
      services_eyebrow: 'What we do',
      services_title: 'Specialized services',
      services_sub: 'End-to-end solutions for your mobile food operation.',
      svc_design_title: 'Design and engineering',
      svc_design_desc: 'Sanitary layout, flows, equipment selection, and technical package for efficient operation.',
      svc_build_title: 'Custom manufacturing',
      svc_build_desc: 'Structure, coatings, electrical and gas installations with leak tests.',
      svc_equip_title: 'Professional equipment',
      svc_equip_desc: 'Griddle, fryers, refrigeration, hood and extraction with filters and optional suppression.',
      svc_paper_title: 'Paperwork assistance',
      svc_paper_desc: 'Technical documentation for registration, permits and operation in Mexico.',
      model_eyebrow: 'Featured model',
      model_title: '8 × 16 ft trailer',
      model_lead: 'A compact trailer with a service window and rear platform, built for griddle and fryer kitchens.',
      model_note: 'Size, equipment and price are defined with you in the quote.',
      model_equipment: 'Sample configuration',
      eq_griddle: 'Griddle',
      eq_burners: 'Burners',
      eq_fryer: 'Deep fryer',
      eq_bainmarie: 'Bain-marie',
      model_cta: 'Quote this model',
      alt_blue: 'Blue 8 × 16 ft food trailer with a service window and rear platform',
      process_eyebrow: 'How we work',
      process_title: 'Clear and transparent process',
      proc_1_title: 'Brief and proposal',
      proc_1_desc: 'We understand your concept and define scope, timeline and budget.',
      proc_2_title: 'Design and engineering',
      proc_2_desc: 'Drawings, equipment selection and validated layout.',
      proc_3_title: 'Production',
      proc_3_desc: 'Manufacturing, installations and finishes with quality control.',
      proc_4_title: 'Delivery and training',
      proc_4_desc: 'Functional tests and operational training.',
      compliance_eyebrow: 'Safety by design',
      compliance_title: 'Compliance and safety',
      compliance_sub: 'Best practices and applicable regulations for mobile food units in Mexico.',
      comp_food_title: 'Food grade',
      comp_food_desc: 'Stainless steel contact surfaces and washable coatings.',
      comp_elec_title: 'Electrical installation',
      comp_elec_desc: 'Conduits, protections and grounding for safe operation.',
      comp_gas_title: 'Gas installation',
      comp_gas_desc: 'Leak tests, valves and ventilation according to best practices.',
      comp_hyg_title: 'Hygiene and flow',
      comp_hyg_desc: 'Handwash sink, separated areas, storage and waste control.',
      compliance_note: 'Specific regulations may vary by municipality and point of operation requirements.',
      portfolio_eyebrow: 'Units we built',
      portfolio_title: 'Portfolio',
      portfolio_sub: 'Representative projects: trailers, finishes and interiors.',
      g_red: 'Red trailer with two open service windows',
      g_red_cap: 'Red trailer with awning windows',
      g_blue: 'Blue 8 × 16 ft trailer with rear platform',
      g_blue_cap: 'Blue 8 × 16 ft trailer',
      g_pink: 'Pink trailer with a menu board and the word Welcome on its side',
      g_pink_cap: 'Pink trailer',
      g_night: 'Red trailer at night with floodlights and LED edge lighting',
      g_night_cap: 'LED lighting at night',
      g_kitchen: 'Stainless steel kitchen interior with extraction hood and red cabinets',
      g_kitchen_cap: 'Stainless steel kitchen interior',
      g_orange: 'Orange-red trailer with a service window and tow hitch',
      g_orange_cap: 'Orange-red trailer',
      g_cta_kicker: 'Have a concept?',
      g_cta_title: 'Let’s design your unit',
      lb_aria: 'Gallery',
      lb_close: 'Close',
      lb_prev: 'Previous',
      lb_next: 'Next',
      cta2_title: 'Ready to launch your food truck?',
      cta2_sub: 'Tell us your concept and we will send a proposal with scope and timeline.',
      cta2_button: 'Talk to an advisor',
      contact_eyebrow: 'No-obligation quote',
      contact_title: 'Contact',
      contact_sub: 'Fill out the form and send us your request by email.',
      contact_sub_wa: 'Fill out the form and send us your request via WhatsApp or email.',
      ph_name: 'Name',
      ph_phone: 'Phone',
      ph_email: 'Email',
      ph_type: 'Unit type',
      ph_select: 'Choose an option',
      ph_message: 'Tell us your concept, menu and needs',
      opt_trailer: 'Trailer',
      opt_truck: 'Truck',
      opt_van: 'Van',
      opt_conversion: 'Conversion',
      form_hint: 'Fields marked * are required. Sending opens your email app with the message ready.',
      form_hint_wa: 'Fields marked * are required. Sending opens WhatsApp or your email app with the message ready.',
      send_wa: 'Send via WhatsApp',
      send_mail: 'Send via email',
      label_phone: 'Phone',
      label_email: 'Email',
      label_whatsapp: 'WhatsApp',
      cta_whatsapp: 'Chat now',
      label_location: 'Location',
      footer_tag: 'Food truck design, engineering and manufacturing in Mexico.',
      footer_nav_aria: 'Footer',
      footer_top_aria: 'FTrucks, back to top',
      footer_rights: 'All rights reserved.',
      footer_compliance: 'Compliance',
      footer_contact: 'Contact',
      footer_top: 'Back to top',
      wa_aria: 'Message us on WhatsApp',
      form_required: 'Please complete the required fields.',
      form_email_invalid: 'Email format is invalid.',
      form_opening_wa: 'Opening WhatsApp with your request…',
      form_opening_mail: 'Opening your email app with your request…',
      msg_intro: 'Hi FTrucks, I would like a quote.',
      msg_name: 'Name',
      msg_phone: 'Phone',
      msg_email: 'Email',
      msg_type: 'Unit type',
      msg_details: 'Details',
      msg_subject: 'Quote request'
    }
  };

  // ---------- Storage (safe) ----------
  const store = {
    get(k) { try { return window.localStorage.getItem(k); } catch (_) { return null; } },
    set(k, v) { try { window.localStorage.setItem(k, v); } catch (_) { /* ignore */ } }
  };

  let currentLang = store.get('lang') === 'en' ? 'en' : 'es';
  const t = (k) => (i18n[currentLang] && i18n[currentLang][k]) || i18n.es[k] || '';

  const langToggle = document.getElementById('langToggle');
  const menuToggle = document.getElementById('menuToggle');

  // ---------- Contact channels ----------
  if (WA_NUMBER) {
    document.querySelectorAll('.js-wa').forEach((el) => {
      if (el.tagName === 'A') el.href = `https://wa.me/${WA_NUMBER}`;
      el.hidden = false;
    });
    document.querySelectorAll('[data-hide-if-wa]').forEach((el) => { el.hidden = true; });
    document.querySelectorAll('.js-mail-btn').forEach((el) => el.classList.replace('btn-primary', 'btn-ghost'));
    document.querySelectorAll('[data-i18n="contact_sub"], [data-i18n="form_hint"]').forEach((el) => {
      el.dataset.i18n += '_wa';
    });
    document.body.classList.add('has-wa');
  }
  if (PHONE) {
    const tel = 'tel:' + PHONE.replace(/[^\d+]/g, '');
    document.querySelectorAll('.js-tel').forEach((el) => { el.href = tel; el.hidden = false; });
    document.querySelectorAll('.js-tel-text').forEach((el) => { el.textContent = PHONE; });
  }

  function applyI18n() {
    const dict = i18n[currentLang];
    document.documentElement.lang = currentLang;
    document.title = dict.meta_title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', dict.meta_desc);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = dict[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const v = dict[el.dataset.i18nAlt];
      if (v !== undefined) el.setAttribute('alt', v);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
      const v = dict[el.dataset.i18nAriaLabel];
      if (v !== undefined) el.setAttribute('aria-label', v);
    });
    if (langToggle) {
      langToggle.textContent = currentLang === 'es' ? 'EN' : 'ES';
      langToggle.setAttribute('aria-label', dict.lang_toggle_aria);
      langToggle.setAttribute('lang', currentLang === 'es' ? 'en' : 'es');
    }
    if (menuToggle) {
      const open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-label', open ? dict.menu_close : dict.menu_open);
    }
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      store.set('lang', currentLang);
      applyI18n();
    });
  }
  if (currentLang !== 'es' || WA_NUMBER) applyI18n();
  else if (langToggle) langToggle.setAttribute('lang', 'en');

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ---------- Header ----------
  const header = document.querySelector('.site-header');
  const onScroll = () => { if (header) header.classList.toggle('is-scrolled', window.scrollY > 12); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Mobile menu ----------
  const nav = document.getElementById('siteNav');
  function setMenu(open) {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? t('menu_close') : t('menu_open'));
    nav.classList.toggle('is-open', open);
    if (header) header.classList.toggle('menu-open', open);
  }
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') { setMenu(false); menuToggle.focus(); }
    });
    window.matchMedia('(min-width: 861px)').addEventListener('change', (mq) => { if (mq.matches) setMenu(false); });
  }

  // ---------- Reveal on scroll ----------
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');
  if (!reduce && 'IntersectionObserver' in window) {
    // stagger siblings inside the same parent
    const groups = new Map();
    reveals.forEach((el) => {
      const n = groups.get(el.parentElement) || 0;
      el.style.setProperty('--d', `${Math.min(n, 5) * 80}ms`);
      groups.set(el.parentElement, n + 1);
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  // ---------- Model preset ----------
  document.querySelectorAll('[data-preset]').forEach((a) => {
    a.addEventListener('click', () => {
      const sel = document.getElementById('f-tipo');
      if (sel) sel.value = a.dataset.preset;
    });
  });

  // ---------- Lightbox ----------
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCap = document.getElementById('lbCap');
  const items = Array.from(document.querySelectorAll('.tile-btn[data-full]'));
  let idx = 0;
  let lastFocus = null;

  function show(i) {
    idx = (i + items.length) % items.length;
    const btn = items[idx];
    const img = btn.querySelector('img');
    const cap = btn.querySelector('.tile-cap span');
    lbImg.src = btn.dataset.full;
    lbImg.alt = img ? img.alt : '';
    lbCap.textContent = cap ? cap.textContent : (img ? img.alt : '');
  }
  if (lb && typeof lb.showModal === 'function' && items.length) {
    items.forEach((btn, i) => btn.addEventListener('click', () => {
      lastFocus = btn;
      show(i);
      lb.showModal();
      document.getElementById('lbClose').focus();
    }));
    document.getElementById('lbClose').addEventListener('click', () => lb.close());
    document.getElementById('lbPrev').addEventListener('click', () => show(idx - 1));
    document.getElementById('lbNext').addEventListener('click', () => show(idx + 1));
    lb.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') show(idx - 1);
      else if (e.key === 'ArrowRight') show(idx + 1);
    });
    lb.addEventListener('click', (e) => { if (e.target === lb || e.target.classList.contains('lb-inner')) lb.close(); });
    lb.addEventListener('close', () => { lbImg.removeAttribute('src'); if (lastFocus) lastFocus.focus(); });
  } else {
    // Fallback: open the image directly
    items.forEach((btn) => btn.addEventListener('click', () => window.open(btn.dataset.full, '_blank', 'noopener')));
  }

  // ---------- Quote form (WhatsApp / mailto) ----------
  const form = document.getElementById('quoteForm');
  const formMsg = document.getElementById('formMsg');
  function showMsg(text, kind) {
    if (!formMsg) return;
    formMsg.textContent = text;
    formMsg.className = 'form-msg' + (kind ? ` is-${kind}` : '');
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const channel = (e.submitter && e.submitter.dataset.channel) || (WA_NUMBER ? 'wa' : 'mail');
      const fields = ['nombre', 'telefono', 'email', 'tipo'].map((n) => form.elements[n]);
      let firstBad = null;
      fields.forEach((el) => {
        const bad = !String(el.value || '').trim();
        el.setAttribute('aria-invalid', String(bad));
        if (bad && !firstBad) firstBad = el;
      });
      if (firstBad) { showMsg(t('form_required'), 'error'); firstBad.focus(); return; }

      const email = form.elements.email;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        email.setAttribute('aria-invalid', 'true');
        showMsg(t('form_email_invalid'), 'error');
        email.focus();
        return;
      }

      const sel = form.elements.tipo;
      const tipo = sel.options[sel.selectedIndex] ? sel.options[sel.selectedIndex].textContent : sel.value;
      const lines = [
        t('msg_intro'),
        '',
        `${t('msg_name')}: ${form.elements.nombre.value.trim()}`,
        `${t('msg_phone')}: ${form.elements.telefono.value.trim()}`,
        `${t('msg_email')}: ${email.value.trim()}`,
        `${t('msg_type')}: ${tipo}`
      ];
      const details = form.elements.mensaje.value.trim();
      if (details) lines.push(`${t('msg_details')}: ${details}`);
      const body = lines.join('\n');

      if (channel === 'mail') {
        showMsg(t('form_opening_mail'), 'ok');
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(t('msg_subject'))}&body=${encodeURIComponent(body)}`;
      } else {
        showMsg(t('form_opening_wa'), 'ok');
        const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(body)}`;
        const win = window.open(url, '_blank');
        if (win) win.opener = null;
        else window.location.href = url;
      }
    });
    form.addEventListener('input', (e) => {
      if (e.target.getAttribute('aria-invalid') === 'true' && String(e.target.value).trim()) {
        e.target.setAttribute('aria-invalid', 'false');
      }
    });
  }
})();
