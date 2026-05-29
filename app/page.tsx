export default function Home() {
  return (
    <main className="hero-page">
{/* COSMIC HERO */}

<section className="cosmic-hero">
  <div className="cosmic-shell">
    <div className="cosmic-orb one" />
    <div className="cosmic-orb two" />

    <div className="cosmic-grid">
      <div className="cosmic-left">
        <div>
          <div className="cosmic-kicker">
            professional creator profile
          </div>

          <h1 className="cosmic-title">
            Один <em>живой</em> профиль вместо PDF и хаоса
          </h1>

          <p className="cosmic-text">
            Собери Creator House, который бренд захочет открыть: цифры,
            кейсы, цены и предложения — в одной красивой ссылке.
          </p>

          <div className="cosmic-actions">
            <button className="cosmic-primary">Создать Creator House</button>
            <button className="cosmic-secondary">Посмотреть пример</button>
          </div>

          <div className="cosmic-proof">
            <span>Без PDF</span>
            <span>Актуальные данные</span>
            <span>Работает на телефоне</span>
          </div>
        </div>
      </div>

      <div className="cosmic-right">
        <div className="cosmic-tabs">
          <input id="cosmic-audience" name="cosmic-tabs" type="radio" defaultChecked />
          <input id="cosmic-cases" name="cosmic-tabs" type="radio" />
          <input id="cosmic-price" name="cosmic-tabs" type="radio" />
          <input id="cosmic-style" name="cosmic-tabs" type="radio" />

          <div className="cosmic-tab-row">
            <label htmlFor="cosmic-audience">Аудитория</label>
            <label htmlFor="cosmic-cases">Кейсы</label>
            <label htmlFor="cosmic-price">Цены</label>
            <label htmlFor="cosmic-style">Стиль</label>
          </div>

          <div className="cosmic-scene">
            {[
              {
                cls: "audience",
                name: "Mira",
                role: "Beauty creator • TikTok • Instagram",
                metrics: [
                  ["184K", "аудитория"],
                  ["82%", "женщины"],
                  ["34%", "США"],
                ],
                top: ["Аудитория", "Бренд сразу видит, кто тебя смотрит."],
                dark: ["Подтверждено", "Цифры можно отметить как проверенные."],
                number: "7.2%",
                numberLabel: "средний ER",
              },
              {
                cls: "cases",
                name: "Daniel",
                role: "Travel creator • Instagram • YouTube",
                metrics: [
                  ["2.4M", "views"],
                  ["14", "кейсов"],
                  ["312K", "hotel review"],
                ],
                top: ["Кейсы", "Покажи результаты прошлых интеграций."],
                dark: ["Больше доверия", "Не обещания, а реальные результаты."],
                number: "680K",
                numberLabel: "охваты за 30 дней",
              },
              {
                cls: "price",
                name: "Emma",
                role: "Family creator • Instagram • TikTok",
                metrics: [
                  ["$950", "Stories"],
                  ["$1400", "Reels"],
                  ["$2200", "package"],
                ],
                top: ["Цены", "Форматы и условия уже собраны."],
                dark: ["Без неловкости", "Бренд понимает бюджет заранее."],
                number: "3",
                numberLabel: "готовых пакета",
              },
              {
                cls: "style",
                name: "Alex",
                role: "Business creator • LinkedIn • Telegram",
                metrics: [
                  ["Dark", "режим"],
                  ["Brand", "версия"],
                  ["Link", "одна ссылка"],
                ],
                top: ["Стиль", "Профиль меняется под твою нишу."],
                dark: ["Не шаблон", "Creator House выглядит как твой формат."],
                number: "1",
                numberLabel: "ссылка для бренда",
              },
            ].map((item) => (
              <div key={item.cls} className={`cosmic-state ${item.cls}`}>
                <div
                  className="cosmic-float"
                  style={{
                    left: 18,
                    top: 120,
                    width: 210,
                  }}
                >
                  <div className="cosmic-float-title">{item.top[0]}</div>
                  <div className="cosmic-float-text">{item.top[1]}</div>
                </div>

                <div
                  className="cosmic-float"
                  style={{
                    left: 78,
                    top: 320,
                    width: 180,
                  }}
                >
                  <div className="cosmic-big-number">{item.number}</div>
                  <div className="cosmic-float-text" style={{ marginTop: 8 }}>
                    {item.numberLabel}
                  </div>
                </div>

                <div className="cosmic-main-card">
                  <div className="cosmic-cover">
                    <div className="cosmic-name">{item.name}</div>
                    <div className="cosmic-role">{item.role}</div>
                  </div>

                  <div className="cosmic-metrics">
                    {item.metrics.map(([value, label]) => (
                      <div key={label} className="cosmic-metric">
                        <div className="cosmic-value">{value}</div>
                        <div className="cosmic-label">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="cosmic-float dark"
                  style={{
                    right: 12,
                    bottom: 42,
                    width: 235,
                  }}
                >
                  <div className="cosmic-float-title">{item.dark[0]}</div>
                  <div className="cosmic-float-text">{item.dark[1]}</div>
                </div>

                <div className="cosmic-mini-strip">
                  <div className="cosmic-mini">◎</div>
                  <div className="cosmic-mini">↗</div>
                  <div className="cosmic-mini">●</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        <section className="pain-section">
          <div className="pain-layout">
            <div className="pain-cards">
              {[
                ["Бренды редко отвечают", "В переписке сложно показать себя профессионально."],
                ["Цены приходится объяснять", "Каждый раз вручную рассказывать условия рекламы."],
                ["Статистика разбросана", "Скрины и кейсы лежат в разных местах."],
                ["Всё выглядит слабее", "Даже хороший блог может выглядеть не дорого."],
              ].map(([title, text]) => (
                <div key={title} className="pain-card">
                  <div className="card-label">{title}</div>
                  <div className="card-text">{text}</div>
                </div>
              ))}
            </div>

            <div>
              <div className="section-kicker">Мы понимаем твою боль</div>
              <h2 className="section-title">Знакомо?</h2>
              <p className="section-text">
                Ты делаешь хороший контент, но брендам всё равно сложно быстро понять:
                кто ты, какие у тебя цифры и сколько стоит сотрудничество.
              </p>
            </div>
          </div>
        </section>

        {/* SHOWCASE SECTION */}

<section style={{ padding: "32px 0 52px" }}>
  <div
    style={{
      maxWidth: 1120,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(420px, 0.95fr) minmax(400px, 0.8fr)",
      gap: 42,
      alignItems: "center",
    }}
  >
    <div>
      <div
        style={{
          display: "inline-flex",
          padding: "10px 20px",
          borderRadius: 999,
          border: "1px solid rgba(176,137,87,.2)",
          background: "rgba(255,255,255,.48)",
          color: "#8C6D3E",
          fontSize: 15,
          fontWeight: 500,
          letterSpacing: ".04em",
          marginBottom: 20,
        }}
      >
        Creator House вместо PDF
      </div>

      <h2
        className="display"
        style={{
          fontSize: 42,
          lineHeight: 1.08,
          letterSpacing: "-0.018em",
          maxWidth: 540,
          margin: "0 0 18px",
        }}
      >
        Всё, что нужно бренду — по одной ссылке
      </h2>

      <p
        style={{
          fontSize: 16,
          lineHeight: 1.55,
          color: "#5F5B55",
          maxWidth: 500,
          margin: "0 0 24px",
        }}
      >
        Creator House превращает цифры, кейсы, форматы рекламы и цены в аккуратный
        профиль вместо PDF, скринов и длинных сообщений.
      </p>

      <div style={{ display: "grid", gap: 14, maxWidth: 500 }}>
        {[
          ["Без дизайнера", "Профиль выглядит профессионально сразу после заполнения."],
          ["Без маркетолога", "Цифры, кейсы и форматы собраны в понятную структуру."],
          ["Без PDF", "Больше не нужно пересобирать файлы, скрины и презентации."],
        ].map(([title, text]) => (
          <div
            key={title}
            style={{
              display: "grid",
              gridTemplateColumns: "16px 1fr",
              gap: 12,
              alignItems: "start",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 99,
                background: "#8C6D3E",
                marginTop: 7,
              }}
            />

            <div>
              <div
                style={{
                  fontSize: 13,
                  letterSpacing: ".13em",
                  textTransform: "uppercase",
                  color: "#7B4B56",
                  fontWeight: 700,
                  marginBottom: 5,
                }}
              >
                {title}
              </div>

              <div style={{ fontSize: 15, lineHeight: 1.5, color: "#625E58" }}>
                {text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <div
        style={{
          fontSize: 12,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: "#8C6D3E",
          fontWeight: 700,
          marginBottom: 14,
          textAlign: "center",
        }}
      >
        Так бренд увидит тебя
      </div>

      <div
        style={{
          width: 410,
          maxWidth: "100%",
          margin: "0 auto",
          borderRadius: 28,
          background: "rgba(255,255,255,.9)",
          border: "1px solid rgba(31,31,31,.06)",
          boxShadow: "0 22px 58px rgba(31,31,31,.08)",
          padding: 16,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#7B4B56", fontWeight: 700, marginBottom: 5 }}>
              Панель Creator House
            </div>
            <div style={{ fontSize: 14, color: "#625E58" }}>
              выбери, что увидит бренд
            </div>
          </div>

          <div style={{ padding: "8px 12px", borderRadius: 999, background: "rgba(115,191,120,.14)", color: "#4C8A55", fontSize: 12, fontWeight: 700 }}>
            готово
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9, marginBottom: 9 }}>
          {[
            ["Аудитория", "184K", "Instagram + TikTok"],
            ["ER", "7.2%", "средний"],
            ["Охваты", "1.2M", "за 30 дней"],
            ["Кейсы", "14", "интеграций"],
          ].map(([label, value, note]) => (
            <div key={label} style={{ background: "#f7f2ea", borderRadius: 16, padding: 14 }}>
              <div style={{ fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "#7B4B56", fontWeight: 700, marginBottom: 8 }}>
                {label}
              </div>
              <div className="display" style={{ fontSize: 25, lineHeight: 1, marginBottom: 5 }}>
                {value}
              </div>
              <div style={{ fontSize: 11, color: "#625E58" }}>{note}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "#f7f2ea", borderRadius: 17, padding: 14, marginBottom: 9 }}>
          <div style={{ fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "#7B4B56", fontWeight: 700, marginBottom: 10 }}>
            Что включить в профиль
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {["статистика", "кейсы", "цены", "форматы", "контакты"].map((item) => (
              <span key={item} style={{ padding: "7px 10px", borderRadius: 999, background: "rgba(255,255,255,.68)", fontSize: 12, color: "#4B4741" }}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div style={{ background: "#2F2D2A", borderRadius: 17, padding: 14, color: "white", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "#D7B47D", marginBottom: 7 }}>
              предложение
            </div>
            <div className="display" style={{ fontSize: 27, lineHeight: 1 }}>
              от $1400
            </div>
          </div>

          <button style={{ border: "none", background: "white", color: "#1F1F1F", borderRadius: 999, padding: "10px 12px", fontSize: 12, fontWeight: 650 }}>
            Сформировать
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
        
{/* HOW IT WORKS SECTION */}

<section style={{ padding: "22px 0 54px" }}>
  <div
    style={{
      maxWidth: 1120,
      margin: "0 auto",
      position: "relative",
      padding: "34px 38px",
      borderRadius: 36,
      background: "rgba(255,255,255,.44)",
      border: "1px solid rgba(31,31,31,.06)",
      boxShadow: "0 18px 48px rgba(31,31,31,.035)",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        left: 38,
        right: 38,
        top: "50%",
        height: 1,
        background: "linear-gradient(90deg, transparent, rgba(140,109,62,.28), transparent)",
      }}
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        gap: 44,
        alignItems: "center",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div>
        <div
          style={{
            color: "#8C6D3E",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Как это работает
        </div>

        <h2
          className="display"
          style={{
            fontSize: 34,
            lineHeight: 1.08,
            margin: 0,
          }}
        >
          От профиля до предложения бренду
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 18,
        }}
      >
        {[
          ["01", "Расскажи о себе", "Добавь соцсети, нишу и описание."],
          ["02", "Добавь цифры", "Покажи охваты, ER и аудиторию."],
          ["03", "Выбери данные", "Оставь только то, что важно бренду."],
          ["04", "Отправь ссылку", "Бренд видит готовое предложение."],
        ].map(([num, title, text], index) => (
          <div
            key={num}
            style={{
              position: "relative",
              padding: "18px 16px",
              borderRadius: 24,
              background: index % 2 === 0 ? "rgba(255,255,255,.68)" : "rgba(246,241,232,.72)",
              border: "1px solid rgba(31,31,31,.055)",
              transform: index % 2 === 0 ? "translateY(-8px)" : "translateY(12px)",
              boxShadow: "0 14px 34px rgba(31,31,31,.035)",
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 999,
                background: "#2F2D2A",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              {num}
            </div>

            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                marginBottom: 8,
                color: "#7B4B56",
                lineHeight: 1.25,
              }}
            >
              {title}
            </div>

            <div
              style={{
                fontSize: 13,
                lineHeight: 1.45,
                color: "#625E58",
              }}
            >
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

       {/* BUILDER SECTION */}

<section className="builder-showcase">
  <div className="builder-shell">
    <div className="builder-copy">
      <div
        style={{
          display: "inline-flex",
          padding: "10px 18px",
          borderRadius: 999,
          border: "1px solid rgba(176,137,87,.2)",
          background: "rgba(255,255,255,.5)",
          color: "#8C6D3E",
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: ".04em",
          marginBottom: 20,
        }}
      >
        Собери свой Creator House
      </div>

      <h2 className="display builder-title">
        Один продукт — разные профили под разные ниши
      </h2>

      <p className="builder-text">
        Beauty, travel, family или business — Creator House помогает показать
        именно те данные, которые важны бренду в твоей нише.
      </p>

      <div className="builder-note">
        {[
          ["Не один шаблон", "Профиль меняется под стиль и формат creator-а."],
          ["Больше доверия", "Цифры, кейсы и цены собраны в понятную структуру."],
          ["Одна ссылка", "Больше не нужно отправлять PDF, скрины и длинные сообщения."],
        ].map(([title, text]) => (
          <div key={title} className="builder-note-item">
            <span className="builder-dot" />
            <div>
              <div className="builder-note-title">{title}</div>
              <div className="builder-note-text">{text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="builder-stage">
      <div className="builder-tabs">
        <input id="tab-beauty" name="creator-tab" type="radio" defaultChecked />
        <input id="tab-travel" name="creator-tab" type="radio" />
        <input id="tab-family" name="creator-tab" type="radio" />
        <input id="tab-business" name="creator-tab" type="radio" />

        <div className="builder-tab-row">
          <label htmlFor="tab-beauty">Beauty</label>
          <label htmlFor="tab-travel">Travel</label>
          <label htmlFor="tab-family">Family</label>
          <label htmlFor="tab-business">Business</label>
        </div>

        <div className="builder-mockups">
          {[
            {
              cls: "beauty",
              name: "Mira",
              role: "Beauty creator • TikTok • Instagram",
              metrics: [
                ["184K", "аудитория"],
                ["7.2%", "ER"],
                ["1.2M", "охваты"],
              ],
              caseText: "2.4M views • beauty launch",
              price: "от $1400",
            },
            {
              cls: "travel",
              name: "Daniel",
              role: "Travel creator • Instagram • YouTube",
              metrics: [
                ["96K", "аудитория"],
                ["42%", "США"],
                ["680K", "охваты"],
              ],
              caseText: "hotel review • 312K views",
              price: "от $900",
            },
            {
              cls: "family",
              name: "Emma",
              role: "Family creator • Instagram • TikTok",
              metrics: [
                ["138K", "аудитория"],
                ["74%", "женщины"],
                ["9.1%", "ER"],
              ],
              caseText: "kids brand • 18K saves",
              price: "от $1100",
            },
            {
              cls: "business",
              name: "Alex",
              role: "Business creator • LinkedIn • Telegram",
              metrics: [
                ["52K", "аудитория"],
                ["31%", "founders"],
                ["4.8%", "ER"],
              ],
              caseText: "SaaS launch • 240 leads",
              price: "от $1800",
            },
          ].map((profile) => (
            <article key={profile.cls} className={`builder-profile ${profile.cls}`}>
              <div className="profile-card">
                <div className="profile-cover">
                  <div className="profile-name">{profile.name}</div>
                  <div className="profile-role">{profile.role}</div>
                </div>

                <div className="profile-grid">
                  {profile.metrics.map(([value, label]) => (
                    <div key={label} className="profile-metric">
                      <div className="profile-value">{value}</div>
                      <div className="profile-small">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="profile-bottom">
                  <div className="profile-wide">
                    <div className="profile-label">Кейс</div>
                    <div className="profile-small">{profile.caseText}</div>
                  </div>

                  <div className="profile-dark">
                    <div className="profile-label">Предложение</div>
                    <div className="profile-value">{profile.price}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
