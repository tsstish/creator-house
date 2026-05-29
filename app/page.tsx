export default function Home() {
  return (
    <main className="hero-page">
      <section
        style={{
          maxWidth: 1460,
          margin: "0 auto",
          padding: "22px 64px 24px",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 22,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 38, height: 38, position: "relative", color: "#6F5A3A" }}>
              <span style={{ position: "absolute", left: 0, top: 0, width: 12, height: 12, borderLeft: "3px solid currentColor", borderTop: "3px solid currentColor" }} />
              <span style={{ position: "absolute", left: 0, bottom: 0, width: 12, height: 12, borderLeft: "3px solid currentColor", borderBottom: "3px solid currentColor" }} />
              <span style={{ position: "absolute", right: 0, top: 0, width: 12, height: 12, borderTop: "3px solid currentColor" }} />
              <span style={{ position: "absolute", right: 0, top: 0, height: 38, borderRight: "3px solid currentColor" }} />
              <span style={{ position: "absolute", right: 0, bottom: 0, width: 12, height: 12, borderBottom: "3px solid currentColor" }} />
              <span style={{ position: "absolute", left: "50%", top: "50%", width: 7, height: 7, borderRadius: 99, background: "currentColor", transform: "translate(-50%,-50%)" }} />
            </div>

            <div>
              <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "0.36em", lineHeight: 1 }}>
                CREATOR HOUSE
              </div>
              <div style={{ fontSize: 14, color: "#8C6D3E", marginTop: 7 }}>
                professional creator profile
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <button style={{ border: "none", background: "transparent", fontSize: 16, fontWeight: 600 }}>
              Войти
            </button>

            <button style={{ border: "none", background: "#2F2D2A", color: "white", borderRadius: 999, padding: "12px 24px", fontSize: 15, fontWeight: 600 }}>
              Создать профиль
            </button>
          </div>
        </header>

        <div
          style={{
            minHeight: "72vh",
            display: "grid",
            gridTemplateColumns: "minmax(520px, 1fr) 470px",
            gap: 34,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ display: "inline-flex", padding: "10px 20px", borderRadius: 999, border: "1px solid rgba(176,137,87,.2)", background: "rgba(255,255,255,.48)", marginBottom: 26 }}>
              <span style={{ color: "#8C6D3E", fontSize: 15, fontWeight: 500, letterSpacing: ".04em" }}>
                Новый формат профессионального профиля
              </span>
            </div>

            <h1 className="display" style={{ fontSize: 54, lineHeight: 1.04, margin: "0 0 22px", maxWidth: 680 }}>
              Выгляди как
              <br />
              блогер, которого
              <br />
              выбирают бренды
            </h1>

            <p style={{ fontSize: 16, lineHeight: 1.52, color: "#5f5b55", maxWidth: 620, margin: "0 0 28px" }}>
              Один красивый Creator House вместо PDF,
              <br />
              бесконечных сообщений и устаревших медиакитов.
            </p>

            <div style={{ display: "flex", gap: 16, marginBottom: 34 }}>
              <button style={{ border: "none", background: "#2F2D2A", color: "white", borderRadius: 999, padding: "10px 20px", fontSize: 15, fontWeight: 650 }}>
                Создать Creator House
              </button>

              <button style={{ border: "1px solid rgba(31,31,31,.2)", background: "rgba(255,255,255,.44)", borderRadius: 999, padding: "10px 20px", fontSize: 15, fontWeight: 600 }}>
                Посмотреть пример
              </button>
            </div>

            <div style={{ display: "flex", gap: 34 }}>
              {["Проверено аналитикой", "Актуальная статистика", "Закрыто от посторонних"].map((text) => (
                <div key={text} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ width: 19, height: 19, border: "2px solid #8C6D3E", borderRadius: 7 }} />
                  <span style={{ fontSize: 14, lineHeight: 1.22, color: "#3e3b37", maxWidth: 128 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative", height: 430 }}>
            <div style={{ position: "absolute", right: -12, bottom: 18, width: 360, height: 390, borderRadius: 30, background: "#2F2D2A", transform: "rotate(8deg)", boxShadow: "0 22px 52px rgba(31,31,31,.16)", padding: 20, color: "white" }}>
              <div style={{ fontSize: 12, letterSpacing: ".14em", color: "#D8B885", fontWeight: 700 }}>
                DARK PREMIUM
              </div>
            </div>

            <div style={{ position: "absolute", left: -18, bottom: 42, width: 360, height: 400, borderRadius: 30, background: "linear-gradient(180deg,#fff2ee,#ead0c6)", transform: "rotate(-8deg)", boxShadow: "0 20px 48px rgba(159,105,88,.12)", padding: 20, overflow: "hidden" }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".12em", color: "#7B4A3F" }}>
                BEAUTY PROFILE
              </div>
              <div style={{ fontSize: 18, marginTop: 18, color: "#1f1f1f", fontWeight: 700 }}>
                Elena
              </div>
            </div>

            <div style={{ position: "absolute", right: 42, bottom: 24, width: 370, height: 410, borderRadius: 30, background: "#ffffff", transform: "rotate(-2deg)", boxShadow: "0 20px 48px rgba(31,31,31,.08)", padding: 20 }}>
              <div style={{ fontSize: 12, letterSpacing: ".13em", color: "#8C6D3E", fontWeight: 700 }}>
                TRAVEL STYLE
              </div>
              <div style={{ marginTop: 20, height: 130, borderRadius: 22, background: "#EFE5D6" }} />
            </div>

            <div style={{ position: "absolute", right: 20, top: 24, width: 400, borderRadius: 32, background: "#ffffff", boxShadow: "0 26px 68px rgba(31,31,31,.13)", padding: 20, zIndex: 5 }}>
              <div style={{ color: "#8C6D3E", fontSize: 12, fontWeight: 700, letterSpacing: ".16em", marginBottom: 14 }}>
                ТАК БРЕНД УВИДИТ ТЕБЯ
              </div>

              <div style={{ height: 210, borderRadius: 24, overflow: "hidden", position: "relative", marginBottom: 12, background: "linear-gradient(180deg,#e9c48d 0%,#b47a31 48%,#25170d 100%)" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 72% 22%, rgba(255,255,255,.46), transparent 24%), linear-gradient(180deg, transparent 42%, rgba(0,0,0,.72))" }} />

                <div style={{ position: "absolute", left: 22, bottom: 22, color: "white" }}>
                  <div className="display" style={{ fontSize: 38, lineHeight: 1, marginBottom: 6 }}>
                    Alexandra
                  </div>
                  <div style={{ fontSize: 14, opacity: 0.9 }}>
                    Lifestyle блогер • Instagram • TikTok
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                {[
                  ["128K", "аудитория"],
                  ["6.8%", "вовлечённость"],
                ].map(([value, label]) => (
                  <div key={value} style={{ background: "#f6f1e8", borderRadius: 16, padding: "12px 14px" }}>
                    <div className="display" style={{ fontSize: 25, lineHeight: 1, marginBottom: 4 }}>
                      {value}
                    </div>
                    <div style={{ fontSize: 12, color: "#625e58" }}>{label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                <div style={{ background: "rgba(246,241,232,.76)", borderRadius: 16, padding: "11px 13px" }}>
                  <div style={{ display: "flex", gap: 7, alignItems: "center", color: "#8C6D3E", fontSize: 12, marginBottom: 4 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 99, background: "#73bf78", boxShadow: "0 0 0 6px rgba(115,191,120,.16)" }} />
                    Проверено
                  </div>
                  <strong style={{ fontSize: 13 }}>аналитикой</strong>
                </div>

                <div style={{ background: "rgba(246,241,232,.76)", borderRadius: 16, padding: "11px 13px" }}>
                  <div style={{ color: "#8C6D3E", fontSize: 12, marginBottom: 4 }}>Кейс</div>
                  <strong style={{ fontSize: 13 }}>248K просмотров</strong>
                </div>
              </div>

              <div style={{ background: "#2F2D2A", borderRadius: 18, padding: 12, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                <div>
                  <div style={{ color: "#d8b885", fontSize: 11, lineHeight: 1.25, marginBottom: 4 }}>
                    Рекламное
                    <br />
                    предложение
                  </div>
                  <div className="display" style={{ color: "white", fontSize: 24, lineHeight: 1 }}>
                    от $950
                  </div>
                </div>

                <button style={{ border: "none", background: "white", color: "#1f1f1f", borderRadius: 999, padding: "11px 15px", fontSize: 12, fontWeight: 650, lineHeight: 1.15, minWidth: 126 }}>
                  Предложить
                  <br />
                  сотрудничество
                </button>
              </div>
            </div>
          </div>
        </div>

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

<section style={{ padding: "64px 0 100px" }}>
  <div style={{ textAlign: "center", marginBottom: 42 }}>
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
        marginBottom: 24,
      }}
    >
      Creator House вместо PDF
    </div>

    <h2
      className="display"
      style={{
        fontSize: 54,
        lineHeight: 1.08,
        letterSpacing: "-0.018em",
        maxWidth: 760,
        margin: "0 auto 18px",
      }}
    >
      Бренд видит не просто блог,
      <br />а готовое предложение
    </h2>

    <p
      style={{
        fontSize: 16,
        lineHeight: 1.55,
        color: "#5F5B55",
        maxWidth: 620,
        margin: "0 auto",
      }}
    >
      Без дизайнера, маркетолога и PDF — все важные цифры, кейсы и условия
      сотрудничества собраны в одном аккуратном профиле.
    </p>
  </div>

  <div
    style={{
      position: "relative",
      minHeight: 620,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {/* floating card 1 */}
    <div
      style={{
        position: "absolute",
        left: "9%",
        top: 72,
        width: 210,
        padding: 22,
        borderRadius: 26,
        background: "rgba(255,255,255,.74)",
        border: "1px solid rgba(31,31,31,.06)",
        boxShadow: "0 18px 48px rgba(31,31,31,.055)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          fontSize: 12,
          letterSpacing: ".13em",
          textTransform: "uppercase",
          color: "#7B4B56",
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        Подтверждено
      </div>
      <div style={{ fontSize: 15, lineHeight: 1.45, color: "#625E58" }}>
        Метрики можно отметить как проверенные статистикой.
      </div>
    </div>

    {/* floating card 2 */}
    <div
      style={{
        position: "absolute",
        right: "8%",
        top: 92,
        width: 210,
        padding: 22,
        borderRadius: 26,
        background: "rgba(255,255,255,.74)",
        border: "1px solid rgba(31,31,31,.06)",
        boxShadow: "0 18px 48px rgba(31,31,31,.055)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          fontSize: 12,
          letterSpacing: ".13em",
          textTransform: "uppercase",
          color: "#7B4B56",
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        Аудитория
      </div>
      <div className="display" style={{ fontSize: 34, lineHeight: 1, marginBottom: 8 }}>
        184K
      </div>
      <div style={{ fontSize: 14, color: "#625E58" }}>Instagram</div>
    </div>

    {/* floating card 3 */}
    <div
      style={{
        position: "absolute",
        left: "7%",
        bottom: 92,
        width: 230,
        padding: 22,
        borderRadius: 26,
        background: "rgba(255,255,255,.74)",
        border: "1px solid rgba(31,31,31,.06)",
        boxShadow: "0 18px 48px rgba(31,31,31,.055)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          fontSize: 12,
          letterSpacing: ".13em",
          textTransform: "uppercase",
          color: "#7B4B56",
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        Что показать бренду
      </div>
      <div style={{ fontSize: 15, lineHeight: 1.55, color: "#625E58" }}>
        аудитория · кейсы · охваты · цены · форматы
      </div>
    </div>

    {/* floating card 4 */}
    <div
      style={{
        position: "absolute",
        right: "9%",
        bottom: 82,
        width: 220,
        padding: 22,
        borderRadius: 26,
        background: "#2F2D2A",
        color: "white",
        boxShadow: "0 18px 48px rgba(31,31,31,.12)",
      }}
    >
      <div
        style={{
          fontSize: 12,
          letterSpacing: ".13em",
          textTransform: "uppercase",
          color: "#D7B47D",
          marginBottom: 12,
        }}
      >
        Предложение
      </div>
      <div className="display" style={{ fontSize: 36, lineHeight: 1, marginBottom: 10 }}>
        от $1400
      </div>
      <div style={{ fontSize: 13, opacity: 0.82 }}>готово для бренда</div>
    </div>

    {/* center mockup */}
    <div
      style={{
        width: 440,
        borderRadius: 34,
        overflow: "hidden",
        background: "rgba(255,255,255,.9)",
        border: "1px solid rgba(31,31,31,.06)",
        boxShadow: "0 30px 90px rgba(31,31,31,.1)",
        position: "relative",
        zIndex: 5,
      }}
    >
      <div
        style={{
          height: 150,
          position: "relative",
          background:
            "linear-gradient(180deg,#e8d5cf 0%, #b9897f 48%, #332326 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 78% 24%, rgba(255,255,255,.36), transparent 23%), linear-gradient(180deg, transparent 42%, rgba(0,0,0,.72))",
          }}
        />

        <div style={{ position: "absolute", left: 22, bottom: 18, color: "white" }}>
          <div className="display" style={{ fontSize: 40, lineHeight: 1, marginBottom: 6 }}>
            Mira
          </div>
          <div style={{ fontSize: 13, opacity: 0.92 }}>
            Beauty creator • TikTok • Instagram
          </div>
        </div>
      </div>

      <div style={{ padding: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 10,
            padding: "9px 11px",
            borderRadius: 15,
            background: "rgba(246,241,232,.72)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 99,
              background: "#73bf78",
              boxShadow: "0 0 0 6px rgba(115,191,120,.14)",
            }}
          />
          <span style={{ fontSize: 11, color: "#4B4741" }}>
            Статистика подтверждена Creator House
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 8,
            marginBottom: 8,
          }}
        >
          {[
            ["184K", "аудитория"],
            ["7.2%", "ER"],
            ["1.2M", "охваты"],
            ["82%", "женщины"],
          ].map(([value, label]) => (
            <div
              key={value}
              style={{
                background: "#f7f2ea",
                borderRadius: 15,
                padding: "11px 9px",
              }}
            >
              <div className="display" style={{ fontSize: 21, lineHeight: 1, marginBottom: 4 }}>
                {value}
              </div>
              <div style={{ fontSize: 10, color: "#625E58" }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
          <div style={{ background: "#f7f2ea", borderRadius: 16, padding: 13 }}>
            <div
              style={{
                fontSize: 10,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "#7B4B56",
                marginBottom: 8,
                fontWeight: 700,
              }}
            >
              Аудитория
            </div>
            <div style={{ fontSize: 12, lineHeight: 1.45, color: "#3F3A35" }}>
              82% женщины
              <br />
              25–34 — 38%
              <br />
              США — 34%
            </div>
          </div>

          <div style={{ background: "#f7f2ea", borderRadius: 16, padding: 13 }}>
            <div
              style={{
                fontSize: 10,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "#7B4B56",
                marginBottom: 8,
                fontWeight: 700,
              }}
            >
              Кейсы
            </div>
            <div style={{ fontSize: 12, lineHeight: 1.45, color: "#3F3A35" }}>
              2.4M views
              <br />
              Beauty launch
              <br />
              14 интеграций
            </div>
          </div>
        </div>

        <div
          style={{
            background: "#2F2D2A",
            borderRadius: 17,
            padding: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            color: "white",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 10,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "#D7B47D",
                marginBottom: 6,
              }}
            >
              предложение
            </div>
            <div className="display" style={{ fontSize: 28, lineHeight: 1 }}>
              от $1400
            </div>
          </div>

          <button
            style={{
              border: "none",
              background: "white",
              color: "#1F1F1F",
              borderRadius: 999,
              padding: "10px 13px",
              fontSize: 12,
              fontWeight: 650,
            }}
          >
            Связаться
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
      </section>
    </main>
  );
}
