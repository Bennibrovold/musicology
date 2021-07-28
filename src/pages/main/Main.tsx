import React from "react";
import "./main.scss";

import GroupOneImage from "../../assets/images/group-one-image.png";

import DanceTourAmerica from "../../assets/images/dance-tour-america.png";
import DanceTourAsia from "../../assets/images/dance-tour-asia.png";
import DanceTourAustralia from "../../assets/images/dance-tour-australia.png";

import BadgeIcon from "../../assets/images/badge-icon.png";
import PricingCardButton from "../../components/PricingCardButton";
import PageCentre from "../../components/PageCentre/PageCentre";

import VaryousDanceBlock from "./../../components/VaryousDanceBlock/VaryousDanceBlock";

import VaryousOne from "../../assets/images/varyous-one.png";
import VaryousTwo from "../../assets/images/varyous-two.png";

const Main = () => {
  return (
    <PageCentre>
      <div className="main-page">
        <div className="welcome-block">
          <div className="title">Title Here</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </div>
          <div className="button">
            <button>REGISTER NOW</button>
          </div>
        </div>
      </div>
      <section>
        <div className="dance-tour">
          <div className="title">DANCE TOUR</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </div>
          <div className="card-gorup-wrapper">
            <div className="card-group">
              <div className="card-item">
                <div className="card-item__image">
                  <img src={DanceTourAmerica} />
                </div>
                <div className="card-item__content">
                  <div className="card-item__content-title">America</div>
                  <div className="card-item__content-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
              <div className="card-item">
                <div className="card-item__image">
                  <img src={DanceTourAsia} />
                </div>
                <div className="card-item__content">
                  <div className="card-item__content-title">Asia</div>
                  <div className="card-item__content-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
              <div className="card-item">
                <div className="card-item__image">
                  <img src={DanceTourAustralia} />
                </div>
                <div className="card-item__content">
                  <div className="card-item__content-title">Australia</div>
                  <div className="card-item__content-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pricing">
          <div className="title">PRICING</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </div>
          <div className="pricing-card-group-wrapper">
            <div className="pricing-card-group">
              <PricingCardButton
                image={BadgeIcon}
                altImage={"badge icon"}
                title={"Basic"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                price={"$150.00"}
              />
              <PricingCardButton
                image={BadgeIcon}
                altImage={"badge icon"}
                title={"Professional"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                price={"$200.00"}
              />
              <PricingCardButton
                image={BadgeIcon}
                altImage={"badge icon"}
                title={"Ultimate"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                price={"$250.00"}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="varyous-dance">
          <div className="varyous-dance-group">
            <VaryousDanceBlock
              image={VaryousOne}
              altImage={"dance man"}
              title={"AMAZING DANCE"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
              }
            />
            <VaryousDanceBlock
              image={VaryousTwo}
              altImage={"dance man"}
              title={"Best dance"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
              }
              imagePosition={"right"}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="statistics">
          <div className="title">OUR STATISTICS</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.{" "}
          </div>
          <div className="statistics-group">
            <div className="statistics-item">
              <div className="statistics-item__number">1240+</div>
              <div className="statistics-item__name">Club</div>
            </div>
            <div className="statistics-item">
              <div className="statistics-item__number">2000+</div>
              <div className="statistics-item__name">Active Member</div>
            </div>
            <div className="statistics-item">
              <div className="statistics-item__number">1000+</div>
              <div className="statistics-item__name">Community</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="review">
          <div className="review-image"></div>
          <div className="review-content">
            <div className="review-content__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.
            </div>
            <div className="review-content__title">Herbert Simon</div>
          </div>
        </div>
      </section>
      <section>
        <div className="subscribe">
          <div className="title">SUBSCRIBE</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </div>
          <div className="subscribe-field">
            <form>
              <input placeholder="Your Email" />
              <button>SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </section>
    </PageCentre>
  );
};

export default Main;
