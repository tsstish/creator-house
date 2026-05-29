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

<section style={{ padding: "34px 0 58px" }}>
  <div
    style={{
      maxWidth: 1120,
      margin: "0 auto",
      position: "relative",
      borderRadius: 42,
      padding: "42px 44px",
      background: "rgba(255,255,255,.46)",
      border: "1px solid rgba(31,31,31,.06)",
      boxShadow: "0 24px 70px rgba(31,31,31,.045)",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        right: -120,
        top: -120,
        width: 360,
        height: 360,
        borderRadius: 999,
        background: "rgba(123,75,86,.07)",
        filter: "blur(50px)",
      }}
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "330px 1fr",
        gap: 42,
        alignItems: "center",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* LEFT */}

      <div>
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

        <h2
          className="display"
          style={{
            fontSize: 44,
            lineHeight: 1.06,
            letterSpacing: "-0.018em",
            margin: "0 0 18px",
          }}
        >
          Покажи бренду только то, что усиливает тебя
        </h2>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.55,
            color: "#625E58",
            margin: "0 0 24px",
          }}
        >
          Выбирай, какие данные попадут в профиль: аудитория, кейсы,
          цены, форматы рекламы и подтверждённая статистика.
        </p>

        <div style={{ display: "grid", gap: 10 }}>
          {[
            ["Аудитория", "возраст, география, площадки"],
            ["Кейсы", "результаты интеграций"],
            ["Цены", "форматы и условия рекламы"],
            ["Подтверждение", "больше доверия к цифрам"],
          ].map(([title, text], index) => (
            <div
              key={title}
              style={{
                display: "grid",
                gridTemplateColumns: "32px 1fr",
                gap: 12,
                alignItems: "center",
                padding: "12px 14px",
                borderRadius: 20,
                background:
                  index === 0
                    ? "#2F2D2A"
                    : "rgba(255,255,255,.58)",
                color: index === 0 ? "white" : "#1F1F1F",
                border: "1px solid rgba(31,31,31,.06)",
              }}
            >
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 999,
                  background:
                    index === 0
                      ? "rgba(255,255,255,.16)"
                      : "rgba(140,109,62,.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 700,
                  color: index === 0 ? "white" : "#8C6D3E",
                }}
              >
                0{index + 1}
              </div>

              <div>
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: index === 0 ? "#D7B47D" : "#7B4B56",
                    marginBottom: 3,
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: index === 0 ? "rgba(255,255,255,.72)" : "#625E58",
                  }}
                >
                  {text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}

      <div
        style={{
          position: "relative",
          minHeight: 430,
        }}
      >
        {/* floating cards */}

        <div
          style={{
            position: "absolute",
            left: 8,
            top: 22,
            width: 180,
            padding: 18,
            borderRadius: 26,
            background: "rgba(255,255,255,.72)",
            border: "1px solid rgba(31,31,31,.06)",
            boxShadow: "0 16px 44px rgba(31,31,31,.055)",
            zIndex: 4,
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: ".13em",
              textTransform: "uppercase",
              color: "#7B4B56",
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            выбрано
          </div>
          <div className="display" style={{ fontSize: 34, lineHeight: 1 }}>
            6 блоков
          </div>
          <div style={{ fontSize: 12, color: "#625E58", marginTop: 5 }}>
            для бренда
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 28,
            width: 190,
            padding: 18,
            borderRadius: 26,
            background: "#2F2D2A",
            color: "white",
            boxShadow: "0 18px 52px rgba(31,31,31,.13)",
            zIndex: 4,
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: ".13em",
              textTransform: "uppercase",
              color: "#D7B47D",
              marginBottom: 10,
            }}
          >
            brand ready
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.45, opacity: .8 }}>
            ссылка готова для отправки бренду
          </div>
        </div>

        {/* main mockup */}

        <div
          style={{
            width: 470,
            margin: "0 auto",
            borderRadius: 34,
            background: "rgba(255,255,255,.9)",
            border: "1px solid rgba(31,31,31,.06)",
            boxShadow: "0 28px 80px rgba(31,31,31,.09)",
            padding: 18,
            position: "relative",
            zIndex: 3,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#7B4B56",
                  fontWeight: 700,
                  marginBottom: 5,
                }}
              >
                Creator House Builder
              </div>
              <div style={{ fontSize: 14, color: "#625E58" }}>
                публичный профиль для бренда
              </div>
            </div>

            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 16,
                background:
                  "linear-gradient(135deg,#e8d5cf,#7B4B56)",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr .9fr",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                minHeight: 150,
                borderRadius: 22,
                background:
                  "linear-gradient(180deg,#e8d5cf 0%, #b9897f 48%, #332326 100%)",
                padding: 20,
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <div className="display" style={{ fontSize: 34, lineHeight: 1 }}>
                Mira
              </div>
              <div style={{ fontSize: 12, opacity: .88, marginTop: 5 }}>
                Beauty • TikTok • Instagram
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gap: 10,
              }}
            >
              <div
                style={{
                  background: "#f7f2ea",
                  borderRadius: 20,
                  padding: 14,
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "#7B4B56",
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  аудитория
                </div>
                <div className="display" style={{ fontSize: 28, lineHeight: 1 }}>
                  184K
                </div>
              </div>

              <div
                style={{
                  background: "#f7f2ea",
                  borderRadius: 20,
                  padding: 14,
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "#7B4B56",
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  охваты
                </div>
                <div className="display" style={{ fontSize: 28, lineHeight: 1 }}>
                  1.2M
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 10,
              marginBottom: 10,
            }}
          >
            {[
              ["Кейс", "2.4M views"],
              ["ER", "7.2%"],
              ["Цена", "от $1400"],
            ].map(([title, value]) => (
              <div
                key={title}
                style={{
                  background: "#f7f2ea",
                  borderRadius: 18,
                  padding: 13,
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "#7B4B56",
                    fontWeight: 700,
                    marginBottom: 7,
                  }}
                >
                  {title}
                </div>
                <div style={{ fontSize: 13, color: "#3F3A35" }}>
                  {value}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              padding: 14,
              borderRadius: 20,
              background: "#f7f2ea",
            }}
          >
            {["статистика", "кейсы", "цены", "форматы", "контакты"].map((item) => (
              <span
                key={item}
                style={{
                  padding: "8px 11px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,.72)",
                  fontSize: 12,
                  color: "#4B4741",
                }}
              >
                {item}
              </span>
            ))}
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
