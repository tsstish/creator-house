export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F6F1E8",
      }}
    >
      <section
        style={{
          maxWidth: "1420px",
          margin: "0 auto",
          padding: "34px 44px 80px",
        }}
      >
        {/* HEADER */}

        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "54px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            {/* LOGO */}

            <div
              style={{
                width: "34px",
                height: "34px",
                position: "relative",
              }}
            >
              {/* left top */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "12px",
                  height: "12px",
                  borderLeft: "3px solid #B08957",
                  borderTop: "3px solid #B08957",
                  borderRadius: "3px 0 0 0",
                }}
              />

              {/* right top */}
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  width: "12px",
                  height: "12px",
                  borderRight: "3px solid #B08957",
                  borderTop: "3px solid #B08957",
                  borderRadius: "0 3px 0 0",
                }}
              />

              {/* left bottom */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "12px",
                  height: "12px",
                  borderLeft: "3px solid #B08957",
                  borderBottom: "3px solid #B08957",
                  borderRadius: "0 0 0 3px",
                }}
              />

              {/* right bottom FULL */}
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  width: "12px",
                  height: "12px",
                  borderRight: "3px solid #B08957",
                  borderBottom: "3px solid #B08957",
                  borderRadius: "0 0 3px 0",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#B08957",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>

            <div>
              <div
                style={{
                  fontSize: "19px",
                  fontWeight: 600,
                  letterSpacing: "0.28em",
                }}
              >
                CREATOR HOUSE
              </div>

              <div
                style={{
                  fontSize: "13px",
                  color: "#B08957",
                  marginTop: "4px",
                  letterSpacing: "0.05em",
                }}
              >
                professional creator profile
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <button
              style={{
                border: "none",
                background: "transparent",
                fontSize: "18px",
                cursor: "pointer",
                color: "#1F1F1F",
              }}
            >
              Войти
            </button>

            <button
              style={{
                border: "none",
                background: "#1F1F1F",
                color: "white",
                padding: "18px 34px",
                borderRadius: "999px",
                fontSize: "18px",
                cursor: "pointer",
                boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
              }}
            >
              Создать профиль
            </button>
          </div>
        </header>

        {/* HERO */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 620px",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {/* LEFT */}

          <div>
            <div
              style={{
                display: "inline-flex",
                padding: "16px 26px",
                borderRadius: "999px",
                border: "1px solid rgba(176,137,87,0.16)",
                background: "rgba(255,255,255,0.52)",
                marginBottom: "36px",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  color: "#B08957",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                Новый формат профессионального профиля
              </span>
            </div>

            <h1
              className="display"
              style={{
                fontSize: "112px",
                lineHeight: "0.92",
                margin: "0 0 36px",
                maxWidth: "760px",
              }}
            >
              Выгляди как блогер, которого выбирают бренды
            </h1>

            <p
              style={{
                fontSize: "26px",
                lineHeight: "1.55",
                color: "#5D5A55",
                maxWidth: "720px",
                marginBottom: "44px",
              }}
            >
              Один красивый Creator House вместо PDF, бесконечных сообщений и
              устаревших медиакитов.
            </p>

            <div
              style={{
                display: "flex",
                gap: "18px",
                marginBottom: "56px",
              }}
            >
              <button
                style={{
                  border: "none",
                  background: "#1F1F1F",
                  color: "white",
                  padding: "24px 40px",
                  borderRadius: "999px",
                  fontSize: "22px",
                  cursor: "pointer",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.14)",
                }}
              >
                Создать Creator House
              </button>

              <button
                style={{
                  border: "1px solid rgba(31,31,31,0.18)",
                  background: "rgba(255,255,255,0.5)",
                  padding: "24px 40px",
                  borderRadius: "999px",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              >
                Посмотреть пример
              </button>
            </div>

            {/* FEATURES */}

            <div
              style={{
                display: "flex",
                gap: "44px",
              }}
            >
              {[
                "Проверено аналитикой",
                "Актуальная статистика",
                "Закрыто от посторонних",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "rgba(176,137,87,0.16)",
                    }}
                  />

                  <span
                    style={{
                      fontSize: "18px",
                      color: "#5A5751",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}

          <div
            style={{
              position: "relative",
              height: "860px",
            }}
          >
            {/* back card */}

            <div
              style={{
                position: "absolute",
                right: "-10px",
                top: "120px",
                width: "480px",
                height: "700px",
                borderRadius: "44px",
                background:
                  "linear-gradient(180deg, #1D1D1D 0%, #262626 100%)",
                transform: "rotate(7deg)",
                opacity: 0.98,
              }}
            />

            {/* middle card */}

            <div
              style={{
                position: "absolute",
                right: "70px",
                top: "70px",
                width: "470px",
                height: "720px",
                borderRadius: "44px",
                background:
                  "linear-gradient(180deg, #F8EDE7 0%, #E7D4CC 100%)",
                transform: "rotate(-6deg)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
              }}
            />

            {/* front */}

            <div
              style={{
                position: "absolute",
                right: "20px",
                top: 0,
                width: "520px",
                borderRadius: "44px",
                background: "rgba(255,255,255,0.88)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.7)",
                boxShadow: "0 30px 90px rgba(0,0,0,0.10)",
                padding: "28px",
              }}
            >
              <div
                style={{
                  color: "#B08957",
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  marginBottom: "22px",
                }}
              >
                ТАК БРЕНД УВИДИТ ТЕБЯ
              </div>

              {/* PHOTO */}

              <div
                style={{
                  height: "320px",
                  borderRadius: "36px",
                  overflow: "hidden",
                  position: "relative",
                  marginBottom: "22px",
                  background:
                    "linear-gradient(180deg, #E5C28F 0%, #B37A33 45%, #24170D 100%)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at 72% 20%, rgba(255,255,255,0.45), transparent 24%), linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.70))",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    left: "28px",
                    bottom: "30px",
                    zIndex: 2,
                    color: "white",
                  }}
                >
                  <div
                    className="display"
                    style={{
                      fontSize: "72px",
                      lineHeight: 1,
                      marginBottom: "12px",
                    }}
                  >
                    Alexandra
                  </div>

                  <div
                    style={{
                      fontSize: "22px",
                      opacity: 0.92,
                    }}
                  >
                    Lifestyle блогер • Instagram • TikTok
                  </div>
                </div>
              </div>

              {/* STATS */}

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
                      background: "#F5F1EA",
                      borderRadius: "26px",
                      padding: "28px",
                    }}
                  >
                    <div
                      className="display"
                      style={{
                        fontSize: "52px",
                        marginBottom: "10px",
                      }}
                    >
                      {value}
                    </div>

                    <div
                      style={{
                        fontSize: "22px",
                        color: "#66625D",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* bottom blocks */}

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
                    background: "rgba(245,241,234,0.7)",
                    borderRadius: "24px",
                    padding: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        background: "#BFE2C6",
                        boxShadow: "0 0 0 8px rgba(191,226,198,0.22)",
                      }}
                    />

                    <span
                      style={{
                        color: "#B08957",
                        fontSize: "18px",
                      }}
                    >
                      Проверено
                    </span>
                  </div>

                  <strong
                    style={{
                      fontSize: "24px",
                    }}
                  >
                    аналитикой
                  </strong>
                </div>

                <div
                  style={{
                    background: "rgba(245,241,234,0.7)",
                    borderRadius: "24px",
                    padding: "24px",
                  }}
                >
                  <div
                    style={{
                      color: "#B08957",
                      fontSize: "18px",
                      marginBottom: "10px",
                    }}
                  >
                    Кейс
                  </div>

                  <strong
                    style={{
                      fontSize: "24px",
                    }}
                  >
                    248K просмотров
                  </strong>
                </div>
              </div>

              {/* CTA */}

              <div
                style={{
                  background: "#1F1F1F",
                  borderRadius: "30px",
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
                      color: "#D8B885",
                      fontSize: "18px",
                      marginBottom: "10px",
                    }}
                  >
                    Рекламное предложение
                  </div>

                  <div
                    className="display"
                    style={{
                      color: "white",
                      fontSize: "58px",
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
                    color: "#1F1F1F",
                    padding: "24px 34px",
                    borderRadius: "999px",
                    fontSize: "22px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Предложить сотрудничество
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
