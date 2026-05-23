export default function Home() {
  return (
    <main className="hero-page">
      <section
        className="hero-shell"
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          padding: "42px 72px 76px",
        }}
      >
        <header
          className="hero-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "96px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div className="logo-mark" aria-label="Creator House logo">
              <span className="lt" />
              <span className="lb" />
              <span className="rt" />
              <span className="right-full" />
              <span className="rb" />
              <span className="dot" />
            </div>

            <div>
              <div
                style={{
                  fontSize: "23px",
                  fontWeight: 700,
                  letterSpacing: "0.24em",
                  lineHeight: 1,
                }}
              >
                CREATOR HOUSE
              </div>
              <div
                style={{
                  fontSize: "16px",
                  color: "#b08957",
                  marginTop: "9px",
                  letterSpacing: "0.02em",
                }}
              >
                professional creator profile
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
            <button
              style={{
                border: "none",
                background: "transparent",
                color: "#1f1f1f",
                fontSize: "19px",
                fontWeight: 600,
              }}
            >
              Войти
            </button>

            <button
              style={{
                border: "none",
                background: "#1f1f1f",
                color: "white",
                borderRadius: "999px",
                padding: "20px 38px",
                fontSize: "19px",
                fontWeight: 600,
                boxShadow: "0 22px 44px rgba(31,31,31,0.16)",
              }}
            >
              Создать профиль
            </button>
          </div>
        </header>

        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 620px",
            gap: "74px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "15px 26px",
                borderRadius: "999px",
                border: "1px solid rgba(176,137,87,0.20)",
                background: "rgba(255,255,255,0.48)",
                marginBottom: "46px",
              }}
            >
              <span
                style={{
                  color: "#b08957",
                  fontSize: "18px",
                  fontWeight: 500,
                  letterSpacing: "0.045em",
                }}
              >
                Новый формат профессионального профиля
              </span>
            </div>

            <h1
              className="display hero-title"
              style={{
                fontSize: "88px",
                lineHeight: "1.03",
                margin: "0 0 32px",
                maxWidth: "780px",
              }}
            >
              Выгляди как
              <br />
              блогер, которого
              <br />
              выбирают бренды
            </h1>

            <p
              className="hero-subtitle"
              style={{
                fontSize: "23px",
                lineHeight: "1.58",
                color: "#5f5b55",
                maxWidth: "720px",
                margin: "0 0 42px",
              }}
            >
              Один красивый Creator House вместо PDF,
              <br />
              бесконечных сообщений и устаревших медиакитов.
            </p>

            <div
              className="hero-actions"
              style={{
                display: "flex",
                gap: "24px",
                marginBottom: "66px",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  border: "none",
                  background: "#1f1f1f",
                  color: "white",
                  borderRadius: "999px",
                  padding: "22px 38px",
                  fontSize: "20px",
                  fontWeight: 650,
                  boxShadow: "0 22px 44px rgba(31,31,31,0.15)",
                }}
              >
                Создать Creator House
              </button>

              <button
                style={{
                  border: "1px solid rgba(31,31,31,0.20)",
                  background: "rgba(255,255,255,0.44)",
                  color: "#1f1f1f",
                  borderRadius: "999px",
                  padding: "21px 38px",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Посмотреть пример
              </button>
            </div>

            <div
              className="hero-features"
              style={{
                display: "flex",
                gap: "46px",
                alignItems: "center",
              }}
            >
              {[
                ["⌁", "Проверено аналитикой"],
                ["▥", "Актуальная статистика"],
                ["▢", "Закрыто от посторонних"],
              ].map(([icon, text]) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#b08957",
                      fontSize: "30px",
                      lineHeight: 1,
                    }}
                  >
                    {icon}
                  </span>
                  <span
                    style={{
                      fontSize: "17px",
                      lineHeight: "1.25",
                      color: "#3e3b37",
                      maxWidth: "150px",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="preview-wrap"
            style={{
              position: "relative",
              height: "820px",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: "-40px",
                top: "126px",
                width: "500px",
                height: "650px",
                borderRadius: "42px",
                background: "linear-gradient(180deg, #1d1d1d 0%, #292929 100%)",
                transform: "rotate(7deg)",
                boxShadow: "0 30px 80px rgba(31,31,31,0.18)",
              }}
            />

            <div
              style={{
                position: "absolute",
                right: "78px",
                top: "88px",
                width: "470px",
                height: "660px",
                borderRadius: "42px",
                background: "linear-gradient(180deg, #fff2ee 0%, #ead0c6 100%)",
                transform: "rotate(-7deg)",
                boxShadow: "0 26px 70px rgba(159,105,88,0.13)",
                padding: "28px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#6a3f34",
                }}
              >
                Beauty profile
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "112px",
                  left: "42px",
                  width: "170px",
                  height: "220px",
                  borderRadius: "90px 90px 38px 38px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.18))",
                }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                right: "34px",
                top: "48px",
                width: "500px",
                height: "680px",
                borderRadius: "42px",
                background: "rgba(255,255,255,0.88)",
                transform: "rotate(-2deg)",
                boxShadow: "0 26px 70px rgba(31,31,31,0.08)",
              }}
            />

            <div
              className="preview-card"
              style={{
                position: "absolute",
                right: "44px",
                top: "0",
                width: "520px",
                borderRadius: "44px",
                background: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(255,255,255,0.78)",
                boxShadow: "0 34px 95px rgba(31,31,31,0.12)",
                padding: "30px",
              }}
            >
              <div
                style={{
                  color: "#b08957",
                  fontSize: "17px",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  marginBottom: "24px",
                }}
              >
                ТАК БРЕНД УВИДИТ ТЕБЯ
              </div>

              <div
                style={{
                  height: "300px",
                  borderRadius: "32px",
                  overflow: "hidden",
                  position: "relative",
                  marginBottom: "24px",
                  background:
                    "linear-gradient(180deg, #e9c48d 0%, #b47a31 48%, #25170d 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at 72% 22%, rgba(255,255,255,0.46), transparent 24%), linear-gradient(180deg, transparent 42%, rgba(0,0,0,0.72))",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    left: "30px",
                    bottom: "30px",
                    color: "white",
                  }}
                >
                  <div
                    className="display"
                    style={{
                      fontSize: "52px",
                      lineHeight: 1,
                      marginBottom: "12px",
                    }}
                  >
                    Alexandra
                  </div>

                  <div
                    style={{
                      fontSize: "19px",
                      opacity: 0.9,
                    }}
                  >
                    Lifestyle блогер • Instagram • TikTok
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                {[
                  ["128K", "аудитория"],
                  ["6.8%", "вовлечённость"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    style={{
                      background: "#f6f1e8",
                      borderRadius: "24px",
                      padding: "24px 26px",
                    }}
                  >
                    <div
                      className="display"
                      style={{
                        fontSize: "38px",
                        lineHeight: 1,
                        marginBottom: "10px",
                      }}
                    >
                      {value}
                    </div>
                    <div
                      style={{
                        fontSize: "17px",
                        color: "#625e58",
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
                  gap: "16px",
                  marginBottom: "18px",
                }}
              >
                <div
                  style={{
                    background: "rgba(246,241,232,0.76)",
                    borderRadius: "22px",
                    padding: "22px 24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      color: "#b08957",
                      fontSize: "17px",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "#73bf78",
                        boxShadow: "0 0 0 8px rgba(115,191,120,0.16)",
                      }}
                    />
                    Проверено
                  </div>
                  <strong style={{ fontSize: "19px" }}>аналитикой</strong>
                </div>

                <div
                  style={{
                    background: "rgba(246,241,232,0.76)",
                    borderRadius: "22px",
                    padding: "22px 24px",
                  }}
                >
                  <div
                    style={{
                      color: "#b08957",
                      fontSize: "17px",
                      marginBottom: "8px",
                    }}
                  >
                    Кейс
                  </div>
                  <strong style={{ fontSize: "19px" }}>248K просмотров</strong>
                </div>
              </div>

              <div
                style={{
                  background: "#1f1f1f",
                  borderRadius: "28px",
                  padding: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "18px",
                }}
              >
                <div>
                  <div
                    style={{
                      color: "#d8b885",
                      fontSize: "17px",
                      lineHeight: "1.25",
                      marginBottom: "8px",
                    }}
                  >
                    Рекламное
                    <br />
                    предложение
                  </div>

                  <div
                    className="display"
                    style={{
                      color: "white",
                      fontSize: "36px",
                      lineHeight: 1,
                    }}
                  >
                    от $950
                  </div>
                </div>

                <button
                  style={{
                    border: "none",
                    background: "white",
                    color: "#1f1f1f",
                    borderRadius: "999px",
                    padding: "20px 28px",
                    fontSize: "18px",
                    fontWeight: 650,
                    lineHeight: 1.15,
                    minWidth: "190px",
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
      </section>
    </main>
  );
}
