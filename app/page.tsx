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
        <section
  style={{
    padding: "40px 0 120px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "minmax(420px, 0.9fr) minmax(620px, 1fr)",
      gap: 70,
      alignItems: "center",
    }}
  >
    {/* LEFT */}

    <div>
      <div className="section-kicker">
        Creator House вместо PDF
      </div>

      <h2
        className="section-title"
        style={{
          maxWidth: 480,
          marginBottom: 22,
        }}
      >
        Всё, что нужно
        <br />
        бренду —
        <br />
        в одном месте
      </h2>

      <p
        className="section-text"
        style={{
          maxWidth: 470,
          marginBottom: 36,
        }}
      >
        Не нужно собирать ссылки, отдельно
        отправлять статистику и вручную
        объяснять условия сотрудничества.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          maxWidth: 420,
        }}
      >
        {[
          "Красивый публичный профиль",
          "Актуальная аналитика и охваты",
          "Кейсы и рекламные предложения",
          "Ссылки на все площадки",
        ].map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "16px 18px",
              background: "rgba(255,255,255,.56)",
              border: "1px solid rgba(31,31,31,.06)",
              borderRadius: 22,
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#8C6D3E",
                flexShrink: 0,
              }}
            />

            <span
              style={{
                fontSize: 15,
                color: "#3F3A35",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT MOCKUP */}

    <div
      style={{
        position: "relative",
        height: 620,
      }}
    >
      {/* background glow */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 70% 30%, rgba(205,168,118,.24), transparent 44%)",
        }}
      />

      {/* floating mini card */}

      <div
        style={{
          position: "absolute",
          right: 0,
          top: 34,
          width: 180,
          background: "rgba(255,255,255,.72)",
          border: "1px solid rgba(31,31,31,.05)",
          borderRadius: 24,
          padding: 18,
          backdropFilter: "blur(12px)",
          boxShadow: "0 18px 44px rgba(31,31,31,.06)",
          zIndex: 3,
        }}
      >
        <div
          style={{
            fontSize: 12,
            color: "#8C6D3E",
            letterSpacing: ".14em",
            textTransform: "uppercase",
            marginBottom: 10,
            fontWeight: 700,
          }}
        >
          Instagram
        </div>

        <div
          className="display"
          style={{
            fontSize: 32,
            marginBottom: 4,
          }}
        >
          128K
        </div>

        <div
          style={{
            fontSize: 13,
            color: "#625E58",
          }}
        >
          аудитория
        </div>
      </div>

      {/* main mockup */}

      <div
        style={{
          position: "absolute",
          left: 40,
          top: 40,
          width: 560,
          borderRadius: 34,
          background: "rgba(255,255,255,.82)",
          border: "1px solid rgba(31,31,31,.06)",
          boxShadow: "0 26px 80px rgba(31,31,31,.08)",
          overflow: "hidden",
          backdropFilter: "blur(18px)",
        }}
      >
        {/* top image */}

        <div
          style={{
            height: 260,
            background:
              "linear-gradient(180deg,#ddb172 0%, #a86b29 48%, #24170d 100%)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 76% 24%, rgba(255,255,255,.38), transparent 22%), linear-gradient(180deg, transparent 40%, rgba(0,0,0,.74))",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: 30,
              bottom: 28,
              color: "white",
            }}
          >
            <div
              className="display"
              style={{
                fontSize: 52,
                lineHeight: 1,
                marginBottom: 10,
              }}
            >
              Alexandra
            </div>

            <div
              style={{
                fontSize: 16,
                opacity: .92,
              }}
            >
              Lifestyle блогер • TikTok • Instagram
            </div>
          </div>
        </div>

        {/* content */}

        <div
          style={{
            padding: 24,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 12,
              marginBottom: 14,
            }}
          >
            {[
              ["6.8%", "вовлечённость"],
              ["248K", "просмотров"],
              ["14", "кейсов"],
            ].map(([value, label]) => (
              <div
                key={value}
                style={{
                  background: "#f7f2ea",
                  borderRadius: 20,
                  padding: "18px 16px",
                }}
              >
                <div
                  className="display"
                  style={{
                    fontSize: 30,
                    marginBottom: 6,
                  }}
                >
                  {value}
                </div>

                <div
                  style={{
                    fontSize: 13,
                    color: "#625E58",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            <div
              style={{
                background: "rgba(246,241,232,.8)",
                borderRadius: 20,
                padding: 18,
              }}
            >
              <div
                style={{
                  color: "#8C6D3E",
                  fontSize: 12,
                  marginBottom: 8,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                }}
              >
                Рекламные форматы
              </div>

              <div
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#3F3A35",
                }}
              >
                Reels
                <br />
                Stories
                <br />
                TikTok integrations
              </div>
            </div>

            <div
              style={{
                background: "#2F2D2A",
                color: "white",
                borderRadius: 20,
                padding: 18,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  color: "#D7B47D",
                  fontSize: 12,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                сотрудничество
              </div>

              <div
                className="display"
                style={{
                  fontSize: 42,
                  lineHeight: 1,
                  marginBottom: 16,
                }}
              >
                от $950
              </div>

              <button
                style={{
                  border: "none",
                  background: "white",
                  color: "#1F1F1F",
                  borderRadius: 999,
                  padding: "12px 16px",
                  fontSize: 14,
                  fontWeight: 650,
                }}
              >
                Предложить интеграцию
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </section>
    </main>
  );
}
