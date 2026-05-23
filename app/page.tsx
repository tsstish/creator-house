export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F6F1E8",
        color: "#1F1F1F",
      }}
    >
      {/* Верхняя панель */}
      <header
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "24px 24px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "-0.04em",
          }}
        >
          Creator House
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <button
            style={{
              border: "none",
              background: "transparent",
              fontSize: "15px",
              cursor: "pointer",
              color: "#5D584F",
            }}
          >
            Войти
          </button>

          <button
            style={{
              border: "none",
              borderRadius: "999px",
              background: "#1F1F1F",
              color: "white",
              padding: "12px 18px",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Создать профиль
          </button>
        </div>
      </header>

      {/* Главный блок */}
      <section
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "48px 24px 80px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "36px",
          alignItems: "center",
        }}
      >
        {/* Левая часть */}
        <div>
          <div
            style={{
              display: "inline-flex",
              padding: "10px 14px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(31,31,31,0.08)",
              marginBottom: "26px",
              fontSize: "14px",
              color: "#8A6A3B",
            }}
          >
            Новый формат creator-портфолио
          </div>

          <h1
            style={{
              fontSize: "clamp(54px, 7vw, 92px)",
              lineHeight: "0.92",
              letterSpacing: "-0.07em",
              margin: "0 0 28px",
              maxWidth: "760px",
            }}
          >
            Выгляди как creator,
            которого выбирают бренды
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.6",
              color: "#5F5A52",
              maxWidth: "650px",
              marginBottom: "38px",
            }}
          >
            Один красивый Creator House вместо PDF, бесконечных сообщений
            и устаревших медиакитов.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            <button
              style={{
                border: "none",
                borderRadius: "999px",
                background: "#1F1F1F",
                color: "white",
                padding: "18px 28px",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 16px 40px rgba(31,31,31,0.18)",
              }}
            >
              Создать Creator House
            </button>

            <button
              style={{
                borderRadius: "999px",
                border: "1px solid rgba(31,31,31,0.10)",
                background: "rgba(255,255,255,0.65)",
                padding: "18px 28px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Посмотреть пример
            </button>
          </div>

          {/* Маленькие преимущества */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {[
              "Актуальные данные",
              "Работает на телефоне",
              "Без PDF",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "12px 16px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.68)",
                  border: "1px solid rgba(31,31,31,0.08)",
                  fontSize: "14px",
                  color: "#5B564E",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Правая часть */}
        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          {/* Карточка creator */}
          <div
            style={{
              background: "rgba(255,255,255,0.74)",
              borderRadius: "34px",
              padding: "28px",
              border: "1px solid rgba(31,31,31,0.08)",
              boxShadow: "0 24px 80px rgba(31,31,31,0.08)",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "22px",
                background:
                  "linear-gradient(135deg, #D8C2A0 0%, #9E7C4A 100%)",
                marginBottom: "18px",
              }}
            />

            <h2
              style={{
                margin: "0 0 10px",
                fontSize: "36px",
                letterSpacing: "-0.05em",
              }}
            >
              Alexandra
            </h2>

            <p
              style={{
                margin: "0 0 24px",
                color: "#6A655D",
                fontSize: "17px",
              }}
            >
              Lifestyle creator • Instagram • TikTok
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >
              <div
                style={{
                  background: "#F7F2EA",
                  borderRadius: "24px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "34px",
                    fontWeight: 700,
                    marginBottom: "6px",
                  }}
                >
                  128K
                </div>

                <div
                  style={{
                    color: "#6A655D",
                  }}
                >
                  аудитория
                </div>
              </div>

              <div
                style={{
                  background: "#F7F2EA",
                  borderRadius: "24px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "34px",
                    fontWeight: 700,
                    marginBottom: "6px",
                  }}
                >
                  6.8%
                </div>

                <div
                  style={{
                    color: "#6A655D",
                  }}
                >
                  вовлечённость
                </div>
              </div>
            </div>
          </div>

          {/* Нижняя карточка */}
          <div
            style={{
              background: "#1F1F1F",
              color: "white",
              borderRadius: "34px",
              padding: "28px",
              boxShadow: "0 24px 80px rgba(31,31,31,0.18)",
            }}
          >
            <div
              style={{
                color: "#D5B781",
                marginBottom: "12px",
                fontSize: "15px",
              }}
            >
              Рекламное предложение
            </div>

            <h3
              style={{
                margin: "0 0 14px",
                fontSize: "34px",
                letterSpacing: "-0.04em",
              }}
            >
              360 продвижение
            </h3>

            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.72)",
                fontSize: "17px",
              }}
            >
              Instagram • Telegram • TikTok
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
