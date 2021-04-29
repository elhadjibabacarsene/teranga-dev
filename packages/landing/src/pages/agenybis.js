import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { agencyTheme } from 'common/theme/agency';
import { ResetCSS } from 'common/assets/css/style';
import { GlobalStyle, AgencyWrapper } from 'containers/Agency/Agency/agency.style';
import Navbar from 'containers/Agency/Agency/Navbar';
import BannerSection from 'containers/Agency/Agency/BannerSection';
import FeatureSection from 'containers/Agency/Agency/FeatureSection';
import AboutUsSection from 'containers/Agency/Agency/AboutUsSection';
import WorkHistory from 'containers/Agency/Agency/WorkHistory';
import BlogSection from 'containers/Agency/Agency/BlogSection';
import TestimonialSection from 'containers/Agency/Agency/TestimonialSection';
import TeamSection from 'containers/Agency/Agency/TeamSection';
import VideoSection from 'containers/Agency/Agency/VideoSection';
import NewsletterSection from 'containers/Agency/Agency/NewsletterSection';
import QualitySection from 'containers/Agency/Agency/QualitySection';
import Footer from 'containers/Agency/Agency/Footer';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import FaqSection from 'containers/Agency/Agency/FaqSection';

const Main = () => {
    return (
        <ThemeProvider theme={agencyTheme}>
            <Fragment>
                {/* Start agency head section */}
                <Head>
                    <title>TerangaDev | Le spécialiste du Développement logiciel</title>
                    <meta name="theme-color" content="#10ac84" />
                    <meta name="Description" content="React next landing page" />
                    {/* Load google fonts */}
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
                        rel="stylesheet"
                    />
                </Head>
                <ResetCSS />
                <GlobalStyle />
                {/* End of agency head section */}
                {/* Start agency wrapper section */}
                <AgencyWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar />
                        </DrawerProvider>
                    </Sticky>
                    <BannerSection />
                    <FeatureSection />
                    <AboutUsSection />
                    <WorkHistory />
                    <BlogSection />
                    <QualitySection />
                    <VideoSection />
                    <TestimonialSection />
                    <TeamSection />
                    <FaqSection />
                    <NewsletterSection />
                    <Footer />
                </AgencyWrapper>
                {/* End of agency wrapper section */}
            </Fragment>
        </ThemeProvider>
    );
};
export default Main;
