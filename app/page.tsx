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
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: "0.36em",
                  lineHeight: 1,
                }}
              >
                CREATOR HOUSE
              </div>

              <div style={{ fontSize: 14, color: "#8C6D3E", marginTop: 7 }}>
                professional creator profile
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <button
              style={{
                border: "none",
                background: "transparent",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Войти
            </button>

            <button
              style={{
                border: "none",
                background: "#2F2D2A",
                color: "white",
                borderRadius: 999,
                padding: "12px 24px",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
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
            <div
              style={{
                display: "inline-flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(176,137,87,.2)",
                background: "rgba(255,255,255,.48)",
                marginBottom: 26,
              }}
            >
              <span
                style={{
                  color: "#8C6D3E",
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: ".04em",
                }}
              >
                Новый формат профессионального профиля
              </span>
            </div>

            <h1
              className="display"
              style={{
                fontSize: 54,
                lineHeight: 1.04,
                margin: "0 0 22px",
                maxWidth: 680,
              }}
            >
              Выгляди как
              <br />
              блогер, которого
              <br />
              выбирают бренды
            </h1>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.52,
                color: "#5f5b55",
                maxWidth: 620,
                margin: "0 0 28px",
              }}
            >
              Один красивый Creator House вместо PDF,
              <br />
              бесконечных сообщений и устаревших медиакитов.
            </p>

            <div style={{ display: "flex", gap: 16, marginBottom: 34 }}>
              <button
                style={{
                  border: "none",
                  background: "#2F2D2A",
                  color: "white",
                  borderRadius: 999,
                  padding: "10px 20px",
                  fontSize: 15,
                  fontWeight: 650,
                }}
              >
                Создать Creator House
              </button>

              <button
                style={{
                  border: "1px solid rgba(31,31,31,.2)",
                  background: "rgba(255,255,255,.44)",
                  borderRadius: 999,
                  padding: "10px 20px",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                Посмотреть пример
              </button>
            </div>

            <div style={{ display: "flex", gap: 34 }}>
              {["Проверено аналитикой", "Актуальная статистика", "Закрыто от посторонних"].map((text) => (
                <div key={text} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ width: 19, height: 19, border: "2px solid #8C6D3E", borderRadius: 7 }} />
                  <span style={{ fontSize: 14, lineHeight: 1.22, color: "#3e3b37", maxWidth: 128 }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative", height: 430 }}>
            <div
              style={{
                position: "absolute",
                right: -12,
                bottom: 18,
                width: 360,
                height: 390,
                borderRadius: 30,
                background: "#2F2D2A",
                transform: "rotate(8deg)",
                boxShadow: "0 22px 52px rgba(31,31,31,.16)",
                padding: 20,
                color: "white",
              }}
            >
              <div style={{ fontSize: 12, letterSpacing: ".14em", color: "#D8B885", fontWeight: 700 }}>
                DARK PREMIUM
              </div>
              <div style={{ position: "absolute", left: 20, bottom: 26 }}>
                <div style={{ height: 11, width: 190, borderRadius: 999, background: "rgba(255,255,255,.2)", marginBottom: 9 }} />
                <div style={{ height: 11, width: 140, borderRadius: 999, background: "rgba(255,255,255,.13)" }} />
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                left: -18,
                bottom: 42,
                width: 360,
                height: 400,
                borderRadius: 30,
                background: "linear-gradient(180deg,#fff2ee,#ead0c6)",
                transform: "rotate(-8deg)",
                boxShadow: "0 20px 48px rgba(159,105,88,.12)",
                padding: 20,
                overflow: "hidden",
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".12em", color: "#7B4A3F" }}>
                BEAUTY PROFILE
              </div>
              <div style={{ fontSize: 18, marginTop: 18, color: "#1f1f1f", fontWeight: 700 }}>
                Elena
              </div>
              <div
                style={{
                  position: "absolute",
                  left: 24,
                  bottom: 28,
                  width: 126,
                  height: 150,
                  borderRadius: "80px 80px 32px 32px",
                  background: "rgba(255,255,255,.42)",
                }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                right: 42,
                bottom: 24,
                width: 370,
                height: 410,
                borderRadius: 30,
                background: "#ffffff",
                transform: "rotate(-2deg)",
                boxShadow: "0 20px 48px rgba(31,31,31,.08)",
                padding: 20,
              }}
            >
              <div style={{ fontSize: 12, letterSpacing: ".13em", color: "#8C6D3E", fontWeight: 700 }}>
                TRAVEL STYLE
              </div>
              <div style={{ marginTop: 20, height: 130, borderRadius: 22, background: "#EFE5D6" }} />
            </div>

            <div
              style={{
                position: "absolute",
                right: 20,
                top: 24,
                width: 400,
                borderRadius: 32,
                background: "#ffffff",
                boxShadow: "0 26px 68px rgba(31,31,31,.13)",
                padding: 20,
                zIndex: 5,
              }}
            >
              <div
                style={{
                  color: "#8C6D3E",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: ".16em",
                  marginBottom: 14,
                }}
              >
                ТАК БРЕНД УВИДИТ ТЕБЯ
              </div>

              <div
                style={{
                  height: 210,
                  borderRadius: 24,
                  overflow: "hidden",
                  position: "relative",
                  marginBottom: 12,
                  background: "linear-gradient(180deg,#e9c48d 0%,#b47a31 48%,#25170d 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at 72% 22%, rgba(255,255,255,.46), transparent 24%), linear-gradient(180deg, transparent 42%, rgba(0,0,0,.72))",
                  }}
                />

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
                  <div style={{ color: "#8C6D3E", fontSize: 12, marginBottom: 4 }}>
                    Кейс
                  </div>
                  <strong style={{ fontSize: 13 }}>248K просмотров</strong>
                </div>
              </div>

              <div
                style={{
                  background: "#2F2D2A",
                  borderRadius: 18,
                  padding: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                }}
              >
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

                <button
                  style={{
                    border: "none",
                    background: "white",
                    color: "#1f1f1f",
                    borderRadius: 999,
                    padding: "11px 15px",
                    fontSize: 12,
                    fontWeight: 650,
                    lineHeight: 1.15,
                    minWidth: 126,
                  }}
                >
                  Предложить
                  <br />
                  сотрудничество
                </button>
              </div>
            </div>
          </div>
        </div>

        <section
  style={{
    padding: "34px 0 10px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "0.95fr 1.05fr",
      gap: 54,
      alignItems: "center",
    }}
  >
    <div>
      <div
        style={{
          display: "inline-flex",
          padding: "10px 18px",
          borderRadius: 999,
          border: "1px solid rgba(120,72,76,.16)",
          background: "rgba(255,255,255,.48)",
          color: "#7B4B56",
          fontSize: 13,
          fontWeight: 600,
          marginBottom: 18,
        }}
      >
        Мы понимаем твою боль
      </div>

      <h2
        className="display"
        style={{
          fontSize: 52,
          lineHeight: 0.98,
          margin: "0 0 18px",
          maxWidth: 420,
        }}
      >
        Знакомо?
      </h2>

      <p
        style={{
          fontSize: 16,
          lineHeight: 1.55,
          color: "#5F5B55",
          maxWidth: 430,
          margin: 0,
        }}
      >
        Ты делаешь хороший контент, но брендам всё равно сложно быстро понять:
        кто ты, какие у тебя цифры и сколько стоит сотрудничество.
      </p>
    </div>

    <div
      style={{
        position: "relative",
        height: 320,
      }}
    >
      {[
        {
          title: "Бренды редко отвечают",
          text: "В переписке сложно показать себя профессионально.",
          top: 0,
          left: 0,
        },
        {
          title: "Цены приходится объяснять",
          text: "Каждый раз вручную рассказывать условия рекламы.",
          top: 24,
          left: 220,
        },
        {
          title: "Статистика разбросана",
          text: "Скрины и кейсы лежат в разных местах.",
          top: 160,
          left: 40,
        },
        {
          title: "Всё выглядит слабее",
          text: "Даже хороший блог может выглядеть не дорого.",
          top: 182,
          left: 260,
        },
      ].map((item) => (
        <div
          key={item.title}
          style={{
            position: "absolute",
            top: item.top,
            left: item.left,
            width: 240,
            background: "rgba(255,255,255,.62)",
            border: "1px solid rgba(31,31,31,.06)",
            borderRadius: 26,
            padding: 22,
            backdropFilter: "blur(12px)",
            boxShadow: "0 18px 48px rgba(31,31,31,.045)",
          }}
        >
          <div
            style={{
              fontSize: 13,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#7B4B56",
              fontWeight: 700,
              marginBottom: 12,
              lineHeight: 1.35,
            }}
          >
            {item.title}
          </div>

          <div
            style={{
              fontSize: 15,
              lineHeight: 1.5,
              color: "#625E58",
            }}
          >
            {item.text}
          </div>
                </div>
      ))}
    </div>
  </div>
</section>

    </main>
  );
}
