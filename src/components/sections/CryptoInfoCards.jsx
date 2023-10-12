import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronUp,
  faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { loadIcon } from "../../composables/iconLoader";
import { removeFirstChar, isNumPositive } from "../../helpers/utils";


function CryptoInfoCards() {
  const [cryptos, setCryptos] = useState([]);

  const apiUrl = "https://api.coinlore.net/api/tickers/";

  useEffect(() => {
    const getCryptoData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        const cryptoToDisplay = ["BTC", "ETH", "XRP", "LTC", "BCH"];
        let filteredCryptoData = result.data.filter((item) =>
          cryptoToDisplay.includes(item.symbol)
        );
        setCryptos([...filteredCryptoData]);
      } catch (err) {
        console.log(err);
      }
    };

    getCryptoData();
  }, []);

  return (
    <section className="crypto-info-cards">
      <h2 className="visually-hidden">Crypto currency charts</h2>

      <div className="crypto-info-cards__wrapper">
        {cryptos.map((crypto) => (
          <article className="crypto-info-cards__card" key={crypto.id}>
            <div className="crypto-info-cards__title--wrapper">
              <img
                src={loadIcon[crypto.symbol]}
                alt=""
                className="crypto-info-cards__icon"
              />
              <h3 className="crypto-info-cards__title">
                {crypto.symbol}
                <div
                  className="crypto-info-cards__currency"
                  aria-label="currency"
                >
                  {crypto.name}
                </div>
              </h3>
            </div>
            <div className="crypto-info-cards__separator"></div>
            <div className="crypto-info-cards__price" aria-label="price">
              ${crypto.price_usd}
            </div>
            <div
              className={`crypto-info-cards__percent--change ${
                crypto.percent_change_24h > 1 ? " positive" : "negative"
              }`}
              aria-label="percent change"
            >
              <FontAwesomeIcon
                icon={
                  isNumPositive(crypto.percent_change_24h)
                    ? faCircleChevronUp
                    : faCircleChevronDown
                }
                className="crypto-info-cards__percent--change-icon"
              />
              {removeFirstChar(crypto.percent_change_24h, "-")}%
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CryptoInfoCards;
