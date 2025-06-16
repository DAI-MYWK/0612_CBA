// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    easing: "ease-out",
    once: true,
    offset: 100,
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Hero floating elements animation enhancement
function createFloatingParticles() {
  const heroBackground = document.querySelector(".hero-background");
  if (!heroBackground) return;

  for (let i = 0; i < 5; i++) {
    const particle = document.createElement("div");
    particle.className = "floating-particle";
    particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 20 + 10}px;
            height: ${Math.random() * 20 + 10}px;
            background: radial-gradient(circle, rgba(245, 101, 0, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: floatParticle ${
              Math.random() * 10 + 15
            }s linear infinite;
            pointer-events: none;
        `;
    heroBackground.appendChild(particle);
  }
}

// Add CSS for floating particles
const style = document.createElement("style");
style.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize floating particles
createFloatingParticles();

// Service card expand functionality
document.querySelectorAll(".service-expand").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const serviceType = this.getAttribute("data-service");
    showServiceDetails(serviceType);
  });
});

function showServiceDetails(serviceType) {
  const serviceDetails = {
    email: {
      title: "メールマーケティング詳細",
      content: `
                <h3>サービス概要</h3>
                <p>潜在層の顧客に対して、プロダクト・サービスの情報、特典、ニュースレター、プロモーションキャンペーンなどを送信します。</p>
                
                <h3>特徴</h3>
                <ul>
                    <li>業界最安値での提供</li>
                    <li>顧客層に合わせたカスタマイズ対応</li>
                    <li>効果検証まで一貫してサポート</li>
                </ul>
                
                <h3>適用場面</h3>
                <ul>
                    <li>ABテストの効果検証ができていない</li>
                    <li>開封率/クリック率/反応率の数値が向上しない</li>
                    <li>どの時間帯に送るのがいいのか分からない</li>
                </ul>
            `,
    },
    form: {
      title: "問い合わせフォーム営業詳細",
      content: `
                <h3>サービス概要</h3>
                <p>企業の「問い合わせ」ページやフォームからセールス文を送信します。</p>
                
                <h3>特徴</h3>
                <ul>
                    <li>反応率の高い時間帯、曜日、顧客属性を分析</li>
                    <li>ABテストを繰り返し、最適な文章を作成</li>
                    <li>フットワーク軽く迅速な対応</li>
                </ul>
                
                <h3>適用場面</h3>
                <ul>
                    <li>どんな文章構成でフォーム営業をしたらよいか分からない</li>
                    <li>どの時間帯、曜日で行うのが相応しいかノウハウがない</li>
                </ul>
            `,
    },
    materials: {
      title: "営業資料作成詳細",
      content: `
                <h3>サービス概要</h3>
                <p>提案書、プレゼンテーション資料、製品カタログなど、営業活動の効率化や成約率の向上に寄与する資料を作成します。</p>
                
                <h3>特徴</h3>
                <ul>
                    <li>「売上」に直結する資料をゼロベースから作成</li>
                    <li>論理・視覚の両面で最適な資料を作成</li>
                    <li>レスポンス早く柔軟に対応</li>
                </ul>
                
                <h3>適用場面</h3>
                <ul>
                    <li>一番刺さりやすいキーワードが特定できておらず、訴求ポイントが掴めてない</li>
                    <li>無駄な情報が入ってしまい、結果として分かりにくい資料を使っている</li>
                </ul>
            `,
    },
    sales: {
      title: "商談同席・代行詳細",
      content: `
                <h3>サービス概要</h3>
                <p>営業担当者として実際に商談を実施。商談に同席し、進行に対するフィードバックも可能です。</p>
                
                <h3>特徴</h3>
                <ul>
                    <li>1商談から対応可能</li>
                    <li>商談録画を提供し社内教育に活用可能</li>
                    <li>幅広い業界経験を活かした知見を提供</li>
                </ul>
                
                <h3>適用場面</h3>
                <ul>
                    <li>リード獲得は出来ているが、成約率が低い、もしくはリードタイムが長い</li>
                    <li>想定している単価より、低い単価で成約してしまっている</li>
                    <li>商談対応できるメンバーが少ない</li>
                </ul>
            `,
    },
    consulting: {
      title: "営業コンサルティング詳細",
      content: `
                <h3>サービス概要</h3>
                <p>現状の営業体制をベースに、課題に応じたソリューションを提供。営業組織の0→1から内製化まで伴奏型でサポートします。</p>
                
                <h3>特徴</h3>
                <ul>
                    <li>営業組織の立ち上げから支援</li>
                    <li>営業上の課題を整理し、最適な打ち手で支援</li>
                    <li>内製化まで実施し、継続的に売上が伸びる体制を構築</li>
                    <li>伴奏型の継続的サポート</li>
                </ul>
                
                <h3>適用場面</h3>
                <ul>
                    <li>営業組織を0から立ち上げたい</li>
                    <li>なにが課題かも分かっていない</li>
                    <li>社内に営業経験者がいない</li>
                    <li>抜本的な営業改革をコストを抑えて行いたい</li>
                </ul>
            `,
    },
    outbound: {
      title: "アウトバウンドコール詳細",
      content: `
                <h3>サービス概要</h3>
                <p>見込み客や既存顧客に加え、全く接点のない企業に対しても積極的に電話をかけ、ビジネスチャンスを創出します。</p>
                
                <h3>特徴</h3>
                <ul>
                    <li>ターゲット選定〜実働支援（トークスクリプトなどの納品物有り）まで対応</li>
                    <li>潜在顧客の要望、ニーズをまとめてプロダクトやサービスの改善にも活かせるセールスデータを提供</li>
                    <li>フットワーク軽く迅速な対応</li>
                </ul>
                
                <h3>適用場面</h3>
                <ul>
                    <li>無駄なコールが増えていると感じる</li>
                    <li>リストがすぐに枯渇してしまう</li>
                    <li>トークスクリプトの抜本的改善を図りたい</li>
                    <li>切り返しが少なく取りこぼしが多い</li>
                </ul>
            `,
    },
  };

  const details = serviceDetails[serviceType];
  if (details) {
    showModal(details.title, details.content);
  }
}

// Modal functionality
function showModal(title, content) {
  // Remove existing modal if any
  const existingModal = document.querySelector(".service-modal");
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal
  const modal = document.createElement("div");
  modal.className = "service-modal";
  modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
            <div class="modal-footer">
                <a href="#contact" class="cta-button primary" onclick="closeModal()">
                    <span>お問い合わせ</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;

  // Add modal styles
  const modalStyle = document.createElement("style");
  modalStyle.textContent = `
        .service-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
        }
        
        .modal-content {
            position: relative;
            background: white;
            border-radius: 25px;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
            animation: modalSlideIn 0.3s ease-out;
        }
        
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-50px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 2rem 1rem;
            border-bottom: 1px solid var(--light-gray);
        }
        
        .modal-header h2 {
            color: var(--accent-blue);
            margin: 0;
            font-size: 1.8rem;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 2rem;
            color: var(--text-medium);
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .modal-close:hover {
            background: var(--light-gray);
            color: var(--accent-blue);
        }
        
        .modal-body {
            padding: 2rem;
        }
        
        .modal-body h3 {
            color: var(--accent-blue);
            margin: 2rem 0 1rem 0;
            font-size: 1.3rem;
        }
        
        .modal-body h3:first-child {
            margin-top: 0;
        }
        
        .modal-body p {
            line-height: 1.7;
            margin-bottom: 1.5rem;
            color: var(--text-medium);
        }
        
        .modal-body ul {
            margin-bottom: 1.5rem;
            padding-left: 1.5rem;
        }
        
        .modal-body li {
            margin-bottom: 0.8rem;
            color: var(--text-medium);
            line-height: 1.6;
        }
        
        .modal-footer {
            padding: 1rem 2rem 2rem;
            text-align: center;
        }
    `;
  document.head.appendChild(modalStyle);
  document.body.appendChild(modal);

  // Close modal events
  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal.querySelector(".modal-overlay").addEventListener("click", closeModal);

  // Close on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.querySelector(".service-modal");
  if (modal) {
    modal.style.animation = "modalSlideOut 0.3s ease-in forwards";
    setTimeout(() => {
      modal.remove();
    }, 300);
  }
}

// Add modal slide out animation
const slideOutStyle = document.createElement("style");
slideOutStyle.textContent = `
    @keyframes modalSlideOut {
        from {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        to {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
        }
    }
`;
document.head.appendChild(slideOutStyle);

// Parallax effect for hero section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const heroImages = document.querySelectorAll(".hero-img");
  const floatingElements = document.querySelectorAll(".float-element");

  heroImages.forEach((img, index) => {
    const speed = 0.3 + index * 0.1;
    img.style.transform = `translateY(${scrolled * speed}px)`;
  });

  floatingElements.forEach((element, index) => {
    const speed = 0.1 + index * 0.05;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Intersection Observer for enhanced animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");

      // Add special effects for specific sections
      if (entry.target.classList.contains("service-card")) {
        const delay =
          Array.from(entry.target.parentNode.children).indexOf(entry.target) *
          100;
        setTimeout(() => {
          entry.target.style.animation = "serviceCardIn 0.8s ease-out forwards";
        }, delay);
      }
    }
  });
}, observerOptions);

// Observe elements for enhanced animations
document
  .querySelectorAll(".service-card, .challenge-item, .result-card")
  .forEach((el) => {
    observer.observe(el);
  });

// Add enhanced animation styles
const enhancedAnimationStyle = document.createElement("style");
enhancedAnimationStyle.textContent = `
    @keyframes serviceCardIn {
        from {
            opacity: 0;
            transform: translateY(30px) rotate(-2deg);
        }
        to {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
        }
    }
    
    .animate-in {
        animation-play-state: running !important;
    }
`;
document.head.appendChild(enhancedAnimationStyle);

// Text animation effects
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Enhanced hover effects for cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.animation = "serviceCardHover 0.3s ease-out forwards";
  });

  card.addEventListener("mouseleave", function () {
    this.style.animation = "serviceCardLeave 0.3s ease-out forwards";
  });
});

// Add card hover animations
const cardHoverStyle = document.createElement("style");
cardHoverStyle.textContent = `
    @keyframes serviceCardHover {
        to {
            transform: translateY(-15px) rotate(2deg) scale(1.02);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }
    }
    
    @keyframes serviceCardLeave {
        to {
            transform: translateY(0) rotate(0deg) scale(1);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
    }
`;
document.head.appendChild(cardHoverStyle);

// Loading animation
window.addEventListener("load", function () {
  document.body.classList.add("loaded");

  // Trigger initial animations
  setTimeout(() => {
    const heroTitle = document.querySelector(".hero-title");
    if (heroTitle) {
      heroTitle.style.animation = "heroTitleIn 1.5s ease-out forwards";
    }
  }, 500);
});

// Add loading styles
const loadingStyle = document.createElement("style");
loadingStyle.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--primary-white);
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body:not(.loaded)::after {
        content: 'C.B.A station';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        font-weight: 900;
        background: var(--gradient-accent);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        z-index: 100000;
        animation: loadingPulse 1.5s ease-in-out infinite;
    }
    
    @keyframes loadingPulse {
        0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
    }
    
    body.loaded::before,
    body.loaded::after {
        animation: fadeOut 0.5s ease-out forwards;
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
            visibility: hidden;
        }
    }
`;
document.head.appendChild(loadingStyle);

// Performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced scroll event
const debouncedScroll = debounce(() => {
  // Scroll animations
  const scrolled = window.pageYOffset;
  const heroSection = document.querySelector(".hero");

  if (heroSection) {
    const heroHeight = heroSection.offsetHeight;
    const scrollPercentage = Math.min(scrolled / heroHeight, 1);

    // Update hero elements based on scroll
    const heroImages = document.querySelectorAll(".hero-img");
    heroImages.forEach((img, index) => {
      const speed = 0.3 + index * 0.1;
      img.style.transform = `translateY(${scrolled * speed}px) scale(${
        1 - scrollPercentage * 0.1
      })`;
    });
  }
}, 10);

window.addEventListener("scroll", debouncedScroll);

console.log("C.B.A station - Website loaded successfully! 🚀");
