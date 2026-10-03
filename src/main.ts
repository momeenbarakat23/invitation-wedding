import './style.css'

type Guest = { message: string }

const CONFIG = {
  groomName: 'مؤمن',
  brideName: 'رقية',
  weddingDate: '2026-10-30T17:00:00',
  dateLabel: '30 أكتوبر 2026',
  venue: 'قاعة جاردينا ',
  venueAddress: 'طريق كورنيش المعادي',
  mapsUrl: 'https://maps.app.goo.gl/X98qcpgBKJcZuJvv6',
  whatsappNumber: '+201103029663',
  music: 'assets/audio/wedding-music.mp3',
  heroImage: 'https://images.pexels.com/photos/34767570/pexels-photo-34767570.jpeg?auto=compress&cs=tinysrgb&w=1800',
  detailImage: '../public/Warm Wedding Memory Triptych.png',
}

const guests: Record<string, Guest> = {
  أحمد: { message: 'مستنيينك يا أحمد تنورنا وتشاركنا فرحتنا ❤️' },
  محمد: { message: 'وجودك يا محمد هيكمل فرحتنا ❤️' },
  سارة: { message: 'مستنيينك يا سارة تشاركينا أجمل يوم في حياتنا ❤️' },
}

const icon = (name: string) => {
  const icons: Record<string, string> = {
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    music: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l10-2v13M9 18a3 3 0 1 1-3-3 3 3 0 0 1 3 3Zm10-2a3 3 0 1 1-3-3 3 3 0 0 1 3 3Z"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    map: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>',
    rings: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="12" r="5.5"/><circle cx="15" cy="12" r="5.5"/></svg>',
    hall: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18M5 21v-9l7-5 7 5v9M8 21v-5h8v5M3 12h18M7 8V5h3v2M14 7V4h3v5"/></svg>',
    share: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5"/></svg>',
    user: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0 1 14 0"/></svg>',
  }
  return icons[name] ?? ''
}

const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `
  <div class="petals" aria-hidden="true"></div>
  <section class="welcome" id="welcome" aria-labelledby="welcome-title">
  <p class="eyebrow">بسم الله الرحمن الرحيم</p>
    <div class="welcome__ornament">مؤمن <svg class="heart-pulse" viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" stroke-width="1.5" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    رقية</div>
    <div class="welcome__content">
      <h1 id="welcome-title">دعوتكم لحضور<br><em>حفل زفافنا</em></h1>
      <div class="welcome__rule"><span></span><svg class="heart-pulse" viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" stroke-width="1.5" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg><span></span></div>
      <p class="welcome__hint">اكتب اسمك لنجهز لك رسالة خاصة</p>
      <form class="guest-form" id="guest-form">
        <label for="guest-name">اسمك الكريم</label>
        <input id="guest-name" name="name" type="text" autocomplete="name" placeholder="اكتب اسمك" maxlength="60" required>
        <button class="button button--gold" type="submit">افتح دعوتي <span>←</span></button>
      </form>
      <p class="welcome__date">30 أكتوبر 2026 <span>•</span> الخامسه مساءً</p>
    </div>
    <div class="welcome__footer">بكل حب، مؤمن و رقية</div>
  </section>

  <div class="site-shell" id="invitation" aria-hidden="true">
    <header class="hero" id="home">
      <div class="hero__image"></div><div class="hero__shade"></div>
      <div class="topbar">
        <button class="icon-button" id="menu-toggle" aria-label="فتح القائمة" aria-expanded="false">${icon('menu')}</button>
        <button class="icon-button music-button" id="music-toggle" aria-label="تشغيل الموسيقى" aria-pressed="false">${icon('music')}</button>
      </div>
      <div class="hero__content reveal reveal--visible">
        <p class="eyebrow">دعوتكم لحضور حفل زفافنا</p>
        <h1><span>${CONFIG.groomName}</span>
        <small style=" margin: 15px auto;"><svg class="heart-pulse" viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" stroke-width="1.5" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></small>
        <span>${CONFIG.brideName}</span></h1>
        <div class="gold-rule"><i></i><span></span><i></i></div>
        <p class="hero__copy">بكل حب وامتنان، نتشرف بدعوتكم<br>لحضور يومنا المميز</p>
        <div class="personal-note" id="personal-note"></div>
        <a href="#countdown" class="scroll-cue" aria-label="انتقل إلى العد التنازلي"><span></span></a>
      </div>
      <div class="hero__monogram">M <span>♡</span> R</div>
    </header>

    <div class="nav-overlay" id="nav-overlay" aria-hidden="true">
      <button class="nav-close" id="nav-close" aria-label="إغلاق القائمة">${icon('close')}</button>
      <p class="eyebrow">مؤمن ♡ رقية</p>
      <nav>
        <a href="#home">الرئيسية <small>01</small></a>
        <a href="#countdown">العد التنازلي <small>02</small></a>
        <a href="#details">تفاصيل الحفل <small>03</small></a>
        <a href="#location">الموقع <small>04</small></a>
        <a href="#rsvp">تأكيد الحضور <small>05</small></a>
      </nav>
    </div>

    <main>
      <section class="countdown section-light" id="countdown">
        <div class="section-heading reveal"><p class="eyebrow">نقترب من أجمل يوم</p><h2>متبقي على يوم فرحنا</h2><div class="heading-line"></div></div>
        <div class="timer" id="timer" aria-label="العد التنازلي">
          <div class="timer-card reveal"><strong id="days">00</strong><span>يوم</span></div>
          <div class="timer-card reveal"><strong id="hours">00</strong><span>ساعة</span></div>
          <div class="timer-card reveal"><strong id="minutes">00</strong><span>دقيقة</span></div>
          <div class="timer-card reveal"><strong id="seconds">00</strong><span>ثانية</span></div>
        </div>
        <p class="countdown-done" id="countdown-done">اليوم هو يوم فرحنا <span>♡</span></p>
      </section>

      <section class="details section-light" id="details">
        <div class="section-heading reveal"><p class="eyebrow">كل ما يهمكم معرفته</p><h2>تفاصيل الحفل</h2><div class="heading-line"></div></div>
        <div class="detail-grid">
          <article class="detail-card reveal"><div class="detail-icon">${icon('rings')}</div><p class="detail-label">الموعد</p><h3>30 أكتوبر</h3><p>الساعة 5:00 مساءً</p></article>
          <article class="detail-card reveal"><div class="detail-icon">${icon('calendar')}</div><p class="detail-label">الحدث</p><h3>كتب كتاب + فرح</h3></article>
          <article class="detail-card reveal"><div class="detail-icon">${icon('hall')}</div><p class="detail-label">القاعة</p><h3>${CONFIG.venue}</h3><p>${CONFIG.venueAddress}</p></article>
        </div>
      </section>

      <section class="location section-dark" id="location">
        <div class="location__photo" style="background-image:url('${CONFIG.detailImage}')"></div><div class="location__shade"></div>
        <div class="location__content reveal"><p class="eyebrow">نلتقي هناك</p><h2>قاعة جاردينا</h2><p>${CONFIG.venueAddress}</p><a class="button button--burgundy" id="map-link" href="#" target="_blank" rel="noopener">${icon('map')} عرض الموقع على الخريطة</a></div>
      </section>

      <section class="rsvp section-light" id="rsvp">
        <div class="rsvp__flourish">❧</div><div class="section-heading reveal"><p class="eyebrow">فرحتنا لا تكتمل إلا بكم</p><h2>وجودكم يسعدنا</h2><div class="heading-line"></div></div>
        <p class="rsvp__copy reveal">نحن بانتظاركم لتشاركونا فرحتنا<br>وتكونوا جزءاً من أجمل لحظات حياتنا</p>
        <button class="button button--outline reveal" id="rsvp-button">${icon('user')} تأكيد الحضور <span>(RSVP)</span></button>
        <button class="share-button reveal" id="share-button">${icon('share')} مشاركة الدعوة</button>
      </section>
    </main>

    <footer class="footer section-dark"><div class="footer__rose">✦</div><p class="footer__names">${CONFIG.groomName}        
    <svg class="heart-pulse" viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" stroke-width="1.5" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
 ${CONFIG.brideName}</p><p>${CONFIG.dateLabel}</p><small>ننتظركم لنشارككم فرحتنا ♡</small></footer>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
    <audio id="wedding-audio" loop preload="none" src="${CONFIG.music}"></audio>
  </div>
`

const $ = <T extends Element>(selector: string) => document.querySelector<T>(selector)!
const welcome = $('#welcome')
const invitation = $('#invitation')
const guestForm = $('#guest-form') as HTMLFormElement
const guestInput = $('#guest-name') as HTMLInputElement
const personalNote = $('#personal-note')
const audio = $('#wedding-audio') as HTMLAudioElement
const toast = $('#toast')
const date = new Date(CONFIG.weddingDate).getTime()
let activeGuest = ''

function getMessage(name: string): string {
  const guest = guests[name]
  return guest?.message ?? `وجودك يا ${name} هيكون من أجمل تفاصيل يومنا ❤️`
}

function showInvitation(name: string): void {
  activeGuest = name.trim()
  personalNote.innerHTML = `<strong>أهلاً يا ${escapeHtml(activeGuest)} ♡</strong><span>${escapeHtml(getMessage(activeGuest))}</span>`
  welcome.classList.add('welcome--closing')
  window.setTimeout(() => {
    invitation.classList.add('site-shell--visible')
    invitation.setAttribute('aria-hidden', 'false')
    welcome.setAttribute('aria-hidden', 'true')
    document.body.classList.add('is-open')
  }, 650)
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character] ?? character)
}

function updateCountdown(): void {
  const remaining = Math.max(0, date - Date.now())
  const values = [Math.floor(remaining / 86400000), Math.floor((remaining / 3600000) % 24), Math.floor((remaining / 60000) % 60), Math.floor((remaining / 1000) % 60)]
    ;['days', 'hours', 'minutes', 'seconds'].forEach((id, index) => {
      const element = $<HTMLElement>(`#${id}`)
      const value = String(values[index]).padStart(2, '0')
      if (element.textContent !== value) {
        element.classList.remove('tick')
        void element.offsetWidth
        element.classList.add('tick')
        element.textContent = value
      }
    })
  if (remaining === 0) {
    $('#countdown-done').classList.add('countdown-done--visible')
    $('#timer').classList.add('timer--hidden')
  }
}

function generateInvitationLink(name: string): string {
  const url = new URL(window.location.href)
  url.search = ''
  url.searchParams.set('name', name.trim())
  return url.toString()
}

function openRsvp(): void {
  const message = `السلام عليكم، أنا ${activeGuest || 'ضيفكم الكريم'} وأؤكد حضوري حفل زفاف مؤمن ورقية يوم 30 أكتوبر 2026 ❤️`
  const number = CONFIG.whatsappNumber.replace(/\D/g, '')
  const href = number && number !== 'YOUR_WHATSAPP_NUMBER' ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : `https://wa.me/?text=${encodeURIComponent(message)}`
  window.open(href, '_blank', 'noopener')
}

function showToast(message: string): void {
  toast.textContent = message
  toast.classList.add('toast--visible')
  window.setTimeout(() => toast.classList.remove('toast--visible'), 2600)
}

guestForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = guestInput.value.trim()
  if (name) showInvitation(name)
})

const urlName = new URLSearchParams(window.location.search).get('name')
if (urlName?.trim()) {
  guestInput.value = urlName.trim()
  window.setTimeout(() => showInvitation(urlName.trim()), 350)
}

$('#map-link').addEventListener('click', (event) => {
  if (CONFIG.mapsUrl === 'YOUR_GOOGLE_MAPS_LINK') {
    event.preventDefault()
    showToast('أضف رابط موقع القاعة في إعدادات الدعوة')
  } else {
    $('#map-link').setAttribute('href', CONFIG.mapsUrl)
  }
})

$('#rsvp-button').addEventListener('click', openRsvp)
$('#share-button').addEventListener('click', async () => {
  const url = generateInvitationLink(activeGuest)
  if (navigator.share) {
    await navigator.share({ title: 'دعوة زفاف مؤمن ورقية', text: 'يسعدنا حضورك ومشاركتنا فرحتنا ♡', url }).catch(() => undefined)
  } else {
    await navigator.clipboard?.writeText(url)
    showToast('تم نسخ رابط الدعوة ♡')
  }
})

const navOverlay = $('#nav-overlay')
const toggleMenu = (open: boolean) => {
  navOverlay.classList.toggle('nav-overlay--open', open)
  navOverlay.setAttribute('aria-hidden', String(!open))
  $('#menu-toggle').setAttribute('aria-expanded', String(open))
  document.body.classList.toggle('menu-open', open)
}
$('#menu-toggle').addEventListener('click', () => toggleMenu(true))
$('#nav-close').addEventListener('click', () => toggleMenu(false))
navOverlay.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => toggleMenu(false)))

$('#music-toggle').addEventListener('click', async () => {
  const button = $('#music-toggle')
  if (audio.paused) {
    await audio.play().catch(() => showToast('أضف ملف الموسيقى داخل مجلد assets/audio'))
    if (!audio.paused) {
      button.classList.add('is-playing')
      button.setAttribute('aria-pressed', 'true')
    }
  } else {
    audio.pause()
    button.classList.remove('is-playing')
    button.setAttribute('aria-pressed', 'false')
  }
})

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('reveal--visible')
    observer.unobserve(entry.target)
  }
}), { threshold: 0.14 })
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

for (let index = 0; index < 16; index += 1) {
  const petal = document.createElement('span')
  petal.className = 'petal'
  petal.style.setProperty('--left', `${Math.random() * 100}%`)
  petal.style.setProperty('--delay', `${Math.random() * 12}s`)
  petal.style.setProperty('--duration', `${12 + Math.random() * 13}s`)
  petal.style.setProperty('--rotation', `${Math.random() * 180 - 90}deg`)
  $('.petals').appendChild(petal)
}

updateCountdown()
window.setInterval(updateCountdown, 1000)

export { CONFIG, generateInvitationLink }
