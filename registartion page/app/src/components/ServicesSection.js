import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What our company can do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Landing Product on press"
            desc="We do land your product on International news channels with some unique adds"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Email marketing"
            desc="We Send Emails to our subscribes and Make them aware of your products by giving discounts and offers"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Referral marketing"
            desc="Referral marketing, also known as word of mouth marketing, is one of the oldest marketing methods around.We follow this technique to extend your product"
          />
           <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title=" Instagram"
            desc="We have huge followers in instagram.We post your product in our official page ."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Youtube"
            desc="We Also have Great number of subscribers in our youtube channel.We Give A brief review on your product and make your goods out of stock"
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}