
import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="site-layout">
    <aside class="sidebar">
      <a class="logo" href="#home"><span>✿</span> yogiva</a>

      <nav class="side-nav" aria-label="Main navigation">
        <a class="active" href="#home"><span>01</span> Home</a>
        <a href="#classes"><span>02</span> Classes</a>
        <a href="#poses"><span>03</span> Yoga Poses</a>
        <a href="#routine"><span>04</span> Daily Routine</a>
      </nav>

      <div class="sidebar-note">
        <span class="leaf-mark">♧</span>
        <p>BETTER<br>MOVEMENT<br>A CALMER<br>YOU</p>
      </div>

      <div class="social-links" aria-label="Social links">
        <a href="#home" aria-label="Instagram">◎</a>
        <a href="#home" aria-label="Video channel">▶</a>
        <a href="#home" aria-label="Music">◉</a>
      </div>
    </aside>

    <main class="page-content">
      <div class="announcement">
        <span>✳</span>
        <p>YOUR JOURNEY TO WELLNESS <b>•</b> A LITTLE MOVEMENT, A LITTLE MINDFULNESS, AND A MOMENT JUST FOR YOU.</p>
        <a class="nav-button" href="#classes">Start Learning <span>→</span></a>
      </div>

      <section class="hero" id="home">
        <div class="hero-content">
          <p class="eyebrow">YOGA&nbsp; / &nbsp;MINDFULNESS&nbsp; / &nbsp;WELLNESS</p>
          <h1>Find your balance. Discover your <em>flow.</em></h1>
          <p class="description">
            A little movement, a little mindfulness, and a moment just for you.
            Begin your yoga journey with Yogiva.
          </p>
          <a class="primary-button" href="#classes">Explore Classes <span>→</span></a>
          <div class="hero-underline"></div>
        </div>

        <div class="hero-photo">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1100&q=85"
            alt="A peaceful yoga and meditation practice"
          />
          <div class="photo-sun"></div>
          <div class="photo-caption">BREATHE<br>MOVE<br>GROW</div>
          <div class="botanical-mark">♧</div>
        </div>
      </section>

      <section class="feature-row" aria-label="Explore Yogiva">
        <a class="feature-card" href="#classes">
          <span class="number">01</span>
          <h2>YOGA CLASSES</h2>
          <p>From beginner to advanced,<br>find the right class for your journey.</p>
          <span class="feature-arrow">⟶</span>
        </a>

        <a class="feature-card" href="#poses">
          <span class="number">02</span>
          <h2>YOGA POSES</h2>
          <p>Explore poses that build strength,<br>flexibility and inner peace.</p>
          <span class="feature-arrow">⟶</span>
        </a>

        <a class="feature-card" href="#routine">
          <span class="number">03</span>
          <h2>DAILY ROUTINE</h2>
          <p>Small habits. Big changes.<br>Make wellness part of your day.</p>
          <span class="feature-arrow">⟶</span>
        </a>

        <a class="journey-card" href="#routine">
          <span>YOUR<br>WELLNESS<br>JOURNEY<br>STARTS HERE</span>
          <b>→</b>
        </a>
      </section>

      <section class="section classes" id="classes">
        <div class="section-heading">
          <p class="eyebrow">FIND YOUR FLOW</p>
          <h2>A practice for <em>everybody.</em></h2>
          <p>Start where you are. Discover a comfortable way to explore yoga.</p>
        </div>
        <div class="card-grid">
          <article class="class-card green">
            <span class="number">01 / BEGIN HERE</span>
            <div class="symbol">☘</div>
            <h3>Yoga for Beginners</h3>
            <p>Discover foundational poses and breathing awareness at your own pace.</p>
            <a href="#poses">Explore basics ↗</a>
          </article>
          <article class="class-card peach">
            <span class="number">02 / FIND YOUR RHYTHM</span>
            <div class="symbol">☼</div>
            <h3>Mindful Movement</h3>
            <p>Explore gentle movements that connect your attention with your practice.</p>
            <a href="#poses">Explore movement ↗</a>
          </article>
          <article class="class-card lavender">
            <span class="number">03 / GROW YOUR PRACTICE</span>
            <div class="symbol">✳</div>
            <h3>Balance & Focus</h3>
            <p>Discover balance-focused poses and develop body awareness step by step.</p>
            <a href="#poses">Explore balance ↗</a>
          </article>
        </div>
      </section>

      <section class="section poses" id="poses">
        <div class="section-heading">
          <p class="eyebrow">THE YOGIVA LIBRARY</p>
          <h2>Meet your <em>next pose.</em></h2>
          <p>Get familiar with these common yoga poses.</p>
        </div>
        <div class="card-grid">
          <article class="pose-card">
            <div class="pose-art tree">♧</div>
            <div class="pose-content">
              <span class="tag">BEGINNER</span>
              <h3>Tree Pose</h3>
              <p>Explore balance and steady focus.</p>
            </div>
          </article>
          <article class="pose-card">
            <div class="pose-art mountain">△</div>
            <div class="pose-content">
              <span class="tag">BEGINNER</span>
              <h3>Mountain Pose</h3>
              <p>Practice standing alignment and awareness.</p>
            </div>
          </article>
          <article class="pose-card">
            <div class="pose-art child">☾</div>
            <div class="pose-content">
              <span class="tag">GENTLE</span>
              <h3>Child's Pose</h3>
              <p>A gentle resting pose for your practice.</p>
            </div>
          </article>
        </div>
        <p class="safety-note">Move comfortably, use support if needed, and stop if a movement causes pain.</p>
      </section>

      <section class="routine" id="routine">
        <div class="routine-intro">
          <p class="eyebrow">A MOMENT FOR YOURSELF</p>
          <h2>Your daily dose of <em>calm.</em></h2>
          <p>Make space for a short, comfortable practice that fits your day.</p>
        </div>
        <div class="routine-box">
          <div class="routine-item"><span>01</span><div><strong>Arrive & breathe</strong><small>Settle in and notice your breathing.</small></div><b>2 min</b></div>
          <div class="routine-item"><span>02</span><div><strong>Gentle movement</strong><small>Explore comfortable movements.</small></div><b>5 min</b></div>
          <div class="routine-item"><span>03</span><div><strong>Pause & reflect</strong><small>Finish with a quiet moment.</small></div><b>3 min</b></div>
          <button id="routine-button">Begin your routine ↗</button>
          <p id="routine-message" aria-live="polite"></p>
        </div>
      </section>

      <footer>
        <a class="logo" href="#home">✿ yogiva</a>
        <p>Find your balance. Discover your flow.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  </div>
`

document.querySelector('#routine-button').addEventListener('click', () => {
  document.querySelector('#routine-message').textContent =
    'Your routine starts here. Find a comfortable space and begin when you feel ready.'
})
